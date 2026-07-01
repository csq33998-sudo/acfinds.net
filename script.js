const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const spreadsheetGroupRoot = document.querySelector("[data-spreadsheet-groups]");

const spreadsheetProducts = [
  ["Sneakers", "Unisex 21 Colorway Sneakers", "A versatile sneaker row for buyers comparing shape, sizing, and QC before shipping.", "$43 - $44", "Check size", "2026-06-21", "assets/product-unisex-21-colorway-sneakers-86faf707.webp", "/products/unisex-21-colorway-sneakers"],
  ["Sneakers", "Retro Court Sneakers", "Court-style sneaker row for buyers comparing shape, color, and warehouse QC.", "$28 - $56", "QC ready", "2026-06-21", "assets/product-retro-court-sneakers-f41c1090.webp", "/products/retro-court-sneakers"],
  ["Sneakers", "Daily Mesh Runners", "Lightweight runner find for building an everyday shoe rotation.", "$22 - $49", "Check size", "2026-06-21", "assets/product-daily-mesh-runners-e14b777c.webp", "/products/daily-mesh-runners"],
  ["Sneakers", "Low Profile Skate Shoes", "Skate shoe row with shape and glue checks before parcel submission.", "$19 - $44", "QC ready", "2026-06-21", "assets/product-low-profile-skate-shoes-da4610b7.webp", "/products/low-profile-skate-shoes"],
  ["Sneakers", "Monogram Trainer Sneakers", "Trainer row for checking panels, sole paint, and insole length.", "$48 - $49", "Check size", "2026-06-21", "assets/product-monogram-trainer-sneakers-b068a86e.webp", "/products/monogram-trainer-sneakers"],
  ["Sneakers", "White Blue Runner Pair", "Runner pair where heel shape and glue lines need close-up QC.", "$35 - $58", "QC needed", "2026-06-21", "assets/product-white-blue-runner-pair-f4256c52.webp", "/products/white-blue-runner-pair"],
  ["Sneakers", "Black White Daily Sneakers", "Daily sneaker find for neutral outfits and low-risk rotation building.", "$31 - $52", "Active", "2026-06-21", "assets/product-black-white-daily-sneakers-47a47d61.webp", "/products/black-white-daily-sneakers"],
  ["Sneakers", "Green Accent Trainers", "Trainer row where color accuracy and insole length are the main checks.", "$38 - $59", "Recheck", "2026-06-21", "assets/product-green-accent-trainers-bc3fd627.webp", "/products/green-accent-trainers"],
  ["Sneakers", "Tabi Purple White Sneakers", "Extra sneaker row folded by default like the reference spreadsheet.", "$44 - $62", "QC needed", "2026-06-21", "assets/product-tabi-purple-white-sneakers-6491d309.webp", "/products/tabi-purple-white-sneakers"],
  ["Sneakers", "Canvas Low Sneakers", "Simple canvas low row for toe box, sidewall, and stitching checks.", "$18 - $37", "Active", "2026-06-21", "assets/product-canvas-low-sneakers-44a58c12.webp", "/products/canvas-low-sneakers"],

  ["Hoodies", "Hoodie with Yacht Graphic in Light Grey", "Relaxed streetwear shape where print placement and measurements need QC review.", "$22 - $23", "QC needed", "2026-06-21", "assets/product-hoodie-with-yacht-graphic-in-light-grey-b0402ddb.webp", "/products/hoodie-with-yacht-graphic-in-light-grey"],
  ["Hoodies", "Oversized Fleece Hoodie", "Heavy fleece row where shoulder drop, cuffs, and body length need review.", "$20 - $46", "New row", "2026-06-21", "assets/product-oversized-fleece-hoodie-5380202e.webp", "/products/oversized-fleece-hoodie"],
  ["Hoodies", "Heavy Zip Hoodie", "Zip hoodie row for fabric weight, zipper quality, and relaxed fit.", "$18 - $39", "Active", "2026-06-21", "assets/product-heavy-zip-hoodie-624fc328.webp", "/products/heavy-zip-hoodie"],
  ["Hoodies", "Knit Sweater Layer", "Sweater row for comparing knit texture and size before shipping.", "$21 - $48", "QC ready", "2026-06-21", "assets/product-knit-sweater-layer-b73fc799.webp", "/products/knit-sweater-layer"],
  ["Hoodies", "Washed Graphic Hoodie", "Worn-in finish buyers usually compare through warehouse photos.", "$16 - $35", "QC needed", "2026-06-21", "assets/product-washed-graphic-hoodie-fb07bc90.webp", "/products/washed-graphic-hoodie"],
  ["Hoodies", "Boxy Pullover Hoodie", "Boxy pullover row with sleeve length and chest width checks.", "$24 - $42", "Measure", "2026-06-21", "assets/product-boxy-pullover-hoodie-c9a7a42b.webp", "/products/boxy-pullover-hoodie"],
  ["Hoodies", "Ribbed Collar Sweatshirt", "Sweatshirt row where ribbing, collar, and print centering matter.", "$19 - $36", "Active", "2026-06-21", "assets/product-ribbed-collar-sweatshirt-0665e97b.webp", "/products/ribbed-collar-sweatshirt"],
  ["Hoodies", "Vintage Wash Crewneck", "Crewneck row for checking wash, cuffs, and fabric weight.", "$17 - $34", "Recheck", "2026-06-21", "assets/product-vintage-wash-crewneck-4b6c5506.webp", "/products/vintage-wash-crewneck"],
  ["Hoodies", "Graphic Full Zip Hoodie", "Folded hoodie row for zipper, print, and body length review.", "$25 - $52", "QC needed", "2026-06-21", "assets/product-graphic-full-zip-hoodie-f2748a18.webp", "/products/graphic-full-zip-hoodie"],

  ["Jackets", "Monogram Denim Jacket", "Outerwear find where stitching, sleeve length, panel seams, and weight matter.", "$54 - $55", "Recheck", "2026-06-21", "assets/home-category-jackets.webp", "/products/monogram-denim-jacket"],
  ["Jackets", "Technical Shell Jacket", "Shell jacket row for zippers, sleeve length, panel seams, and route weight.", "$26 - $64", "High QC", "2026-06-21", "assets/product-technical-shell-jacket-c34ec505.webp", "/products/technical-shell-jacket"],
  ["Jackets", "Padded Winter Jacket", "Outerwear row where weight and zipper quality matter.", "$34 - $82", "High QC", "2026-06-21", "assets/product-padded-winter-jacket-47205d08.webp", "/products/padded-winter-jacket"],
  ["Jackets", "Canvas Work Jacket", "Work jacket find with hardware and fit checks before shipping.", "$24 - $58", "New row", "2026-06-21", "assets/product-canvas-work-jacket-75e9b787.webp", "/products/canvas-work-jacket"],
  ["Jackets", "Light Nylon Overshirt", "Light layer row for shoulder width, buttons, and panel seams.", "$20 - $44", "Active", "2026-06-21", "assets/product-light-nylon-overshirt-56ac50df.webp", "/products/light-nylon-overshirt"],
  ["Jackets", "Short Sleeve Denim Jacket", "Denim jacket row for wash color, seams, and cropped fit.", "$42 - $68", "Recheck", "2026-06-21", "assets/product-short-sleeve-denim-jacket-52e1653e.webp", "/products/short-sleeve-denim-jacket"],
  ["Jackets", "Bomber Jacket Layer", "Bomber row for ribbing, zipper, pocket alignment, and weight.", "$29 - $61", "QC ready", "2026-06-21", "assets/product-bomber-jacket-layer-1e17953e.webp", "/products/bomber-jacket-layer"],
  ["Jackets", "Utility Field Jacket", "Field jacket row for hardware, pockets, and sleeve length.", "$32 - $73", "Measure", "2026-06-21", "assets/product-utility-field-jacket-b440c2a1.webp", "/products/utility-field-jacket"],
  ["Jackets", "Lightweight Utility Jacket", "Lightweight jacket row for pockets, sleeve length, hardware, and easy layering.", "$28 - $65", "QC needed", "2026-06-21", "assets/product-folded-extra-jacket-row-c1dc1d71.webp", "/products/lightweight-utility-jacket"],

  ["T-Shirts", "T-Shirt Sky Blue Cloud Print Casual Top", "Simple base layer for buyers checking collar shape, print alignment, and fabric.", "$6 - $7", "Recheck", "2026-06-21", "assets/product-t-shirt-sky-blue-cloud-print-casual-top-dcda4091.webp", "/products/t-shirt-sky-blue-cloud-print-casual-top"],
  ["T-Shirts", "Vintage Wash T-Shirt", "Washed tee row for checking collar shape, print scale, and fabric finish.", "$10 - $24", "Active", "2026-06-21", "assets/product-vintage-wash-t-shirt-2cf63bfb.webp", "/products/vintage-wash-t-shirt"],
  ["T-Shirts", "Graphic Box Tee", "Graphic tee row with print centering, neck label, hem, and fabric checks.", "$12 - $31", "QC ready", "2026-06-21", "assets/home-category-t-shirts.webp", "/products/graphic-box-tee"],
  ["T-Shirts", "Blank Heavyweight Tee", "Base-layer tee row for haul builders who need fit consistency.", "$9 - $22", "New row", "2026-06-21", "assets/product-blank-heavyweight-tee-f67af1e7.webp", "/products/blank-heavyweight-tee"],
  ["T-Shirts", "Boxy Street Tee", "Simple base layer for building a full outfit around one cart.", "$13 - $72", "Recheck", "2026-06-21", "assets/product-boxy-street-tee-82a3a4ca.webp", "/products/boxy-street-tee"],
  ["T-Shirts", "Collar Graphic Tee", "Tee row where collar shape and print scale need QC.", "$11 - $28", "Active", "2026-06-21", "assets/product-collar-graphic-tee-44ca2ec7.webp", "/products/collar-graphic-tee"],
  ["T-Shirts", "Oversized Layer Tee", "Oversized tee row for shoulder drop and length checks.", "$14 - $33", "Measure", "2026-06-21", "assets/product-oversized-layer-tee-2d05ae8c.webp", "/products/oversized-layer-tee"],
  ["T-Shirts", "Minimal Graphic Tee", "Graphic tee row for print centering and fabric weight.", "$8 - $20", "QC ready", "2026-06-21", "assets/home-category-t-shirts.webp", "/products/minimal-graphic-tee"],
  ["T-Shirts", "Washed Graphic Tee", "Washed tee row for checking print scale, collar shape, and fabric finish.", "$13 - $30", "Active", "2026-06-21", "assets/product-folded-graphic-tee-row-e35f97cc.webp", "/products/washed-graphic-tee"],

  ["Pants", "Patterned Velvet Pants Black", "Pants row where waist, inseam, pocket placement, and leg opening drive fit risk.", "$33 - $34", "Measure", "2026-06-21", "assets/home-category-pants.webp", "/products/patterned-velvet-pants-black"],
  ["Pants", "Wide Cargo Pants", "Cargo row focused on waist, thigh, inseam, pockets, and leg opening.", "$18 - $42", "Measure", "2026-06-21", "assets/product-wide-cargo-pants-50a0eae9.webp", "/products/wide-cargo-pants"],
  ["Pants", "Nylon Track Pants", "Lightweight pants row for inseam, elastic waist, detail placement, and cuffs.", "$15 - $36", "QC ready", "2026-06-21", "assets/product-nylon-track-pants-e730a160.webp", "/products/nylon-track-pants"],
  ["Pants", "Relaxed Denim Shorts", "Shorts row for wash, waist, and summer parcel weight.", "$14 - $35", "New row", "2026-06-21", "assets/product-relaxed-denim-shorts-f5f3c5b4.webp", "/products/relaxed-denim-shorts"],
  ["Pants", "Straight Cargo Pants", "Balanced cargo silhouette with waist, length, and fabric checks.", "$27 - $50", "Active", "2026-06-21", "assets/product-straight-cargo-pants-0b2ff74d.webp", "/products/straight-cargo-pants"],
  ["Pants", "Wide Denim Pants", "Denim row for wash color, rivets, waist, and leg opening.", "$22 - $49", "Recheck", "2026-06-21", "assets/product-wide-denim-pants-1ba020e0.webp", "/products/wide-denim-pants"],
  ["Pants", "Technical Utility Pants", "Utility pants row for pockets, drawcord, and route weight.", "$25 - $56", "QC needed", "2026-06-21", "assets/product-technical-utility-pants-51cf3432.webp", "/products/technical-utility-pants"],
  ["Pants", "Fleece Sweatpants", "Soft pants row for waist elastic, cuffs, and fabric weight.", "$16 - $38", "Active", "2026-06-21", "assets/product-sweatpants-add-on-row-30e0a80c.webp", "/products/fleece-sweatpants"],
  ["Pants", "Relaxed Pleated Pants", "Pleated pants row for waist, rise, drape, inseam, and leg opening checks.", "$18 - $44", "Measure", "2026-06-21", "assets/product-folded-pants-row-b4ecafb8.webp", "/products/relaxed-pleated-pants"],

  ["Bags", "Grid Check Shoulder Bag Navy", "Compact storage add-on where hardware, zipper, strap stitching, and lining matter.", "$9 - $10", "Easy add-on", "2026-06-21", "assets/home-category-bags.webp", "/products/grid-check-shoulder-bag-navy"],
  ["Bags", "Utility Shoulder Bag", "Shoulder bag row focused on hardware, lining, zipper, and usable size.", "$18 - $44", "Easy add-on", "2026-06-21", "assets/product-utility-shoulder-bag-0616d13a.webp", "/products/utility-shoulder-bag"],
  ["Bags", "Mini Sling Bag", "Compact sling bag find for lightweight accessory hauls.", "$12 - $32", "QC ready", "2026-06-21", "assets/product-mini-sling-bag-055e07b9.webp", "/products/mini-sling-bag"],
  ["Bags", "Utility Crossbody Bag", "Compact storage, clean hardware, and practical add-on for spreadsheet hauls.", "$24 - $35", "Easy add-on", "2026-06-21", "assets/product-utility-crossbody-bag-db2f6d29.webp", "/products/utility-crossbody-bag"],
  ["Bags", "Small Messenger Bag", "Messenger row for strap length, lining, and zipper checks.", "$16 - $39", "Active", "2026-06-21", "assets/product-small-messenger-bag-f1655b38.webp", "/products/small-messenger-bag"],
  ["Bags", "Travel Pouch Add-on", "Pouch row for dimensions, zipper, and material finish.", "$8 - $21", "New row", "2026-06-21", "assets/product-travel-pouch-add-on-373dfb8d.webp", "/products/travel-pouch-add-on"],
  ["Bags", "Compact Nylon Shoulder Bag", "Compact shoulder bag row for dimensions, strap stitching, lining, and zipper checks.", "$15 - $33", "Recheck", "2026-06-21", "assets/product-folded-bag-row-e891909a.webp", "/products/compact-nylon-shoulder-bag"],

  ["Accessories", "Patterned Leather Belt", "Accessory row where hardware, dimensions, stitching, and material need close photos.", "$12 - $13", "Recheck", "2026-06-21", "assets/home-category-accessories.webp", "/products/patterned-leather-belt"],
  ["Accessories", "Minimal Leather Belt", "Accessory row for belt sizing, buckle finish, holes, and edge paint checks.", "$7 - $24", "Active", "2026-06-21", "assets/product-minimal-leather-belt-beb6caf8.webp", "/products/minimal-leather-belt"],
  ["Accessories", "Pattern Socks Pack", "Pattern socks row for filling parcel weight efficiently.", "$4 - $16", "New row", "2026-06-21", "assets/home-category-accessories.webp", "/products/pattern-socks-pack"],
  ["Accessories", "Keychain Add-on Set", "Small accessory row for low-cost haul add-ons.", "$3 - $14", "QC ready", "2026-06-21", "assets/product-keychain-add-on-set-c901354a.webp", "/products/keychain-add-on-set"],
  ["Accessories", "Hardware Bracelet Row", "Bracelet row for hardware color, size, and packaging checks.", "$6 - $22", "Active", "2026-06-21", "assets/product-hardware-bracelet-row-67bbb72a.webp", "/products/hardware-bracelet-row"],
  ["Accessories", "Small Wallet Row", "Wallet row for stitching, dimensions, and inside label checks.", "$10 - $28", "Recheck", "2026-06-21", "assets/home-category-accessories.webp", "/products/small-wallet-row"],
  ["Accessories", "Travel Accessory Set", "Travel accessory row for hardware, dimensions, stitching, and packaging checks.", "$5 - $19", "QC needed", "2026-06-21", "assets/product-folded-accessory-row-distinct.webp", "/products/travel-accessory-set"],

  ["Headwear", "Ribbed Beanie Cap", "Headwear row for checking embroidery, crown shape, measurements, and finishing.", "$5 - $6", "QC needed", "2026-06-21", "assets/home-category-headwear.webp", "/products/ribbed-beanie-cap"],
  ["Headwear", "Low Profile Beanie", "Headwear add-on row for embroidery, knit texture, depth, and label checks.", "$6 - $18", "QC needed", "2026-06-21", "assets/product-low-profile-beanie-headwear.webp", "/products/low-profile-beanie"],
  ["Headwear", "Panel Trucker Cap", "Cap find with front-panel, brim, and strap QC notes.", "$8 - $21", "New row", "2026-06-21", "assets/product-panel-trucker-cap-headwear.webp", "/products/panel-trucker-cap"],
  ["Headwear", "Low Crown Street Cap", "Headwear lane for shape, stitching, and detail placement.", "$9 - $24", "Active", "2026-06-21", "assets/product-low-crown-street-cap-headwear.webp", "/products/low-crown-street-cap"]
].map(([category, name, description, price, status, lastChecked, image, href]) => ({
  category,
  name,
  description,
  price,
  status,
  lastChecked,
  image,
  href
})); 

const categoryPageMeta = {
  sneakers: {
    label: "Sneakers",
    title: "AllChinaBuy sneaker product rows",
    copy: "Compare sneaker rows with product images, price ranges, review status, and details before checking QC photos.",
    image: "/assets/home-category-sneakers.webp"
  },
  hoodies: {
    label: "Hoodies",
    title: "AllChinaBuy hoodie product rows",
    copy: "Compare hoodie and sweatshirt rows for fit, print placement, measurements, and warehouse QC risk.",
    image: "/assets/home-category-hoodies.webp"
  },
  jackets: {
    label: "Jackets",
    title: "AllChinaBuy jacket product rows",
    copy: "Compare jacket and outerwear rows for zippers, lining, weight, panel seams, and seasonal shipping risk.",
    image: "/assets/home-category-jackets.webp"
  },
  "t-shirts": {
    label: "T-Shirts",
    title: "AllChinaBuy T-shirt product rows",
    copy: "Compare tee rows for collar shape, print scale, fabric weight, fit notes, and QC photo checks.",
    image: "/assets/home-category-t-shirts.webp"
  },
  pants: {
    label: "Pants",
    title: "AllChinaBuy pants product rows",
    copy: "Compare pants rows for waist, inseam, rise, leg opening, fabric, and measurement photo needs.",
    image: "/assets/home-category-pants.webp"
  },
  bags: {
    label: "Bags",
    title: "AllChinaBuy bag product rows",
    copy: "Compare bag rows for hardware, zippers, strap stitching, lining, dimensions, and usable storage.",
    image: "/assets/home-category-bags.webp"
  },
  accessories: {
    label: "Accessories",
    title: "AllChinaBuy accessory product rows",
    copy: "Compare accessory rows for hardware color, dimensions, stitching, labels, and add-on value.",
    image: "/assets/home-category-accessories.webp"
  },
  headwear: {
    label: "Headwear",
    title: "AllChinaBuy headwear product rows",
    copy: "Compare cap and beanie rows for crown shape, embroidery, labels, knit texture, and fit notes.",
    image: "/assets/home-category-headwear.webp"
  }
};

const siteOrigin = "https://acfinds.net";

function getAbsoluteUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

function setHeadContent(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);
    const relMatch = selector.match(/\[rel="([^"]+)"\]/);
    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    if (relMatch) element.setAttribute("rel", relMatch[1]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function updateSeoMeta({ title, description, url, image, type = "website" }) {
  const absoluteUrl = getAbsoluteUrl(url);
  const absoluteImage = getAbsoluteUrl(image);

  document.title = title;
  setHeadContent('meta[name="description"]', "content", description);
  setHeadContent('link[rel="canonical"]', "href", absoluteUrl);
  setHeadContent('meta[property="og:title"]', "content", title);
  setHeadContent('meta[property="og:description"]', "content", description);
  setHeadContent('meta[property="og:type"]', "content", type);
  setHeadContent('meta[property="og:url"]', "content", absoluteUrl);
  setHeadContent('meta[property="og:image"]', "content", absoluteImage);
  setHeadContent('meta[name="twitter:card"]', "content", "summary_large_image");
  setHeadContent('meta[name="twitter:title"]', "content", title);
  setHeadContent('meta[name="twitter:description"]', "content", description);
  setHeadContent('meta[name="twitter:image"]', "content", absoluteImage);
}

function getCategorySlug(category) {
  return String(category || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getStreetStyleProductUrl(product) {
  return `https://streetstyle.maisonlooks.com/?q=${encodeURIComponent(product.name)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getInterleavedProducts(products) {
  const categoryBuckets = new Map();

  products.forEach((product) => {
    if (!categoryBuckets.has(product.category)) {
      categoryBuckets.set(product.category, []);
    }
    categoryBuckets.get(product.category).push(product);
  });

  const buckets = Array.from(categoryBuckets.values());
  const interleaved = [];
  let hasRemaining = true;

  while (hasRemaining) {
    hasRemaining = false;
    buckets.forEach((bucket) => {
      const product = bucket.shift();
      if (product) {
        interleaved.push(product);
        hasRemaining = true;
      }
    });
  }

  return interleaved;
}

function renderSpreadsheetGroups() {
  if (!spreadsheetGroupRoot) return;

  const visibleProducts = getInterleavedProducts(spreadsheetProducts);
  const rows = visibleProducts.map((product, index) => `
      <tr class="${index >= 8 ? "is-extra-row" : ""}">
        <td>
          <div class="product-cell">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
            <span><a href="${escapeHtml(product.href)}">${escapeHtml(product.name)}</a><small>${escapeHtml(product.description)}</small></span>
          </div>
        </td>
        <td><a class="category-pill category-link" href="/categories/${escapeHtml(getCategorySlug(product.category))}">${escapeHtml(product.category)}</a></td>
        <td>${escapeHtml(product.price)}</td>
        <td><span class="status-pill">${escapeHtml(product.status)}</span></td>
        <td>${escapeHtml(product.lastChecked)}</td>
        <td>
          <div class="product-action-group">
            <a class="details-button" href="${escapeHtml(product.href)}">Details</a>
            <a class="streetstyle-button" href="${escapeHtml(getStreetStyleProductUrl(product))}" rel="nofollow noopener" target="_blank">StreetStyle</a>
          </div>
        </td>
      </tr>
    `).join("");
  const hiddenCount = Math.max(0, visibleProducts.length - 8);

  spreadsheetGroupRoot.innerHTML = `
    <div class="table-wrap">
      <table class="find-table preview-table">
        <thead>
          <tr>
            <th>Find</th>
            <th>Category</th>
            <th>Price</th>
            <th>Review status</th>
            <th>Last checked</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    ${hiddenCount ? `<div class="table-controls"><p><span data-visible-count>8</span> rows visible, ${hiddenCount} folded.</p><button class="button secondary load-more-rows" type="button">Load more rows</button></div>` : ""}
  `;

  const button = spreadsheetGroupRoot.querySelector(".load-more-rows");
  const visibleCount = spreadsheetGroupRoot.querySelector("[data-visible-count]");
  const extraRows = Array.from(spreadsheetGroupRoot.querySelectorAll(".is-extra-row"));
  let revealed = 0;

  button?.addEventListener("click", () => {
    extraRows.slice(revealed, revealed + 8).forEach((row) => row.classList.add("is-visible"));
    revealed += 8;
    const visibleRows = spreadsheetGroupRoot.querySelectorAll("tbody tr:not(.is-extra-row), .is-extra-row.is-visible").length;
    if (visibleCount) visibleCount.textContent = String(visibleRows);

    if (revealed >= extraRows.length) {
      button.textContent = "All rows loaded";
      button.disabled = true;
    }
  });
}

renderSpreadsheetGroups();

function renderCategoryPage() {
  const categoryRoot = document.querySelector("[data-category-products]");
  if (!categoryRoot) return;

  const slug = getCategorySlug(window.location.pathname.split("/").filter(Boolean).pop());
  const meta = categoryPageMeta[slug];
  const products = spreadsheetProducts.filter((product) => getCategorySlug(product.category) === slug);

  if (!meta || products.length === 0) {
    categoryRoot.innerHTML = `<article class="compare-card"><h3>Category not found</h3><p>Return to the spreadsheet and choose another category.</p><a class="button secondary" href="/spreadsheet">Back to Spreadsheet</a></article>`;
    return;
  }

  const title = document.querySelector("[data-category-title]");
  const eyebrow = document.querySelector("[data-category-eyebrow]");
  const copy = document.querySelector("[data-category-copy]");
  const listTitle = document.querySelector("[data-category-list-title]");

  updateSeoMeta({
    title: `${meta.label} AllChinaBuy Products | Spreadsheet Product Rows`,
    description: meta.copy,
    url: `/categories/${slug}`,
    image: meta.image,
    type: "website"
  });
  if (title) title.textContent = meta.title;
  if (eyebrow) eyebrow.textContent = `${meta.label} category`;
  if (copy) copy.textContent = meta.copy;
  if (listTitle) listTitle.textContent = `${meta.label} products`;

  categoryRoot.innerHTML = products.map((product) => `
    <article class="category-product-card">
      <img src="/${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div>
        <a class="category-product-title" href="${escapeHtml(product.href)}">${escapeHtml(product.name)}</a>
        <p>${escapeHtml(product.description)}</p>
        <div class="category-product-meta">
          <span>${escapeHtml(product.price)}</span>
          <span>${escapeHtml(product.status)}</span>
          <span>${escapeHtml(product.lastChecked)}</span>
        </div>
        <div class="product-action-group">
          <a class="details-button" href="${escapeHtml(product.href)}">Details</a>
          <a class="streetstyle-button" href="${escapeHtml(getStreetStyleProductUrl(product))}" rel="nofollow noopener" target="_blank">StreetStyle</a>
        </div>
      </div>
    </article>
  `).join("");
}

renderCategoryPage();

const languageNames = {
  en: "English",
  es: "Espa\u00f1ol",
  fr: "Fran\u00e7ais",
  de: "Deutsch",
  pt: "Portugu\u00eas"
};

const translations = {
  es: {
    "Skip to content": "Saltar al contenido",
    "AllChinaBuy Spreadsheet": "Hoja de AllChinaBuy",
    "AllChinaBuy Finds": "Hallazgos AllChinaBuy",
    "Home": "Inicio",
    "Spreadsheet": "Hoja",
    "Categories": "Categor\u00edas",
    "Sneakers": "Zapatillas",
    "QC Guide": "Gu\u00eda QC",
    "Shipping": "Env\u00edo",
    "Size Guide": "Gu\u00eda de tallas",
    "Guides": "Gu\u00edas",
    "FAQ": "Preguntas",
    "English": "Ingl\u00e9s",
    "Paste Product Name / Link": "Pega el nombre o enlace del producto",
    "Search": "Buscar",
    "People also search": "La gente tambi\u00e9n busca",
    "Browse by Category": "Explorar por categor\u00eda",
    "Guide": "Gu\u00eda",
    "Common mistakes": "Errores comunes",
    "Trust": "Confianza",
    "Buying guide": "Gu\u00eda de compra",
    "Comparison": "Comparaci\u00f3n",
    "Updates": "Actualizaciones"
  },
  fr: {
    "Skip to content": "Aller au contenu",
    "AllChinaBuy Spreadsheet": "Tableur AllChinaBuy",
    "AllChinaBuy Finds": "Trouvailles AllChinaBuy",
    "Home": "Accueil",
    "Spreadsheet": "Tableur",
    "Categories": "Cat\u00e9gories",
    "QC Guide": "Guide QC",
    "Shipping": "Exp\u00e9dition",
    "Size Guide": "Guide des tailles",
    "Guides": "Guides",
    "FAQ": "FAQ",
    "English": "Anglais",
    "Paste Product Name / Link": "Collez le nom ou le lien du produit",
    "Search": "Rechercher",
    "People also search": "Recherches associ\u00e9es",
    "Browse by Category": "Parcourir par cat\u00e9gorie",
    "Guide": "Guide",
    "Common mistakes": "Erreurs courantes",
    "Trust": "Confiance",
    "Buying guide": "Guide d'achat",
    "Comparison": "Comparaison",
    "Updates": "Mises \u00e0 jour"
  },
  de: {
    "Skip to content": "Zum Inhalt springen",
    "AllChinaBuy Spreadsheet": "AllChinaBuy Tabelle",
    "AllChinaBuy Finds": "AllChinaBuy Funde",
    "Home": "Start",
    "Spreadsheet": "Tabelle",
    "Categories": "Kategorien",
    "Sneakers": "Sneaker",
    "QC Guide": "QC-Guide",
    "Shipping": "Versand",
    "Size Guide": "Gr\u00f6\u00dfenguide",
    "Guides": "Anleitungen",
    "FAQ": "FAQ",
    "English": "Englisch",
    "Paste Product Name / Link": "Produktname oder Link einf\u00fcgen",
    "Search": "Suchen",
    "People also search": "\u00c4hnliche Suchanfragen",
    "Browse by Category": "Nach Kategorie suchen",
    "Guide": "Anleitung",
    "Common mistakes": "H\u00e4ufige Fehler",
    "Trust": "Vertrauen",
    "Buying guide": "Kaufanleitung",
    "Comparison": "Vergleich",
    "Updates": "Updates"
  },
  pt: {
    "Skip to content": "Ir para o conte\u00fado",
    "AllChinaBuy Spreadsheet": "Planilha AllChinaBuy",
    "AllChinaBuy Finds": "Achados AllChinaBuy",
    "Home": "In\u00edcio",
    "Spreadsheet": "Planilha",
    "Categories": "Categorias",
    "Sneakers": "T\u00eanis",
    "QC Guide": "Guia QC",
    "Shipping": "Envio",
    "Size Guide": "Guia de tamanhos",
    "Guides": "Guias",
    "FAQ": "FAQ",
    "English": "Ingl\u00eas",
    "Paste Product Name / Link": "Cole o nome ou link do produto",
    "Search": "Buscar",
    "People also search": "As pessoas tamb\u00e9m pesquisam",
    "Browse by Category": "Navegar por categoria",
    "Guide": "Guia",
    "Common mistakes": "Erros comuns",
    "Trust": "Confian\u00e7a",
    "Buying guide": "Guia de compra",
    "Comparison": "Compara\u00e7\u00e3o",
    "Updates": "Atualiza\u00e7\u00f5es"
  }
};
const languageSelects = document.querySelectorAll('select[aria-label="Language"]');
const textNodeSources = new WeakMap();

function translateTextNode(node, lang) {
  if (!textNodeSources.has(node)) {
    textNodeSources.set(node, node.nodeValue.trim());
  }

  const source = textNodeSources.get(node);
  if (!source) return;

  const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
  const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
  const translated = lang === "en" ? source : translations[lang]?.[source] || source;
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateAttributes(lang) {
  document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
    ["placeholder", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      const key = `i18n${attribute.replace(/[^a-z0-9]/gi, "")}`;
      if (!element.dataset[key]) {
        element.dataset[key] = element.getAttribute(attribute);
      }

      const source = element.dataset[key];
      const translated = lang === "en" ? source : translations[lang]?.[source] || source;
      element.setAttribute(attribute, translated);
    });
  });
}

function applyLanguage(lang) {
  const activeLanguage = translations[lang] || lang === "en" ? lang : "en";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => translateTextNode(node, activeLanguage));
  translateAttributes(activeLanguage);

  languageSelects.forEach((select) => {
    select.value = activeLanguage;
    select.querySelectorAll("option").forEach((option) => {
      option.textContent = languageNames[option.value] || option.textContent;
    });
  });

  document.documentElement.lang = activeLanguage;

  try {
    localStorage.setItem("site-language", activeLanguage);
  } catch {}
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("site-language") || "en";
} catch {}

applyLanguage(savedLanguage);

languageSelects.forEach((select) => {
  select.addEventListener("change", () => applyLanguage(select.value));
});

