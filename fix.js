const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

// 1. catalog-grid gap and columns
css = css.replace(/grid-template-columns: repeat\(4, 1fr\);\s+gap: 1\.5rem;/g, 'grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;');

// 2. product-card radius and padding
css = css.replace(/border-radius: var\(--radius-lg\);\s+padding: 1\.75rem;/g, 'border-radius: var(--radius-sm);\n  padding: 1rem;');

// 3. product-visual-wrapper height
css = css.replace(/height: 120px;/g, 'height: 90px;');

// 4. catalog-controls margins
css = css.replace(/margin-top: -2rem;\s+margin-bottom: 3\.5rem;/g, 'margin-top: 0;\n  margin-bottom: 1rem;');

// 5. Mobile override 2516-2550
const mobileStart = '  /* Crop Cards on mobile */\n  .catalog-grid {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n\n  /* Mobile Horizontal Produce Card */\n  .product-card {\n    flex-direction: row !important;\n    align-items: center !important;\n    gap: 1.25rem !important;\n    padding: 1.1rem !important;\n  }\n  \n  .product-visual-wrapper {\n    width: 80px !important;\n    height: 80px !important;\n    font-size: 2.5rem !important;\n    margin-bottom: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  \n  .product-card-right {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 0.2rem;\n    height: auto !important;\n  }';

const mobileEnd = '  .catalog-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.75rem;\n  }';

css = css.replace(mobileStart, mobileEnd);

css += "\n\n/* Hide empty emoji icon containers */\n.db-card-icon,\n.graphic-box-emoji,\n.service-icon-box,\n.logistics-card-emoji,\n.why-card-icon {\n  display: none !important;\n}\n";

fs.writeFileSync('index.css', css);
