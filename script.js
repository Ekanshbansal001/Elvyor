/* ==========================================================================
   ELVYORA — script.js
   Static demo marketplace. No backend, no real payments, no automatic
   payment verification.
   ========================================================================== */

/* ---------------------- DATA ---------------------- */

const CATEGORIES = [
  { name: "Fashion", icon: "👗" },
  { name: "Jewellery", icon: "💍" },
  { name: "Electronics", icon: "🎧" },
  { name: "Beauty", icon: "🌸" },
  { name: "Home & Living", icon: "🏺" },
  { name: "Accessories", icon: "👜" },
  { name: "Handmade", icon: "✂️" },
  { name: "Food", icon: "🍫" },
  { name: "Services", icon: "🎨" },
  { name: "Other", icon: "🛍️" },
];

const PRODUCTS = [
  { id: 1, name: "Handloom Cotton Saree", price: 1899, category: "Fashion", desc: "Pure handwoven cotton saree with contrast zari border, breathable for daily wear.", seller: "Meera Textiles", city: "Jaipur", whatsapp: "919810012345", instagram: "meeratextiles", seed: "elvyora-p1", featured: true },
  { id: 2, name: "Oversized Denim Jacket", price: 1299, category: "Fashion", desc: "Vintage-wash oversized denim jacket, unisex fit, stitched patch detailing.", seller: "Urban Thread Co.", city: "Bengaluru", whatsapp: "919820023456", instagram: "urbanthreadco", seed: "elvyora-p2" },
  { id: 3, name: "Kundan Choker Set", price: 2450, category: "Jewellery", desc: "Handcrafted kundan choker with matching earrings, ideal for festive occasions.", seller: "Rajwada Jewels", city: "Jaipur", whatsapp: "919830034567", instagram: "rajwadajewels", seed: "elvyora-p3", featured: true },
  { id: 4, name: "Silver Oxidised Jhumkas", price: 649, category: "Jewellery", desc: "Lightweight oxidised silver jhumkas with a hand-etched floral pattern.", seller: "Silver Bazaar", city: "Hyderabad", whatsapp: "919840045678", instagram: "silverbazaar", seed: "elvyora-p4" },
  { id: 5, name: "Refurbished Bluetooth Speaker", price: 1199, category: "Electronics", desc: "Tested and certified refurbished speaker, 12-hour battery, deep bass.", seller: "GadgetHive", city: "Delhi", whatsapp: "919850056789", instagram: "gadgethive", seed: "elvyora-p5" },
  { id: 6, name: "Wireless Earbuds Pro", price: 1799, category: "Electronics", desc: "Active noise cancellation earbuds with touch controls and charging case.", seller: "SoundNest", city: "Pune", whatsapp: "919860067890", instagram: "soundnest", seed: "elvyora-p6", featured: true },
  { id: 7, name: "Organic Rose Face Serum", price: 549, category: "Beauty", desc: "Cold-pressed rose serum with vitamin E, small-batch and cruelty free.", seller: "Petal & Co.", city: "Bengaluru", whatsapp: "919870078901", instagram: "petalandco", seed: "elvyora-p7" },
  { id: 8, name: "Handmade Ayurvedic Soap Set", price: 399, category: "Beauty", desc: "Set of 4 cold-processed soaps with neem, turmeric, sandalwood and rose.", seller: "VanaCare", city: "Kochi", whatsapp: "919880089012", instagram: "vanacare", seed: "elvyora-p8" },
  { id: 9, name: "Macrame Wall Hanging", price: 899, category: "Home & Living", desc: "Hand-knotted cotton macrame, 24-inch, natural off-white finish.", seller: "Knot & Thread", city: "Goa", whatsapp: "919890090123", instagram: "knotandthread", seed: "elvyora-p9" },
  { id: 10, name: "Ceramic Table Lamp", price: 1599, category: "Home & Living", desc: "Hand-thrown ceramic base with a linen shade, warm ambient light.", seller: "Clay Studio", city: "Delhi", whatsapp: "919900001234", instagram: "claystudio", seed: "elvyora-p10", featured: true },
  { id: 11, name: "Hand-painted Terracotta Pots", price: 749, category: "Handmade", desc: "Set of 3 terracotta planters, hand-painted with traditional motifs.", seller: "Mitti Arts", city: "Hyderabad", whatsapp: "919910012345", instagram: "mittiarts", seed: "elvyora-p11" },
  { id: 12, name: "Crochet Tote Bag", price: 899, category: "Handmade", desc: "Sturdy hand-crocheted cotton tote, lined interior, everyday carry.", seller: "Yarn & Co.", city: "Mumbai", whatsapp: "919920023456", instagram: "yarnandco", seed: "elvyora-p12" },
  { id: 13, name: "Leather Sling Bag", price: 1499, category: "Accessories", desc: "Full-grain leather sling bag with adjustable strap and brass hardware.", seller: "CraftLeather", city: "Chennai", whatsapp: "919930034567", instagram: "craftleather", seed: "elvyora-p13" },
  { id: 14, name: "Beaded Anklets Set", price: 349, category: "Accessories", desc: "Set of 2 handmade beaded anklets with brass bells, boho style.", seller: "Boho Trail", city: "Jaipur", whatsapp: "919940045678", instagram: "bohotrail", seed: "elvyora-p14" },
  { id: 15, name: "Homemade Chocolate Truffles Box", price: 599, category: "Food", desc: "Box of 12 assorted truffles, made fresh to order, no preservatives.", seller: "Cocoa Tales", city: "Mumbai", whatsapp: "919950056789", instagram: "cocoatales", seed: "elvyora-p15" },
  { id: 16, name: "Custom Portrait Sketching", price: 999, category: "Services", desc: "Hand-drawn custom pencil portrait from your photo, A4 size, framed option.", seller: "Sketch & Ink", city: "Kolkata", whatsapp: "919960067890", instagram: "sketchandink", seed: "elvyora-p16" },
  { id: 17, name: "Minimalist Brass Wall Clock", price: 1199, category: "Home & Living", desc: "Solid brass wall clock with a matte black dial, silent sweep movement.", seller: "Forge & Form", city: "Delhi", whatsapp: "919970078901", instagram: "forgeandform", seed: "elvyora-p17" },
  { id: 18, name: "Hand-poured Soy Candles", price: 449, category: "Other", desc: "Set of 3 soy wax candles in sandalwood, citrus and lavender scents.", seller: "Wick & Willow", city: "Pune", whatsapp: "919980089012", instagram: "wickandwillow", seed: "elvyora-p18" },
  { id: 19, name: "Embroidered Linen Cushion Covers", price: 799, category: "Home & Living", desc: "Set of 2 hand-embroidered linen cushion covers, 16x16 inch.", seller: "Thread Story", city: "Ahmedabad", whatsapp: "919990090123", instagram: "threadstory", seed: "elvyora-p19" },
  { id: 20, name: "Pressed Flower Resin Coasters", price: 549, category: "Handmade", desc: "Set of 4 handmade resin coasters with real pressed flowers, cork base.", seller: "Bloom Cast", city: "Goa", whatsapp: "919000012345", instagram: "bloomcast", seed: "elvyora-p20", featured: true },
];

const state = { search: "", category: null, sort: "default" };

/* ---------------------- HELPERS ---------------------- */

const $ = (sel) => document.querySelector(sel);
const $all = (sel) => document.querySelectorAll(sel);
const imgUrl = (seed, variant = 0) => `https://picsum.photos/seed/${seed}-${variant}/600/600`;
const formatPrice = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

/* ---------------------- CATEGORIES ---------------------- */

function categoryCount(name) {
  return PRODUCTS.filter((p) => p.category === name).length;
}

function renderCategories() {
  const grid = $("#categoryGrid");
  const sorted = [...CATEGORIES].sort((a, b) => categoryCount(b.name) - categoryCount(a.name));
  grid.innerHTML = sorted
    .map(
      (c) => `
    <button class="category-card" data-category="${c.name}">
      <span class="category-icon">${c.icon}</span>
      <span class="category-name">${c.name}</span>
      <span class="category-count">${categoryCount(c.name)} listed</span>
    </button>`
    )
    .join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-card");
    if (!btn) return;
    const cat = btn.dataset.category;
    state.category = state.category === cat ? null : cat;
    render();
    $("#explore").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------------------- FEATURED / RECENT / SELLERS ---------------------- */

function railCardHtml(p) {
  return `
    <article class="rail-card" data-id="${p.id}">
      <div class="rail-img-wrap">
        <div class="rail-img" style="background-image:url('${imgUrl(p.seed)}')"></div>
        <span class="rail-badge">${p.category}</span>
      </div>
      <div class="rail-body">
        <h4>${p.name}</h4>
        <div class="rail-price">${formatPrice(p.price)}</div>
        <div class="rail-meta">📍 ${p.city} · ${p.seller}</div>
      </div>
    </article>`;
}

function renderFeatured() {
  const featured = PRODUCTS.filter((p) => p.featured);
  $("#featuredRail").innerHTML = featured.map(railCardHtml).join("");
}

function renderRecent() {
  const recent = [...PRODUCTS].sort((a, b) => b.id - a.id).slice(0, 6);
  $("#recentRail").innerHTML = recent.map(railCardHtml).join("");
}

function renderSellers() {
  const bySeller = {};
  PRODUCTS.forEach((p) => {
    if (!bySeller[p.seller]) bySeller[p.seller] = { seller: p.seller, city: p.city, seed: p.seed, count: 0 };
    bySeller[p.seller].count += 1;
  });
  const top = Object.values(bySeller)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  $("#sellerGrid").innerHTML = top
    .map(
      (s) => `
    <div class="seller-card">
      <div class="seller-avatar" style="background-image:url('${imgUrl(s.seed, 9)}')"></div>
      <div class="seller-name">${s.seller}</div>
      <div class="seller-city">📍 ${s.city}</div>
      <div class="seller-count">${s.count} listing${s.count === 1 ? "" : "s"}</div>
    </div>`
    )
    .join("");
}

function initRailClicks() {
  ["#featuredRail", "#recentRail"].forEach((sel) => {
    $(sel).addEventListener("click", (e) => {
      const card = e.target.closest("[data-id]");
      if (!card) return;
      openProductModal(card.dataset.id);
    });
  });
}

/* ---------------------- ALL PRODUCTS GRID ---------------------- */

function getFilteredProducts() {
  const q = state.search.trim().toLowerCase();
  let list = PRODUCTS.filter((p) => {
    const matchesCategory = !state.category || p.category === state.category;
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.seller.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (state.sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === "newest") list = [...list].sort((a, b) => b.id - a.id);

  return list;
}

function renderProducts() {
  const list = getFilteredProducts();
  const grid = $("#productGrid");
  const empty = $("#emptyState");
  const heading = $("#productsHeading");
  const count = $("#resultCount");
  const resetBtn = $("#resetFilters");

  heading.textContent = state.category ? state.category : "All Products";
  count.textContent =
    state.search || state.category
      ? `${list.length} product${list.length === 1 ? "" : "s"} found`
      : "";
  resetBtn.hidden = !(state.search || state.category || state.sort !== "default");

  $all(".category-card").forEach((c) => {
    c.classList.toggle("active", c.dataset.category === state.category);
  });

  if (list.length === 0) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" data-id="${p.id}" style="animation-delay:${Math.min(i, 8) * 0.04}s">
      <div class="product-img-wrap">
        <div class="product-img" style="background-image:url('${imgUrl(p.seed)}')"></div>
        <span class="product-cat-badge">${p.category}</span>
        ${p.featured ? '<span class="product-featured-badge">Featured</span>' : ""}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">${formatPrice(p.price)}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-meta">📍 ${p.city} · ${p.seller}</div>
        <button class="product-view-btn" data-id="${p.id}">View Product</button>
      </div>
    </article>`
    )
    .join("");
}

function render() {
  renderProducts();
}

/* ---------------------- MODAL ---------------------- */

function openProductModal(id) {
  const p = PRODUCTS.find((x) => x.id === Number(id));
  if (!p) return;

  const waMessage = encodeURIComponent(
    `Hi, I found ${p.name} on Elvyora and I'm interested. Please share more details.`
  );
  const waLink = `https://wa.me/${p.whatsapp}?text=${waMessage}`;
  const igLink = `https://instagram.com/${p.instagram}`;
  const variants = [0, 1, 2];

  $("#modalContent").innerHTML = `
    <div class="modal-gallery">
      <div class="modal-img" id="modalMainImg" style="background-image:url('${imgUrl(p.seed, 0)}')"></div>
      <div class="modal-thumbs">
        ${variants
          .map(
            (v, i) => `<button class="modal-thumb ${i === 0 ? "active" : ""}" data-variant="${v}" style="background-image:url('${imgUrl(p.seed, v)}')" aria-label="View photo ${i + 1}"></button>`
          )
          .join("")}
      </div>
    </div>
    <div class="modal-info">
      <span class="modal-cat">${p.category}</span>
      <h2 id="modalProductName">${p.name}</h2>
      <div class="modal-price">${formatPrice(p.price)}</div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-seller-row">
        <span>👤 ${p.seller}</span>
        <span>📍 ${p.city}</span>
      </div>
      <h3 class="modal-contact-label">Interested in this product?</h3>
      <p class="modal-contact-sub">Contact the seller directly.</p>
      <div class="modal-contact-btns">
        <a class="btn btn-whatsapp" href="${waLink}" target="_blank" rel="noopener">Chat on WhatsApp</a>
        <a class="btn btn-instagram" href="${igLink}" target="_blank" rel="noopener">View Instagram</a>
      </div>
    </div>
  `;

  $("#modalContent")
    .querySelectorAll(".modal-thumb")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        $("#modalMainImg").style.backgroundImage = `url('${imgUrl(p.seed, btn.dataset.variant)}')`;
        $all(".modal-thumb").forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
      });
    });

  $("#modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------------------- SEARCH + SORT ---------------------- */

function initSearch() {
  const input = $("#searchInput");
  const clearBtn = $("#searchClear");

  input.addEventListener("input", () => {
    state.search = input.value;
    clearBtn.hidden = !input.value;
    render();
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    state.search = "";
    clearBtn.hidden = true;
    render();
  });

  $("#navSearchToggle").addEventListener("click", () => {
    $("#explore").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => input.focus(), 400);
  });

  $("#sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  $("#resetFilters").addEventListener("click", () => {
    state.search = "";
    state.category = null;
    state.sort = "default";
    input.value = "";
    clearBtn.hidden = true;
    $("#sortSelect").value = "default";
    render();
  });
}

/* ---------------------- UPI PAYMENT (placeholder) ---------------------- */

function initUpi() {
  $("#copyUpiBtn").addEventListener("click", async () => {
    const id = $("#upiId").textContent.trim();
    const btn = $("#copyUpiBtn");
    try {
      await navigator.clipboard.writeText(id);
      btn.textContent = "Copied!";
    } catch {
      btn.textContent = "Copy failed";
    }
    setTimeout(() => (btn.textContent = "Copy"), 1600);
  });
}

/* ---------------------- LISTING FORM + LIVE PREVIEW ---------------------- */

function initListingForm() {
  const form = $("#listingForm");
  const fields = {
    productName: $('[name="productName"]'),
    productCategory: $('[name="productCategory"]'),
    productPrice: $('[name="productPrice"]'),
    description: $('[name="description"]'),
    sellerName: $('[name="sellerName"]'),
    city: $('[name="city"]'),
  };

  const preview = {
    name: $("#previewName"),
    category: $("#previewCategory"),
    price: $("#previewPrice"),
    desc: $("#previewDesc"),
    seller: $("#previewSeller"),
    city: $("#previewCity"),
    img: $("#previewImg"),
  };

  function updatePreview() {
    preview.name.textContent = fields.productName.value || "Your product name";
    preview.category.textContent = fields.productCategory.value || "Category";
    preview.price.textContent = fields.productPrice.value
      ? formatPrice(fields.productPrice.value)
      : "₹—";
    preview.desc.textContent =
      fields.description.value || "Your product description will appear here as you type.";
    preview.seller.textContent = fields.sellerName.value || "Seller name";
    preview.city.textContent = fields.city.value || "Location";
  }

  Object.values(fields).forEach((el) => el.addEventListener("input", updatePreview));

  const imageInput = $("#productImageInput");
  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    preview.img.style.backgroundImage = `url('${url}')`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const block = $("#confirmationBlock");
    block.hidden = false;
    block.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ---------------------- NAV ---------------------- */

function initNav() {
  const toggle = $("#menuToggle");
  const overlay = $("#mobileNavOverlay");
  toggle.addEventListener("click", () => overlay.classList.toggle("open"));
  overlay.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => overlay.classList.remove("open"))
  );
}

/* ---------------------- EVENT DELEGATION ---------------------- */

function initProductClicks() {
  $("#productGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (!card) return;
    openProductModal(card.dataset.id);
  });

  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ---------------------- INIT ---------------------- */

document.addEventListener("DOMContentLoaded", () => {
  $("#statProducts").textContent = `${PRODUCTS.length}+`;
  renderCategories();
  renderFeatured();
  renderRecent();
  renderSellers();
  renderProducts();
  initRailClicks();
  initSearch();
  initUpi();
  initListingForm();
  initNav();
  initProductClicks();
});
