/* ==========================================================================
   ALWAYS FRESH TRADING (AFT) - APPLICATION LOGIC
   ========================================================================== */

// 1. PRODUCT CATALOG DATASET (Highly detailed B2B Sourcing Specs)
let currentLanguage = localStorage.getItem('language') || 'en';
let PRODUCE_CATALOG = typeof PRODUCE_CATALOG_DATA !== 'undefined' ? PRODUCE_CATALOG_DATA[currentLanguage] : [];

window.setLanguage = function(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  if (typeof PRODUCE_CATALOG_DATA !== 'undefined') {
    PRODUCE_CATALOG = PRODUCE_CATALOG_DATA[currentLanguage];
  }
  
  // Update UI text based on data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let translation = TRANSLATIONS[lang];
    keys.forEach(k => {
      if (translation) translation = translation[k];
    });
    if (translation) el.innerHTML = translation;
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keys = el.getAttribute('data-i18n-placeholder').split('.');
    let translation = TRANSLATIONS[lang];
    keys.forEach(k => {
      if (translation) translation = translation[k];
    });
    if (translation) el.placeholder = translation;
  });
  
  // Update Active Button States
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll(`.lang-btn[onclick="setLanguage('${lang}')"]`).forEach(btn => {
    btn.classList.add('active');
  });

  // Re-render Catalog if it exists
  if (document.getElementById('catalogGrid') || document.querySelector('.catalog-grid')) {
    if (typeof renderCatalog === 'function') {
      renderCatalog();
      if (typeof updateTabBadgeCounts === 'function') updateTabBadgeCounts();
    }
  }
};

// 2. DOM ELEMENTS SELECTORS
const DOM = {
  navbar: document.querySelector(".navbar"),
  mobileToggle: document.querySelector(".mobile-nav-toggle"),
  navMenu: document.querySelector(".nav-menu"),
  navLinks: document.querySelectorAll(".nav-link"),
  
  // Search & Catalog
  searchInput: document.querySelector(".search-input-field"),
  filterButtons: document.querySelectorAll(".filter-tab-btn"),
  catalogGrid: document.getElementById("catalog-grid"),
  
  // Stats Counters
  statsSection: document.querySelector(".about-stats-compact"),
  statNumbers: document.querySelectorAll(".stat-num-val"),
  
  // Modal Specs
  modalBackdrop: document.getElementById("specs-modal"),
  modalClose: document.querySelector(".modal-close-btn"),
  modalEmoji: document.querySelector(".modal-emoji-box"),
  modalTitle: document.getElementById("modal-title"),
  modalTags: document.getElementById("modal-tags"),
  modalDesc: document.getElementById("modal-desc"),
  modalSpecPacking: document.getElementById("spec-packing"),
  modalSpecTemp: document.getElementById("spec-temp"),
  modalSpecSeason: document.getElementById("spec-season"),
  modalSpecOrigin: document.getElementById("spec-origin"),
  modalSpecMin: document.getElementById("spec-min-order"),
  
  // Inquiry Form & Success Banner
  formTabClients: document.getElementById("tab-clients"),
  formTabSuppliers: document.getElementById("tab-suppliers"),
  formSectionClients: document.getElementById("form-clients"),
  formSectionSuppliers: document.getElementById("form-suppliers"),
  formClientsActual: document.getElementById("actual-form-clients"),
  formSuppliersActual: document.getElementById("actual-form-suppliers"),
  formSuccessClients: document.getElementById("success-clients"),
  formSuccessSuppliers: document.getElementById("success-suppliers")
};

// State Variables
let currentFilter = "all";
let searchQuery = "";
let hasStatsAnimated = false;

// Hybrid Pagination State
let currentPage = 1;
const ITEMS_PER_PAGE_DESKTOP = 8; // Beautiful 4x2 desktop grid
let mobileVisibleCount = 10; // Load 10 items initially on phone view
const ITEMS_PER_LOAD_MOBILE = 10;

// Device check utility
const isMobileDevice = () => window.innerWidth <= 480;

// ==========================================================================
// 3. STICKY NAV & MOBILE MENU
// ==========================================================================

// Adjust navbar padding/blur on scroll
window.addEventListener("scroll", () => {
  if (!DOM.navbar) return;
  
  if (window.scrollY > 40) {
    DOM.navbar.classList.add("scrolled");
  } else {
    DOM.navbar.classList.remove("scrolled");
  }
  
  // Update active nav link based on scroll section
  updateActiveNavLinkOnScroll();
});

// Mobile menu toggle open
if (DOM.mobileToggle) {
  DOM.mobileToggle.addEventListener("click", () => {
    DOM.mobileToggle.classList.toggle("open");
    DOM.navMenu.classList.toggle("open");
  });
}

// Close mobile menu when clicking a link
DOM.navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    
    // Only smooth scroll if link is an anchor on the current page
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu
        if (DOM.mobileToggle) DOM.mobileToggle.classList.remove("open");
        if (DOM.navMenu) DOM.navMenu.classList.remove("open");
        
        // Scroll to element offset (compensating for navbar)
        const navbarHeight = DOM.navbar && DOM.navbar.classList.contains("scrolled") ? 70 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update active nav styling
        DOM.navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

// Scrollspy logic to update active nav links (Home page only)
function updateActiveNavLinkOnScroll() {
  if (document.querySelectorAll("section[id]").length === 0) return;
  const scrollPosition = window.scrollY + 200; // Offset for trigger point
  
  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      DOM.navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================================================
// 4. ABOUT STATS COMPACT COUNTER ANIMATION
// ==========================================================================

function animateCounters() {
  DOM.statNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    const speed = 1200; // Total duration in ms
    const increment = target / (speed / 16); // ~60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCounter();
  });
}

// Setup IntersectionObserver for Stats Section
if (DOM.statsSection && DOM.statNumbers.length > 0) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStatsAnimated) {
        animateCounters();
        hasStatsAnimated = true;
        statsObserver.unobserve(DOM.statsSection);
      }
    });
  }, { threshold: 0.25 }); // Animate when 25% visible
  
  statsObserver.observe(DOM.statsSection);
}

// ==========================================================================
// 5. PRODUCE CATALOG SEARCH & FILTERING (Catalog page only)
// ==========================================================================

// Pre-calculate tab counts
function updateTabBadgeCounts() {
  if (!DOM.filterButtons.length) return;
  DOM.filterButtons.forEach(btn => {
    const category = btn.getAttribute("data-filter");
    const badge = btn.querySelector(".tab-count");
    if (badge) {
      if (category === "all") {
        badge.innerText = PRODUCE_CATALOG.length;
      } else {
        const count = PRODUCE_CATALOG.filter(p => p.category === category).length;
        badge.innerText = count;
      }
    }
  });
}

// Generate the Product HTML Card template
function createProductCardHTML(product) {
  const tagsHTML = product.tags.map(tag => 
    `<span class="product-tag ${tag}">${tag}</span>`
  ).join("");
  
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-visual-wrapper">
        ${product.emoji}
      </div>
      <div class="product-card-right">
        <div class="product-tag-container">
          ${tagsHTML}
        </div>
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-specs-preview">
          <div class="spec-preview-row">
            <span class="spec-preview-label">Pack Style:</span>
            <span class="spec-preview-val">${product.packaging.split("/")[0].trim()}</span>
          </div>
          <div class="spec-preview-row">
            <span class="spec-preview-label">Region:</span>
            <span class="spec-preview-val">${product.origin.split(",")[0].trim()}</span>
          </div>
        </div>
        <button class="btn-view-specs" onclick="openProductSpecs('${product.id}')">
          <span>View Sourcing Specs</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  `;
}

// Render filtered produce grid
function renderCatalog() {
  if (!DOM.catalogGrid) return;
  
  // Clear previous grid contents
  DOM.catalogGrid.innerHTML = "";
  
  // Filter products based on search term & category tab selection
  const filtered = PRODUCE_CATALOG.filter(product => {
    // 1. Category Filter
    const matchesCategory = currentFilter === "all" || product.category === currentFilter;
    
    // 2. Search Query Filter
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.desc.toLowerCase().includes(normalizedQuery) ||
      product.origin.toLowerCase().includes(normalizedQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
      
    return matchesCategory && matchesSearch;
  });
  
  // Handle empty search results state
  if (filtered.length === 0) {
    DOM.catalogGrid.innerHTML = `
      <div class="catalog-no-results">
        <div class="no-results-emoji">🥬❌</div>
        <h3>No Wholesale Matches Found</h3>
        <p>We couldn't find any products matching "<strong>${searchQuery}</strong>" in the ${currentFilter === "all" ? "entire catalog" : currentFilter + " category"}. Try adjusting your keyword or resetting your filters.</p>
      </div>
    `;
    return;
  }
  
  // Check layout path: Mobile (View More) vs Desktop (Pagination)
  if (isMobileDevice()) {
    // 1. Mobile Infinite Load path
    const visible = filtered.slice(0, mobileVisibleCount);
    let gridHTML = "";
    visible.forEach(product => {
      gridHTML += createProductCardHTML(product);
    });
    
    DOM.catalogGrid.innerHTML = gridHTML;
    
    // Append 'View More' button if more crops exist
    if (filtered.length > mobileVisibleCount) {
      DOM.catalogGrid.innerHTML += `
        <div class="mobile-view-more-container">
          <button class="btn-view-more" onclick="loadMoreMobile()">
            <span>View More Crops</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      `;
    }
  } else {
    // 2. Desktop Numbered Pagination path
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE_DESKTOP);
    currentPage = Math.min(currentPage, Math.max(1, totalPages));
    
    const start = (currentPage - 1) * ITEMS_PER_PAGE_DESKTOP;
    const end = start + ITEMS_PER_PAGE_DESKTOP;
    const visible = filtered.slice(start, end);
    
    let gridHTML = "";
    visible.forEach(product => {
      gridHTML += createProductCardHTML(product);
    });
    
    DOM.catalogGrid.innerHTML = gridHTML;
    
    // Append pagination bar if there is more than 1 page
    if (totalPages > 1) {
      let paginationHTML = `<div class="catalog-pagination-container">`;
      
      // Prev trigger
      paginationHTML += `
        <button class="pag-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
          Prev
        </button>
      `;
      
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
          <button class="pag-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">
            ${i}
          </button>
        `;
      }
      
      // Next trigger
      paginationHTML += `
        <button class="pag-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
          Next
        </button>
      `;
      
      paginationHTML += `</div>`;
      DOM.catalogGrid.innerHTML += paginationHTML;
    }
  }
}

// Global page change trigger (Desktop)
window.changePage = function(pageNum) {
  currentPage = pageNum;
  renderCatalog();
  
  // Smooth scroll back to catalog header
  const catalogHeader = document.querySelector(".catalog-header") || document.getElementById("produce");
  if (catalogHeader) {
    const navbarHeight = DOM.navbar && DOM.navbar.classList.contains("scrolled") ? 70 : 80;
    window.scrollTo({
      top: catalogHeader.offsetTop - navbarHeight,
      behavior: "smooth"
    });
  }
};

// Global load more trigger (Mobile)
window.loadMoreMobile = function() {
  mobileVisibleCount += ITEMS_PER_LOAD_MOBILE;
  renderCatalog();
};

// Listen to screen size shifts to dynamically switch layouts
let lastIsMobileState = isMobileDevice();
window.addEventListener("resize", () => {
  const currentIsMobileState = isMobileDevice();
  if (currentIsMobileState !== lastIsMobileState) {
    lastIsMobileState = currentIsMobileState;
    currentPage = 1;
    mobileVisibleCount = 10;
    renderCatalog();
  }
});

// Event Listeners for Tabs
if (DOM.filterButtons.length > 0) {
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active tab buttons styling
      DOM.filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Reset paginations
      currentPage = 1;
      mobileVisibleCount = 10;
      
      // Update state & render
      currentFilter = btn.getAttribute("data-filter");
      renderCatalog();
    });
  });
}

// Event Listener for Search Text Input
if (DOM.searchInput) {
  let searchTimeout;
  DOM.searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
      // Reset paginations
      currentPage = 1;
      mobileVisibleCount = 10;
      
      searchQuery = e.target.value;
      renderCatalog();
    }, 150);
  });
}

// Initialize Catalog renders (If catalog elements exist in DOM)
if (DOM.catalogGrid) {
  updateTabBadgeCounts();
  renderCatalog();
}

// ==========================================================================
// 6. DETAILED SPECIFICATIONS MODAL POPUP (Catalog page only)
// ==========================================================================

// Global modal opener (accessible by onclick attribute in rendered HTML cards)
window.openProductSpecs = function(productId) {
  if (!DOM.modalBackdrop) return;
  const product = PRODUCE_CATALOG.find(p => p.id === productId);
  if (!product) return;
  
  // Populate details
  if (DOM.modalEmoji) DOM.modalEmoji.innerText = product.emoji;
  if (DOM.modalTitle) DOM.modalTitle.innerText = product.name;
  if (DOM.modalDesc) DOM.modalDesc.innerText = product.desc;
  
  // Tags mapping
  if (DOM.modalTags) {
    const tagsHTML = product.tags.map(tag => 
      `<span class="product-tag ${tag}">${tag}</span>`
    ).join("");
    DOM.modalTags.innerHTML = tagsHTML;
  }
  
  // B2B Parameters mapping
  if (DOM.modalSpecPacking) DOM.modalSpecPacking.innerText = product.packaging;
  if (DOM.modalSpecTemp) DOM.modalSpecTemp.innerText = product.temp;
  if (DOM.modalSpecSeason) DOM.modalSpecSeason.innerText = product.season;
  if (DOM.modalSpecOrigin) DOM.modalSpecOrigin.innerText = product.origin;
  if (DOM.modalSpecMin) DOM.modalSpecMin.innerText = product.minOrder;
  
  // Open modal backdrop
  DOM.modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent body scrolling
};

// Modal Close logic
window.closeProductModal = function() {
  if (!DOM.modalBackdrop) return;
  DOM.modalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
};

if (DOM.modalClose) {
  DOM.modalClose.addEventListener("click", window.closeProductModal);
}

if (DOM.modalBackdrop) {
  DOM.modalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.modalBackdrop) {
      window.closeProductModal();
    }
  });
}

// Close modal on ESC keypress
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && DOM.modalBackdrop && DOM.modalBackdrop.classList.contains("active")) {
    window.closeProductModal();
  }
});

// ==========================================================================
// 7. DUAL-TOGGLE INQUIRY FORM SUBMISSIONS (Home page only)
// ==========================================================================

// Form Switching Tabs
if (DOM.formTabClients && DOM.formTabSuppliers) {
  DOM.formTabClients.addEventListener("click", () => {
    DOM.formTabSuppliers.classList.remove("active");
    DOM.formTabClients.classList.add("active");
    
    DOM.formSectionSuppliers.classList.remove("active");
    DOM.formSectionClients.classList.add("active");
  });
  
  DOM.formTabSuppliers.addEventListener("click", () => {
    DOM.formTabClients.classList.remove("active");
    DOM.formTabSuppliers.classList.add("active");
    
    DOM.formSectionClients.classList.remove("active");
    DOM.formSectionSuppliers.classList.add("active");
  });
}

// Client Wholesale Form Submit handling
if (DOM.formClientsActual) {
  DOM.formClientsActual.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate loading inside button
    const submitBtn = DOM.formClientsActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Processing Wholesale Request...</span> <span style="animation: spin 1s linear infinite; display:inline-block;">🔄</span>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
      DOM.formClientsActual.style.display = "none";
      if (DOM.formSuccessClients) DOM.formSuccessClients.classList.add("active");
    }, 1200);
  });
}

// Supplier Partner Form Submit handling
if (DOM.formSuppliersActual) {
  DOM.formSuppliersActual.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate loading inside button
    const submitBtn = DOM.formSuppliersActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Registering Sourcing Partner...</span> <span style="animation: spin 1s linear infinite; display:inline-block;">🔄</span>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
      DOM.formSuppliersActual.style.display = "none";
      if (DOM.formSuccessSuppliers) DOM.formSuccessSuppliers.classList.add("active");
    }, 1200);
  });
}

// Quick resets for successful forms
window.resetWholesaleForm = function(type) {
  if (type === "clients" && DOM.formClientsActual) {
    if (DOM.formSuccessClients) DOM.formSuccessClients.classList.remove("active");
    DOM.formClientsActual.style.display = "flex";
    DOM.formClientsActual.reset();
    
    const submitBtn = DOM.formClientsActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Submit Inquiry</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    submitBtn.disabled = false;
  } else if (type === "suppliers" && DOM.formSuppliersActual) {
    if (DOM.formSuccessSuppliers) DOM.formSuccessSuppliers.classList.remove("active");
    DOM.formSuppliersActual.style.display = "flex";
    DOM.formSuppliersActual.reset();
    
    const submitBtn = DOM.formSuppliersActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Submit Partnership Request</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    submitBtn.disabled = false;
  }
};

// Initialize Language on Load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof setLanguage === 'function') {
    setLanguage(currentLanguage);
  }
});
