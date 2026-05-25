/* ==========================================================================
   ALWAYS FRESH TRADING (AFT) - APPLICATION LOGIC
   ========================================================================== */

// 1. PRODUCT CATALOG DATASET (Highly detailed B2B Sourcing Specs)
const PRODUCE_CATALOG = [
  // Vegetables
  {
    id: "carrots",
    name: "Jumbo Carrots",
    emoji: "🥕",
    category: "vegetables",
    desc: "Sweet, highly crisp premium orange carrots. Hand-harvested and sorted for size consistency. Excellent for grocery retail shelves, food processors, and heavy juicing operations.",
    tags: ["organic", "local"],
    packaging: "50 lb Sacks / 24-Count Bunched Bags",
    temp: "32°F - 34°F (95% Humidity)",
    season: "Year-Round (Peak: May - Nov)",
    origin: "Kern County, California",
    minOrder: "1 Pallet (1,600 lbs)"
  },
  {
    id: "bell-peppers",
    name: "Premium Bell Peppers",
    emoji: "🫑",
    category: "vegetables",
    desc: "Thick-walled, blocky colored bell peppers (Green, Red, Yellow). Sourced from greenhouse and open-field growers. Carefully cooled immediately post-harvest to maximize retail shelf life.",
    tags: ["local", "seasonal"],
    packaging: "1-1/9 Bushel Carton (Approx. 28 lbs)",
    temp: "45°F - 50°F (90% Humidity)",
    season: "June - December",
    origin: "Ventura County, California",
    minOrder: "50 Cartons"
  },
  {
    id: "bok-choy",
    name: "Shanghai Baby Bok Choy",
    emoji: "🥬",
    category: "asian",
    desc: "Tender, sweet stalks with vibrant jade green leaves. Premium high-density planting yields perfectly sized heads. Very popular with Asian grocery distributors and restaurant food services.",
    tags: ["local", "organic"],
    packaging: "30 lb Plastic Crate / Loose Pack",
    temp: "32°F - 34°F (95% Humidity)",
    season: "Year-Round (Peak: Mar - Oct)",
    origin: "Santa Maria Valley, California",
    minOrder: "40 Crates"
  },
  {
    id: "broccoli",
    name: "Crown Broccoli",
    emoji: "🥦",
    category: "vegetables",
    desc: "Compact, dark green heads with tight beads and clean-cut stalks. Ice-packed immediately during field packing to secure freshness, firmness, and deep coloration.",
    tags: ["local"],
    packaging: "20 lb Carton / 14-Count Bunched Banded",
    temp: "32°F (95% Humidity with Wet Ice)",
    season: "Year-Round (Peak: Apr - Dec)",
    origin: "Salinas Valley, California",
    minOrder: "80 Cartons"
  },
  {
    id: "cucumbers",
    name: "English Seedless Cucumbers",
    emoji: "🥒",
    category: "vegetables",
    desc: "Long, straight, dark green seedless cucumbers. Individually shrink-wrapped at origin to prevent moisture loss and skin damage during distribution. Crisp and refreshing texture.",
    tags: ["imported"],
    packaging: "12-Count Tray Carton",
    temp: "50°F - 54°F (90% Humidity)",
    season: "Year-Round (Imported)",
    origin: "Baja California, Mexico",
    minOrder: "100 Trays"
  },

  // Fruits
  {
    id: "oranges",
    name: "Navel Oranges",
    emoji: "🍊",
    category: "fruits",
    desc: "Sweet, juicy California navels with rich orange color and thin skins. High sugar-to-acid ratio makes them the standard for fresh retail and food service segments.",
    tags: ["local", "seasonal"],
    packaging: "4/5 Bushel Carton (Approx. 40 lbs)",
    temp: "45°F - 48°F (90% Humidity)",
    season: "November - May (Peak: Winter)",
    origin: "Central Valley, California",
    minOrder: "1 Pallet (40 Cartons)"
  },
  {
    id: "mangoes",
    name: "Kent & Tommy Mangoes",
    emoji: "🥭",
    category: "fruits",
    desc: "Large, fragrant tropical mangoes with excellent skin coloration and highly sweet, fiberless golden flesh. Sourced from certified export orchards under cold-chain compliance.",
    tags: ["imported", "seasonal"],
    packaging: "Single Layer Flats (8-Count to 12-Count)",
    temp: "54°F - 56°F (85% Humidity)",
    season: "March - September",
    origin: "Sinaloa, Mexico / Peru",
    minOrder: "150 Flats"
  },
  {
    id: "strawberries",
    name: "Vibrant Strawberries",
    emoji: "🍓",
    category: "fruits",
    desc: "Brilliant red, sweet, and firm strawberries with excellent conical shapes. Hand-harvested directly into clamshell packaging to ensure minimal touch points and zero bruising.",
    tags: ["local", "organic"],
    packaging: "8 x 1 lb Clamshell Carton (8 lbs total)",
    temp: "32°F - 34°F (90% Humidity)",
    season: "Year-Round (Peak: Apr - Aug)",
    origin: "Watsonville & Oxnard, California",
    minOrder: "108 Cartons (1 Pallet)"
  },
  {
    id: "grapes",
    name: "Red Seedless Grapes",
    emoji: "🍇",
    category: "fruits",
    desc: "Crunchy, sweet, and plump red grapes (Allison & Crimson varieties). Hand-picked bunches with sturdy green stems and visible natural bloom, reflecting freshness and health.",
    tags: ["local", "seasonal"],
    packaging: "19 lb Carton / Zipped Bags",
    temp: "30°F - 32°F (90% Humidity)",
    season: "July - December",
    origin: "San Joaquin Valley, California",
    minOrder: "80 Cartons"
  },
  {
    id: "watermelon",
    name: "Seedless Watermelon",
    emoji: "🍉",
    category: "seasonal",
    desc: "Large, crisp, and high-brix seedless watermelons. Exceptionally juicy with a bright red interior. Directly shipped in protective heavy-duty bulk bins.",
    tags: ["local", "seasonal"],
    packaging: "700 lb Octagonal Tri-Wall Cardboard Bin",
    temp: "50°F - 60°F (85% Humidity)",
    season: "May - September (Summer Peak)",
    origin: "Imperial Valley, California",
    minOrder: "1 Bin (Approx. 45-60 Melons)"
  },

  // Asian Produce & Herbs
  {
    id: "thai-basil",
    name: "Fragrant Thai Basil",
    emoji: "🌿",
    category: "asian",
    desc: "Highly aromatic anise-scented herbs with deep purple stems and narrow green leaves. Specially packaged in aerated bags to prevent blackening and leaf decay during logistics.",
    tags: ["local", "organic"],
    packaging: "10 lb Carton / Bunched Pack",
    temp: "45°F - 50°F (85% Humidity)",
    season: "Year-Round (Peak: Summer)",
    origin: "Riverside County, California",
    minOrder: "20 Cartons"
  },
  {
    id: "lemongrass",
    name: "Select Lemongrass",
    emoji: "🌱",
    category: "asian",
    desc: "Firm, thick stalks with a vibrant citrusy aroma. Trimmed, washed, and sorted for standard kitchen prep convenience. Sourced from local specialist Asian growers.",
    tags: ["local"],
    packaging: "30 lb Carton / Trimmed Stalks",
    temp: "40°F - 45°F (85% Humidity)",
    season: "Year-Round",
    origin: "Fresno County, California",
    minOrder: "15 Cartons"
  },
  {
    id: "chinese-chives",
    name: "Flat Garlic Chives",
    emoji: "🥬",
    category: "asian",
    desc: "Vibrant green garlic chives with soft, flat blades. Mild garlic flavor, popular in noodles and stir-fry mixes. Kept under strict temperature controls to avoid yellowing.",
    tags: ["local"],
    packaging: "20 lb Carton / Hand-Bunched",
    temp: "32°F - 34°F (95% Humidity)",
    season: "Year-Round",
    origin: "Fresno County, California",
    minOrder: "20 Cartons"
  },
  {
    id: "daikon",
    name: "Japanese Daikon Radish",
    emoji: "🥕",
    category: "asian",
    desc: "Thick, long, pure white Japanese radishes. Firm, crisp roots with a sweet, mild crunch. Carefully washed and packed in cushioned flats to protect the smooth white skins.",
    tags: ["local"],
    packaging: "40 lb Carton / Extra-Large Graded",
    temp: "32°F - 34°F (95% Humidity)",
    season: "Year-Round (Peak: Winter)",
    origin: "Central Valley, California",
    minOrder: "30 Cartons"
  },

  // Leafy Greens
  {
    id: "romaine",
    name: "Romaine Hearts",
    emoji: "🥬",
    category: "greens",
    desc: "Crisp, sweet, and pale green hearts of Romaine. Field-trimmed, double-washed, and packed in clean cellophane sleeves for extreme sanitation and immediate retail display.",
    tags: ["local", "organic"],
    packaging: "12 x 3-Count Bagged Carton (36 Hearts)",
    temp: "32°F - 34°F (95% Humidity)",
    season: "Year-Round (Peak: Apr - Nov)",
    origin: "Salinas Valley, California",
    minOrder: "50 Cartons"
  },
  {
    id: "spinach",
    name: "Baby Spinach",
    emoji: "🥬",
    category: "greens",
    desc: "Tender, dark green baby spinach leaves with zero stems. Tripled-washed in ozonated water and air-dried to guarantee clean, chemical-free food safety parameters.",
    tags: ["organic", "local"],
    packaging: "4 lb (4 x 1 lb) Loose Foodservice Bags",
    temp: "32°F (95% Humidity)",
    season: "Year-Round",
    origin: "Salinas Valley, California",
    minOrder: "40 Cartons"
  },
  {
    id: "cilantro",
    name: "Vibrant Cilantro",
    emoji: "🌿",
    category: "greens",
    desc: "Pungent, dense leafy bunches of deep green cilantro. Clean, sturdy roots with minimal yellow leaves. Packaged with protective clean wet-ice layers for delivery.",
    tags: ["local", "organic"],
    packaging: "30 lb Ice-Pack Carton / 60 Bunches",
    temp: "32°F (95% Humidity with Ice)",
    season: "Year-Round",
    origin: "Oxnard, California",
    minOrder: "50 Cartons"
  },

  // Seasonal
  {
    id: "mandarins",
    name: "Winter Gold Mandarins",
    emoji: "🍊",
    category: "seasonal",
    desc: "Sweet, seedless, and easy-peel mandarins (Satsuma & Clementine). Bright orange skins and juicy segments, packaged in attractive mesh bags for consumer appeal.",
    tags: ["local", "seasonal"],
    packaging: "15 x 2 lb Mesh Bags in Master Case (30 lbs)",
    temp: "40°F - 45°F (85% Humidity)",
    season: "November - April (Winter)",
    origin: "Tulare County, California",
    minOrder: "60 Cases"
  },
  {
    id: "cantaloupe",
    name: "Athena Cantaloupes",
    emoji: "🍈",
    category: "seasonal",
    desc: "Highly fragrant, sweet orange-flesh cantaloupes with heavy surface netting. Hand-selected at peak sugar content. Ideal for restaurant salad bars and supermarkets.",
    tags: ["local", "seasonal"],
    packaging: "9-Count / 12-Count Carton (Approx. 40 lbs)",
    temp: "36°F - 40°F (90% Humidity)",
    season: "May - October (Summer)",
    origin: "Imperial Valley, California",
    minOrder: "80 Cartons"
  }
];

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
