/* ==========================================================================
   Atelier Art Supply - E-Commerce Engine & Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSearchEngine();
  initBundleBuilder();
  initCartManager();
  initTestimonials();
  initNavScroll();
  initGalleryLightbox();
});

/* ==========================================================================
   Global Product Catalog (All Requested Art Mediums)
   ========================================================================== */
const PRODUCT_CATALOG = [
  // GRAPHITE
  {
    id: "g1",
    name: "Professional 12-Piece Drawing Graphite Set",
    category: "graphite",
    price: 28.00,
    rating: 5,
    tag: "Essential",
    image: "assets/graphite.png",
    desc: "A refined selection of graphite degrees from 9B to 2H, ideal for architectural layouts and tonal sketching."
  },
  {
    id: "g2",
    name: "Precision Mechanical Sketching Pencil",
    category: "graphite",
    price: 16.50,
    rating: 4,
    tag: "New",
    image: "assets/graphite.png",
    desc: "Refillable 2.0mm lead mechanical pencil featuring knurled grip and built-in lead pointer."
  },
  // CHARCOAL
  {
    id: "c1",
    name: "Natural Willow Charcoal Assorted Pack",
    category: "charcoal",
    price: 14.00,
    rating: 5,
    tag: "Bestseller",
    image: "assets/charcoal.png",
    desc: "Hand-selected carbonized willow sticks offering silky smooth, smudge-friendly blending."
  },
  {
    id: "c2",
    name: "Compressed Matte Charcoal Pencil Duo",
    category: "charcoal",
    price: 9.00,
    rating: 4,
    tag: "Classic",
    image: "assets/charcoal.png",
    desc: "Two ultra-dark compressed charcoal pencils in soft and medium grades for high-contrast shadows."
  },
  // WATERCOLOR
  {
    id: "w1",
    name: "Signature 12-Pan Ceramic Watercolor Set",
    category: "watercolor",
    price: 185.00,
    rating: 5,
    tag: "Artisan",
    image: "assets/watercolor_palette.png",
    desc: "Pure ground mineral pigments set in a custom handmade heavy white ceramic mixing plate."
  },
  {
    id: "w2",
    name: "Lapis Lazuli Extra-Fine Watercolor Tube",
    category: "watercolor",
    price: 22.00,
    rating: 5,
    tag: "Rare Drops",
    image: "assets/watercolor_palette.png",
    desc: "Single 15ml watercolor tube filled with pure ground Afghani Lapis Lazuli stone pigment."
  },
  // OIL
  {
    id: "o1",
    name: "Artisan Extra-Fine Oil Paint Tube Set (6 Colors)",
    category: "oil",
    price: 95.00,
    rating: 5,
    tag: "Premium Studio",
    image: "assets/oil_paint_set.svg",
    desc: "Highly-pigmented, buttery oil paints milled with cold-pressed linseed oil, no fillers."
  },
  {
    id: "o2",
    name: "Cold-Pressed Refined Linseed Oil (100ml)",
    category: "oil",
    price: 12.00,
    rating: 4,
    tag: "Solvent",
    image: "assets/linseed_oil_jar.svg",
    desc: "Improves paint flow, increases gloss, and slows dry time for fine oil glazing work."
  },
  // ACRYLIC
  {
    id: "a1",
    name: "Professional Heavy-Body Acrylic Set (8 Tubes)",
    category: "acrylic",
    price: 68.00,
    rating: 5,
    tag: "Vibrant",
    image: "assets/acrylic_paint_set.svg",
    desc: "Rich, thick acrylics that retain brush marks and palette knife textures. Dries to satin."
  },
  {
    id: "a2",
    name: "Precision Acrylic Paint Pen Set (12 Colors)",
    category: "acrylic",
    price: 34.00,
    rating: 4,
    tag: "Graphic",
    image: "assets/acrylic_markers.svg",
    desc: "Fine-point opaque acrylic paint markers, highly lightfast and permanent on wood, canvas, glass."
  },
  // EASEL
  {
    id: "e1",
    name: "Professional Beechwood H-Frame Studio Easel",
    category: "easel",
    price: 245.00,
    rating: 5,
    tag: "Solid Wood",
    image: "assets/easel.png",
    desc: "Heavy-duty studio easel crafted from oiled beechwood. Holds canvases up to 60 inches."
  },
  {
    id: "e2",
    name: "Classic Tabletop Beechwood Easel",
    category: "easel",
    price: 42.00,
    rating: 4,
    tag: "Compact",
    image: "assets/tabletop_easel.svg",
    desc: "Collapsible tabletop easel featuring adjustable canvas mast angle, perfect for study models."
  },
  // PAINT BRUSH
  {
    id: "b1",
    name: "Pure Kolinsky Sable Round Brush Set (3-Piece)",
    category: "paint brush",
    price: 120.00,
    rating: 5,
    tag: "Artisanal",
    image: "assets/sable_brushes.png",
    desc: "Sable round brushes (Sizes 2, 6, 10) featuring gold brass ferrules and walnut handles."
  },
  {
    id: "b2",
    name: "Premium Synthetic Flat Wash Brush 2-Inch",
    category: "paint brush",
    price: 24.00,
    rating: 4,
    tag: "Wash",
    image: "assets/flat_wash_brush.svg",
    desc: "Soft synthetic fibers designed to hold large water volumes for flawless flat watercolor background washes."
  },
  // PAPERS
  {
    id: "p1",
    name: "100% Cotton Cold-Pressed Paper Sheets (10-Pack)",
    category: "papers",
    price: 32.00,
    rating: 5,
    tag: "Acid-Free",
    image: "assets/cotton_paper_sheets.svg",
    desc: "Heavyweight 300gsm cold-pressed paper with deckled edges. Perfect for watercolors."
  },
  {
    id: "p2",
    name: "Medium-Textured Linen Painting Canvas Board",
    category: "papers",
    price: 18.00,
    rating: 4,
    tag: "Canvas Pack",
    image: "assets/canvas_board.svg",
    desc: "Sturdy MDF core board wrapped in triple-primed pure Belgian linen, ideal for oils."
  },
  // SKETCHBOOK
  {
    id: "s1",
    name: "Bespoke Leather-bound Cotton Sketchbook",
    category: "sketchbook",
    price: 65.00,
    rating: 5,
    tag: "Handcrafted",
    image: "assets/leather_sketchbook.png",
    desc: "Hand-stitched leather cover housing 180gsm archival cotton sheets for multi-medium sketches."
  },
  {
    id: "s2",
    name: "Heavyweight Toned Tan Wirebound Sketchbook",
    category: "sketchbook",
    price: 22.00,
    rating: 4,
    tag: "Sketch",
    image: "assets/wirebound_sketchbook.svg",
    desc: "Toned tan drawing paper wirebound book, excellent for white charcoal and graphite highlights."
  }
];

/* ==========================================================================
   Live Search Engine Logic
   ========================================================================== */
function initSearchEngine() {
  const searchInput = document.getElementById('catalogSearchInput');
  const suggestionsBox = document.getElementById('searchSuggestionsBox');

  if (!searchInput || !suggestionsBox) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      suggestionsBox.style.display = 'none';
      return;
    }

    const matches = PRODUCT_CATALOG.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query)
    ).slice(0, 5); // limit to 5 matches

    if (matches.length === 0) {
      suggestionsBox.innerHTML = '<div style="padding: 1.2rem; text-align: center; font-size: 0.8rem; color: var(--text-muted);">No matching art materials found.</div>';
    } else {
      suggestionsBox.innerHTML = matches.map(p => `
        <div class="suggestion-item" onclick="handleSearchClick('${p.id}')">
          <img src="${p.image}" alt="${p.name}">
          <div class="suggestion-item-details">
            <h5>${p.name}</h5>
            <p>${p.category}</p>
          </div>
          <div class="suggestion-item-price">$${p.price.toFixed(2)}</div>
        </div>
      `).join('');
    }
    suggestionsBox.style.display = 'block';
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = 'none';
    }
  });

  // Global scope listener callback
  window.handleSearchClick = function(productId) {
    const product = PRODUCT_CATALOG.find(p => p.id === productId);
    if (!product) return;
    suggestionsBox.style.display = 'none';
    searchInput.value = '';
    
    // Add to cart directly and slide it open to give instant commercial feedback
    window.addToCart(productId);
  };
}

/* ==========================================================================
   Interactive Studio Bundle Builder
   ========================================================================== */
function initBundleBuilder() {
  const options = document.querySelectorAll('.bundle-option-card');
  const addBundleBtn = document.getElementById('addBundleBtn');

  if (!options.length) return;

  // Selected State
  let selection = {
    medium: "w1", // Signature Watercolor Set
    brush: "b1",  // Sable Round Set
    surface: "s1" // Leatherbound Sketchbook
  };

  options.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type; // medium, brush, surface
      const id = card.dataset.id;     // product ID

      // Toggle select styling within step grid
      document.querySelectorAll(`.bundle-option-card[data-type="${type}"]`).forEach(c => {
        c.classList.remove('selected');
      });
      card.classList.add('selected');

      // Update state
      selection[type] = id;
      calculateBundlePrice();
    });
  });

  function calculateBundlePrice() {
    const listContainer = document.getElementById('bundleSelectedList');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    let subtotal = 0;

    // Load products
    const selectedProducts = [
      PRODUCT_CATALOG.find(p => p.id === selection.medium),
      PRODUCT_CATALOG.find(p => p.id === selection.brush),
      PRODUCT_CATALOG.find(p => p.id === selection.surface)
    ].filter(Boolean);

    selectedProducts.forEach(p => {
      subtotal += p.price;
      const li = document.createElement('li');
      li.innerHTML = `<span>${p.name}</span><span>$${p.price.toFixed(2)}</span>`;
      listContainer.appendChild(li);
    });

    const discountRate = 0.15; // 15% discount for bundle purchase
    const discountAmt = subtotal * discountRate;
    const finalPrice = subtotal - discountAmt;

    // Update Price display in panel
    const origPriceEl = document.getElementById('bundleOriginalVal');
    const finalPriceEl = document.getElementById('bundleFinalVal');
    
    if (origPriceEl) origPriceEl.textContent = `$${subtotal.toFixed(2)}`;
    if (finalPriceEl) finalPriceEl.textContent = `$${finalPrice.toFixed(2)}`;

    // Store prices on button dataset
    if (addBundleBtn) {
      addBundleBtn.dataset.original = subtotal;
      addBundleBtn.dataset.final = finalPrice;
    }
  }

  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      // Add all 3 items in bundle to cart
      window.addToCart(selection.medium);
      window.addToCart(selection.brush);
      window.addToCart(selection.surface);
      
      // Trigger a mini animation on the button to show success
      const originalText = addBundleBtn.textContent;
      addBundleBtn.textContent = "Bundle Added to Studio!";
      addBundleBtn.style.backgroundColor = "var(--color-green)";
      addBundleBtn.style.borderColor = "var(--color-green)";

      setTimeout(() => {
        addBundleBtn.textContent = originalText;
        addBundleBtn.style.backgroundColor = "";
        addBundleBtn.style.borderColor = "";
      }, 2000);
    });
  }

  // Calculate default price on startup
  calculateBundlePrice();
}

/* ==========================================================================
   Commercial Shopping Cart Manager
   ========================================================================== */
let cart = [];

function initCartManager() {
  const cartIconBtn = document.getElementById('openCartBtn');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartBadge = document.querySelector('.cart-badge');
  const cartItemsContainer = document.querySelector('.cart-items-container');
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');

  // Toggle Cart Slider drawer
  function toggleCart(open = true) {
    if (!cartSidebar || !cartOverlay) return;
    if (open) {
      cartSidebar.classList.add('open');
      cartOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      cartSidebar.classList.remove('open');
      cartOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (cartIconBtn) cartIconBtn.addEventListener('click', () => toggleCart(true));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => toggleCart(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

  // Global methods mapped to windows variables
  window.addToCart = function(productId) {
    const product = PRODUCT_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.product.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(true); // Always open drawer on item add
  };

  window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
  };

  window.adjustQuantity = function(productId, delta) {
    const item = cart.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      window.removeFromCart(productId);
    } else {
      updateCartUI();
    }
  };

  function updateCartUI() {
    // 1. Update Cart Badge Count
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
      cartBadge.textContent = totalQty;
      cartBadge.style.display = totalQty > 0 ? 'flex' : 'none';
    }

    // 2. Render Cart Drawer items
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="cart-empty-msg">Your canvas is blank. Add some art materials.</p>';
      if (cartSubtotalVal) cartSubtotalVal.textContent = '$0.00';
      return;
    }

    let subtotal = 0;
    cart.forEach(item => {
      const cost = item.product.price * item.quantity;
      subtotal += cost;

      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}">
        <div class="cart-item-details">
          <h4>${item.product.name}</h4>
          <p>$${item.product.price.toFixed(2)}</p>
          <div class="cart-item-qty-row">
            <button class="qty-btn" onclick="adjustQuantity('${item.product.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="adjustQuantity('${item.product.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.product.id}')" aria-label="Delete item">Remove</button>
      `;
      cartItemsContainer.appendChild(itemRow);
    });

    // 3. Update Estimated Subtotal price
    if (cartSubtotalVal) {
      cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;
    }
  }

  // Populate dynamic catalog grid
  initProductCatalogGrid();

  updateCartUI();
}

/* ==========================================================================
   Product Catalog Grid Injection & Filtering
   ========================================================================== */
function initProductCatalogGrid() {
  const grid = document.getElementById('productsCatalogGrid');
  const filters = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderGrid(selectedCategory) {
    grid.innerHTML = '';

    const filtered = selectedCategory === 'all'
      ? PRODUCT_CATALOG
      : PRODUCT_CATALOG.filter(p => p.category === selectedCategory);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = p.id;

      const ratingStars = Array(5).fill('<i class="far fa-star"></i>')
        .map((star, i) => i < p.rating ? '<i class="fas fa-star"></i>' : star)
        .join('');

      card.innerHTML = `
        <div class="product-img-frame">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        </div>
        <div class="product-desc-box">
          <span class="product-category-lbl">${p.category}</span>
          <h4>${p.name}</h4>
          <div class="product-rating-stars">${ratingStars}</div>
          <div class="product-footer-row">
            <span class="product-price-lbl">$${p.price.toFixed(2)}</span>
            <button class="btn-card-add" onclick="addToCart('${p.id}')">Add To Cart</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Set up Filter Click triggers
  if (filters.length) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid(btn.dataset.filter);
      });
    });
  }

  // Render initial grid (Default: show all trending)
  renderGrid('all');
}

/* ==========================================================================
   Artist Testimonials Slider Carousel
   ========================================================================== */
function initTestimonials() {
  const slides = document.querySelectorAll('.testi-slide');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  function displaySlide(index) {
    slides.forEach(s => s.classList.remove('active'));

    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides[currentIndex].classList.add('active');
  }

  function advanceSlide() {
    displaySlide(currentIndex + 1);
    resetTimer();
  }

  function regressSlide() {
    displaySlide(currentIndex - 1);
    resetTimer();
  }

  if (prevBtn) prevBtn.addEventListener('click', regressSlide);
  if (nextBtn) nextBtn.addEventListener('click', advanceSlide);

  function resetTimer() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(advanceSlide, 8000);
  }

  displaySlide(0);
  resetTimer();
}

/* ==========================================================================
   Gallery Lightbox Viewer
   ========================================================================== */
function initGalleryLightbox() {
  const galleryImages = Array.from(document.querySelectorAll('.gallery-grid .art-card img'));
  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('galleryModalImage');
  const viewport = modal?.querySelector('.gallery-modal__viewport');
  const closeButtons = modal?.querySelectorAll('[data-close]');
  const zoomInButton = modal?.querySelector('[data-action="zoom-in"]');
  const zoomOutButton = modal?.querySelector('[data-action="zoom-out"]');
  const resetButton = modal?.querySelector('[data-action="reset"]');
  const prevButton = modal?.querySelector('[data-action="prev"]');
  const nextButton = modal?.querySelector('[data-action="next"]');

  if (!modal || !modalImage || !viewport || galleryImages.length === 0) return;

  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let dragActive = false;
  let startX = 0;
  let startY = 0;
  let startPanX = 0;
  let startPanY = 0;
  let currentIndex = 0;

  const updateTransform = () => {
    modalImage.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    viewport.classList.toggle('is-zoomed', zoom > 1);
  };

  const openModal = (img, index = currentIndex) => {
    currentIndex = index;
    modalImage.src = img.currentSrc || img.src;
    modalImage.alt = img.alt || 'Artwork preview';
    zoom = 1;
    panX = 0;
    panY = 0;
    updateTransform();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    if (document.fullscreenElement !== modal) {
      modal.requestFullscreen?.().catch(() => {});
    }
  };

  const showImageByIndex = (index) => {
    const safeIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[safeIndex];
    if (img) {
      openModal(img, safeIndex);
    }
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (document.fullscreenElement === modal) {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const setZoom = (delta) => {
    zoom = Math.min(3, Math.max(1, zoom + delta));
    updateTransform();
  };

  galleryImages.forEach((img, index) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openModal(img, index));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(img, index);
      }
    });
    img.tabIndex = 0;
  });

  closeButtons?.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  zoomInButton?.addEventListener('click', () => setZoom(0.25));
  zoomOutButton?.addEventListener('click', () => setZoom(-0.25));
  resetButton?.addEventListener('click', () => {
    zoom = 1;
    panX = 0;
    panY = 0;
    updateTransform();
  });
  prevButton?.addEventListener('click', () => showImageByIndex(currentIndex - 1));
  nextButton?.addEventListener('click', () => showImageByIndex(currentIndex + 1));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  viewport.addEventListener('wheel', (event) => {
    event.preventDefault();
    setZoom(event.deltaY < 0 ? 0.2 : -0.2);
  }, { passive: false });

  viewport.addEventListener('pointerdown', (event) => {
    if (zoom <= 1) return;
    dragActive = true;
    startX = event.clientX;
    startY = event.clientY;
    startPanX = panX;
    startPanY = panY;
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('is-dragging');
  });

  viewport.addEventListener('pointermove', (event) => {
    if (!dragActive) return;
    panX = startPanX + (event.clientX - startX);
    panY = startPanY + (event.clientY - startY);
    updateTransform();
  });

  viewport.addEventListener('pointerup', () => {
    dragActive = false;
    viewport.classList.remove('is-dragging');
  });

  viewport.addEventListener('pointerleave', () => {
    if (dragActive) {
      dragActive = false;
      viewport.classList.remove('is-dragging');
    }
  });

  window.addEventListener('keydown', (event) => {
    if (modal.classList.contains('is-open') && event.key === 'Escape') {
      closeModal();
    }

    if (!modal.classList.contains('is-open')) return;

    if (event.key === '+') {
      event.preventDefault();
      setZoom(0.25);
    }

    if (event.key === '-' || event.key === '_') {
      event.preventDefault();
      setZoom(-0.25);
    }

    if (event.key === '0') {
      event.preventDefault();
      zoom = 1;
      panX = 0;
      panY = 0;
      updateTransform();
    }
  });
}

/* ==========================================================================
   Smooth Nav Link Scroll Offset Spy
   ========================================================================== */
function initNavScroll() {
  const links = document.querySelectorAll('.shop-nav-links a, .nav-links a');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (hash.startsWith('#') && hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          
          // Clear active link state and mark clicked one as active
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          const headerOffset = 140; // accounted for header + sticky subnav
          const elementPosition = target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
}
