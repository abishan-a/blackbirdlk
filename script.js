/* =====================================================
   VAVUNIYA STORE — script.js
   ===================================================== */

// ─── Product Data ────────────────────────────────────
const products = [
    {
        id: 1,
        name: "Men's Silver Lion Ring",
        category: "Fashion",
        price: 1000,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 1,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-12 at 10.55.13 AM.jpeg",
        details: {
            description: "A bold and premium men's ring crafted in the shape of a majestic lion — symbolising strength, courage, and royalty. Made from high-quality silver-finish alloy, this ring is designed for men who make a statement without saying a word.",
            material: "Silver-finish alloy (nickel-free)",
            style: "Lion Head Signet Ring",
            finish: "Polished silver",
            occasion: "Casual, Party, Gift",
            sizes: ["7", "8", "9", "10", "11"],
            highlights: [
                "🦁 Intricate lion face detailing",
                "💍 Comfortable wide band",
                "✨ High-polish silver finish",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery only",
                "🎁 Perfect as a gift"
            ]
        }
    },
    {
        id: 2,
        name: "P9 Pro Max Wireless Headphone",
        category: "Electronics",
        price: 2650,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-07 at 1.56.20 PM.jpeg",
        details: {
            description: "Premium quality P9 Pro Max wireless headphones offering seamless Bluetooth connection, TF card playback for mp3 song files, and convenient USB charging.",
            material: "High-quality polymer & cushioned ear pads",
            style: "Over-Ear Wireless Headphone",
            finish: "Premium Finish",
            occasion: "Music, Gaming, Travel, Casual",
            sizes: ["One Size"],
            highlights: [
                "🎧 Bluetooth connection",
                "🎵 Insert TF card to play mp3 files",
                "🔋 USB Charging",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery only",
                "🎁 Great for gifting"
            ]
        }
    },
    {
        id: 3,
        name: "Mini WiFi Camera",
        category: "Electronics",
        price: 2600,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-11 at 12.38.33 PM.jpeg",
        details: {
            description: "Compact and discreet Mini WiFi Camera featuring real-time wireless monitoring, motion detection, and easy setup to keep your home or office secure.",
            material: "Durable matte polymer",
            style: "Mini Wireless IP Camera",
            finish: "Sleek Matte Black",
            occasion: "Security, Surveillance, Home Monitoring",
            sizes: ["Standard"],
            highlights: [
                "📷 Mini compact design for discreet monitoring",
                "📶 WiFi connection for remote live viewing",
                "🌙 Night vision and motion detection alerts",
                "🔋 Rechargeable battery & continuous power support",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery only"
            ]
        }
    },
    {
        id: 4,
        name: "Universal Mobile Phone Cooler",
        category: "Electronics",
        price: 2000,
        original: null,
        badge: "hot",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-18 at 2.41.04 PM.jpeg",
        details: {
            description: "High-performance Universal Mobile Phone Cooler designed to prevent overheating during intense live gaming, streaming, or heavy tasks. Fits most smartphones with a universal clamp.",
            material: "ABS & high-efficiency fan unit",
            style: "Universal Gaming Cooler",
            finish: "Random Color (Various Colors)",
            occasion: "Gaming, Live Streaming, High Performance Mode",
            sizes: ["Standard"],
            highlights: [
                "❄️ Live Game Universal phone cooler",
                "📱 Universal clamp fits most smartphones",
                "🌈 Available in random aesthetic colors",
                "🚚 Rs 2,000 including delivery charge",
                "💵 Cash on Delivery available"
            ]
        }
    },
    {
        id: 5,
        name: "Premium Portable Bluetooth Speaker",
        category: "Electronics",
        price: 3700,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-08 at 5.21.42 PM.jpeg",
        details: {
            description: "Experience robust, high-fidelity sound on the go with this rugged portable Bluetooth speaker. Features dual bass radiators, a durable fabric grill, and a long-lasting rechargeable battery for non-stop entertainment.",
            material: "Rugged fabric mesh & durable rubberized housing",
            style: "Portable Wireless Speaker",
            finish: "Sleek Black",
            occasion: "Outdoor, Party, Travel, Home Entertainment",
            sizes: ["Standard"],
            highlights: [
                "🔊 High-fidelity stereo sound with deep bass",
                "📶 Wireless Bluetooth connection with long range",
                "🔋 Long-lasting rechargeable battery",
                "💧 Splashproof & rugged outdoor-friendly design",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },
    {
        id: 6,
        name: "Premium Anime & Gaming Wall Posters",
        category: "Decor",
        price: 4400,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-10 at 1.01.12 PM.jpeg",
        details: {
            description: "High-definition vivid color prints perfect for decorating bedrooms, gaming setups, or home workspaces. Select from standard sizes (A3, A2, A1). Custom designs are available—send us any JPG image!",
            material: "High-grade premium poster cardstock (Matte/Semi-Gloss)",
            style: "Modern Anime & Gaming Wall Art",
            finish: "Sleek Anti-Glare Coating",
            occasion: "Home Decor, Room Styling, Gifting",
            sizes: ["A3 (11.7 × 16.5 in)", "A2 (16.5 × 23.4 in)", "A1 (23.4 × 33.1 in)"],
            sizePrices: {
                "A3 (11.7 × 16.5 in)": 4400,
                "A2 (16.5 × 23.4 in)": 7600,
                "A1 (23.4 × 33.1 in)": 13000
            },
            highlights: [
                "🖼️ High-resolution vivid color printing",
                "📐 Size choices: A3, A2, and A1 dimensions",
                "🎨 Custom designs available (send any JPG image)",
                "📦 Safely packed and shipped in secure tubes",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 7,
        name: "Kids mini gun",
        category: "Electronics",
        price: 4000,
        original: 4800,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/gun.jpeg",
        details: {
            description: "only for kids ",
            material: "plastic",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 8,
        name: "Smart watch with TWS",
        category: "Electronics",
        price: 5000,
        original: 6600,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/s watch.png",
        details: {
            description: "TWS And Smart Watch",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 9,
        name: "3 Pcs Travel Backpack ",
        category: "Fashion",
        price: 2700,
        original: 3900,
        badge: "SALE",
        rating: 5.0,
        reviews: 0,
        freeDelivery: false,
        img: "product_img/2700 Bag.png",
        details: {
            description: "3 Pcs Travel Backpack  Price - Rs2700/= Delivery charge:- 400/=",
            material: "Standard",
            style: "Modern",
            finish: " ",
            occasion: "Travel",
            sizes: ["Standard"],
            highlights: [
                "🚚 Delivery charge:- 400/=",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 10,
        name: "High speed Mini USB WiFi Wireless Adapter ",
        category: "Electronics",
        price: 1200,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/wifi adapter.png",
        details: {
            description: "High speed Mini USB WiFi Wireless Adapter High speed Network Card 300Mbps 802.11 ngb for Windows 2000 / XP / Vista / WIN7 / 8 /10/11 /Linux / Mac OS PC Laptop USB WIFI antenna ",
            material: "Standard",
            style: " USB WiFi Wireless Adapter",
            finish: "black",
            occasion: "Home",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 11,
        name: "Ring Light ",
        category: "Electronics",
        price: 3600,
        original: null,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/ringlight.png",
        details: {
            description: "Price :- 3600",
            material: "black",
            style: "Speaker",
            finish: " ",
            occasion: "Outdoor",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 12,
        name: "1 8-In-1 USB C Hub",
        category: "Electronics",
        price: 2000,
        original: 2800,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: false,
        img: "product_img/1 8-In-1 USB C Hub.jpeg",
        details: {
            description: "1 8-In-1 USB C Hub with Audio Jack | Compatible with Tablets, USB Powered, 5V Operating Voltage",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: " ",
            sizes: ["Standard"],
            highlights: [
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 13,
        name: "NY Cap",
        category: "Fashion",
        price: 2600,
        original: null,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/NYCcap.png",
        details: {
            description: "",
            material: " ",
            style: "Modern",
            finish: "All Colors",
            occasion: "Travel",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 14,
        name: "Anime Gaming Desk Mat And Mouse Pad",
        category: "Home & Security",
        price: 3200,
        original: 3800,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/Desk mat.png",
        details: {
            description: "1 Large Japanese Samurai Anime Gaming Desk Mat And Mouse Pad - Non-Slip Rubber Base, Extra Wide Rectangular Computer Pad with Cherry Blossom, Mount Fuji And Red Sun/ Design, for PC, Home Office",
            material: " ",
            style: " ",
            finish: " ",
            occasion: " Home Office",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    }
    
];

// ─── State ────────────────────────────────────────────
let cart = [];
let currentFilter = 'All';
let currentSort = 'default';
let searchQuery = '';

// ─── DOM References ───────────────────────────────────
const productGrid     = document.getElementById('product-grid');
const cartIcon        = document.getElementById('cart-icon');
const cartOverlay     = document.getElementById('cart-overlay');
const closeCartBtn    = document.getElementById('close-cart');
const cartItemsEl     = document.getElementById('cart-items');
const cartCountEl     = document.getElementById('cart-count');
const cartTotalPriceEl = document.getElementById('cart-total-price');
const checkoutBtn     = document.getElementById('checkout-btn');
const checkoutModal   = document.getElementById('checkout-modal');
const cancelCheckout  = document.getElementById('cancel-checkout');
const checkoutForm    = document.getElementById('checkout-form');
const filterPillsEl   = document.getElementById('filter-pills');
const sortSelect      = document.getElementById('sort-select');
const searchInput     = document.getElementById('search-input');
const noResultsEl     = document.getElementById('no-results');
const toastEl         = document.getElementById('toast');

// Checkout Step elements
const step1El         = document.getElementById('step-1');
const step2El         = document.getElementById('step-2');
const step1Ind        = document.getElementById('step1-indicator');
const step2Ind        = document.getElementById('step2-indicator');
const btnNext         = document.getElementById('btn-next');
const btnBack         = document.getElementById('btn-back');
const btnConfirm      = document.getElementById('btn-confirm');
const reviewAddressEl = document.getElementById('review-address');
const reviewItemsEl   = document.getElementById('review-items');
const reviewTotalEl   = document.getElementById('review-total');

// ─── Init ─────────────────────────────────────────────
function init() {
    renderProducts();
    updateCart();

    // Sticky header shadow on scroll
    window.addEventListener('scroll', () => {
        document.getElementById('main-header').classList.toggle('scrolled', window.scrollY > 10);
    });

    // Cart open/close
    cartIcon.addEventListener('click', () => cartOverlay.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('active'));
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) cartOverlay.classList.remove('active');
    });

    // Filter pills (event delegation)
    filterPillsEl?.addEventListener('click', (e) => {
        if (!e.target.matches('.pill')) return;
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderProducts();
    });

    // Category cards
    document.querySelectorAll('.cat-card').forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.dataset.filter;
            document.querySelectorAll('.pill').forEach(p => {
                p.classList.toggle('active', p.dataset.filter === filter);
            });
            currentFilter = filter;
            renderProducts();
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sort
    sortSelect?.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Search
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim().toLowerCase();
            renderProducts();
        }, 250);
    });

    // CTA scroll
    document.querySelector('.cta-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Checkout open
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('🛒 Your cart is empty!');
            return;
        }
        cartOverlay.classList.remove('active');
        goToStep(1);
        checkoutModal?.classList.add('active');
    });

    // Close checkout modal
    cancelCheckout?.addEventListener('click', () => checkoutModal?.classList.remove('active'));
    checkoutModal?.addEventListener('click', (e) => {
        if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });

    // Step 1 → Step 2
    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateStep1()) return;
        buildReview();
        goToStep(2);
    });

    // Back to step 1
    btnBack?.addEventListener('click', () => goToStep(1));

    // Confirm Order
    btnConfirm?.addEventListener('click', () => placeOrder());

    // ── Product Detail Modal ──
    const pdModal = document.getElementById('product-detail-modal');
    document.getElementById('pd-close-btn')?.addEventListener('click', () => pdModal?.classList.remove('active'));
    pdModal?.addEventListener('click', (e) => {
        if (e.target === pdModal) pdModal.classList.remove('active');
    });

    document.getElementById('pd-add-cart-btn')?.addEventListener('click', function() {
        const id = parseInt(this.dataset.productId);
        const activeSizeBtn = document.querySelector('#pd-sizes-wrap .size-btn.selected');
        const selectedSize = activeSizeBtn ? activeSizeBtn.textContent : null;
        addToCart(id, null, selectedSize);
        pdModal?.classList.remove('active');
        cartOverlay?.classList.add('active');
    });

    // ── Hamburger / Mobile Nav ──
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        // Close on backdrop click
        mobileNav.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-nav-panel')) {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        // Close on nav link tap
        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Theme Switcher Interaction ──
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'rose';
            const nextTheme = currentTheme === 'rose' ? 'onyx' : 'rose';
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('bb-theme', nextTheme);
        });
    }
}

// ─── Render Products ──────────────────────────────────
function renderProducts() {
    let list = [...products];

    // Filter by category
    if (currentFilter !== 'All') {
        list = list.filter(p => p.category === currentFilter);
    }

    // Filter by search
    if (searchQuery) {
        list = list.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    // Sort
    if (currentSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);

    // Heading update (null-safe — doesn't exist on products page)
    const heading = document.getElementById('products-heading');
    if (heading) heading.textContent = currentFilter === 'All' ? 'Featured Products' : currentFilter;

    // Limit to 3 random products on index.html
    if (!document.querySelector('.products-page-main')) {
        list = list.sort(() => Math.random() - 0.5).slice(0, 3);
    }

    // Products count (products page)
    const countEl = document.getElementById('count-num');
    if (countEl) countEl.textContent = list.length;

    // Show/hide no results
    if (noResultsEl) noResultsEl.style.display = list.length === 0 ? 'block' : 'none';
    if (productGrid) productGrid.style.display = list.length === 0 ? 'none' : 'grid';

    if (!productGrid) return;
    productGrid.innerHTML = '';

    list.forEach((product, i) => {
        const card = document.createElement('div');
        card.className = 'product-card clickable-card';
        card.style.animationDelay = `${i * 0.04}s`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View details for ${product.name}`);

        const discountPct = product.original
            ? Math.round((1 - product.price / product.original) * 100)
            : null;

        const badgeHTML = product.badge
            ? `<div class="badge ${product.badge === 'new' ? 'new' : ''}">${product.badge === 'new' ? 'New' : `${discountPct}% Off`}</div>`
            : '';

        const originalHTML = product.original
            ? `<span class="product-price-original">Rs ${product.original.toLocaleString()}</span>`
            : '';

        const freeDeliveryTag = product.freeDelivery
            ? `<div class="free-delivery-tag">🚚 FREE Delivery</div>`
            : '';

        const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

        card.innerHTML = `
            ${badgeHTML}
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
                <div class="view-details-overlay">👁 View Details</div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                ${freeDeliveryTag}
                <div class="product-price-row">
                    <div class="product-price">Rs ${product.price.toLocaleString()}</div>
                    ${originalHTML}
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id}, this)">
                    + Add to Cart
                </button>
            </div>
        `;

        // Click card → open detail modal
        card.addEventListener('click', () => openProductDetail(product.id));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openProductDetail(product.id);
        });

        productGrid.appendChild(card);
    });
}

// ─── Product Detail Modal ─────────────────────────────
window.openProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const d = product.details || {};
    const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

    // Sizes HTML
    const isRing = product.category === 'Fashion' || product.name.toLowerCase().includes('ring');
    const sizeLabel = isRing ? 'Ring Size' : 'Select Size';
    const sizesHTML = d.sizes && d.sizes.length > 0
        ? `<div class="detail-sizes">
               <div class="detail-label">${sizeLabel}</div>
               <div class="size-options">${d.sizes.map((s, idx) => `<button class="size-btn ${idx === 0 ? 'selected' : ''}" onclick="event.stopPropagation(); selectSize(this, '${s}', ${product.id})">${s}</button>`).join('')}</div>
           </div>`
        : '';

    // Highlights HTML
    const highlightsHTML = d.highlights
        ? `<ul class="highlights-list">${d.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
        : '';

    // Specs rows
    const specsHTML = [
        d.material ? `<tr><td>Material</td><td>${d.material}</td></tr>` : '',
        d.style    ? `<tr><td>Style</td><td>${d.style}</td></tr>`       : '',
        d.finish   ? `<tr><td>Finish</td><td>${d.finish}</td></tr>`     : '',
        d.occasion ? `<tr><td>Occasion</td><td>${d.occasion}</td></tr>` : ''
    ].join('');

    const freeDeliveryBadge = product.freeDelivery
        ? `<span class="detail-free-delivery">🚚 FREE Delivery</span>`
        : '';

    const modal = document.getElementById('product-detail-modal');
    if (!modal) return;

    document.getElementById('pd-img').src           = product.img;
    document.getElementById('pd-img').alt           = product.name;
    document.getElementById('pd-category').textContent   = product.category;
    document.getElementById('pd-name').textContent       = product.name;
    document.getElementById('pd-stars').textContent      = stars;
    document.getElementById('pd-rating-count').textContent = `${product.rating} (${product.reviews} review${product.reviews === 1 ? '' : 's'})`;
    
    // Set initial price (first size's price if sizePrices exists, otherwise base price)
    const defaultSize = d.sizes && d.sizes.length > 0 ? d.sizes[0] : null;
    let initialPrice = product.price;
    if (defaultSize && d.sizePrices && d.sizePrices[defaultSize]) {
        initialPrice = d.sizePrices[defaultSize];
    }
    document.getElementById('pd-price').textContent      = `Rs ${initialPrice.toLocaleString()}`;
    
    document.getElementById('pd-free-delivery').innerHTML = freeDeliveryBadge;
    document.getElementById('pd-description').textContent = d.description || '';
    document.getElementById('pd-highlights').innerHTML    = highlightsHTML;
    document.getElementById('pd-sizes-wrap').innerHTML    = sizesHTML;
    document.getElementById('pd-specs-body').innerHTML    = specsHTML;
    document.getElementById('pd-specs-table').style.display = specsHTML ? '' : 'none';
    document.getElementById('pd-add-cart-btn').dataset.productId = product.id;

    modal.classList.add('active');
};

window.selectSize = function(btn, size, productId) {
    btn.closest('.size-options')
       .querySelectorAll('.size-btn')
       .forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Update modal price if sizePrices exists
    const product = products.find(p => p.id === productId);
    if (product && product.details && product.details.sizePrices && product.details.sizePrices[size]) {
        const newPrice = product.details.sizePrices[size];
        document.getElementById('pd-price').textContent = `Rs ${newPrice.toLocaleString()}`;
    }
};

// ─── Cart Logic ───────────────────────────────────────
window.addToCart = function(productId, btn, selectedSize = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Default to first size if not specified but sizes exist
    if (!selectedSize && product.details && product.details.sizes && product.details.sizes.length > 0) {
        selectedSize = product.details.sizes[0];
    }

    // Determine price based on selectedSize
    let price = product.price;
    if (selectedSize && product.details && product.details.sizePrices && product.details.sizePrices[selectedSize]) {
        price = product.details.sizePrices[selectedSize];
    }

    const existing = cart.find(i => i.id === productId && i.selectedSize === selectedSize);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ 
            ...product, 
            price: price, 
            selectedSize: selectedSize, 
            quantity: 1 
        });
    }

    updateCart();
    showToast(`✅ "${product.name}"${selectedSize ? ` (${selectedSize})` : ''} added to cart!`);

    // Button feedback
    if (btn) {
        btn.textContent = '✓ Added!';
        btn.classList.add('added');
        setTimeout(() => {
            btn.textContent = '+ Add to Cart';
            btn.classList.remove('added');
        }, 1800);
    }

    // Cart icon bounce
    cartCountEl.style.animation = 'none';
    requestAnimationFrame(() => { cartCountEl.style.animation = ''; });
};

window.updateQuantity = function(id, delta, size = '') {
    const targetSize = size === 'null' || size === '' ? null : size;
    const item = cart.find(i => i.id === id && i.selectedSize === targetSize);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => !(i.id === id && i.selectedSize === targetSize));
    updateCart();
};

window.removeItem = function(id, size = '') {
    const targetSize = size === 'null' || size === '' ? null : size;
    cart = cart.filter(i => !(i.id === id && i.selectedSize === targetSize));
    updateCart();
};

function updateCart() {
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="cart-empty">
                <span>🛒</span>
                <p>Your cart is empty</p>
                <small style="color:var(--text-muted);font-size:.82rem;">Add some items to get started</small>
            </div>`;
    } else {
        cartItemsEl.innerHTML = '';
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;

            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-title">
                        ${item.name}
                        ${item.selectedSize ? `<span class="cart-item-size-badge" style="font-size:0.75rem;color:var(--accent);display:block;margin-top:0.1rem;font-weight:600;">Size: ${item.selectedSize}</span>` : ''}
                    </div>
                    <div class="cart-item-unit">Rs ${item.price.toLocaleString()} each</div>
                    <div class="cart-item-price">Rs ${(item.price * item.quantity).toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1, '${item.selectedSize || ''}')">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1, '${item.selectedSize || ''}')">+</button>
                        <button class="remove-btn" onclick="removeItem(${item.id}, '${item.selectedSize || ''}')">Remove</button>
                    </div>
                </div>
            `;
            cartItemsEl.appendChild(el);
        });
    }

    cartCountEl.textContent = count;
    cartTotalPriceEl.textContent = `Rs ${total.toLocaleString()}`;
}

// ─── Checkout Steps ───────────────────────────────────
function goToStep(n) {
    step1El.style.display = n === 1 ? 'block' : 'none';
    step2El.style.display = n === 2 ? 'block' : 'none';

    step1Ind.classList.toggle('active', n === 1);
    step1Ind.classList.toggle('done', n > 1);
    step2Ind.classList.toggle('active', n === 2);
}

function validateStep1() {
    const name = document.getElementById('c-name').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const addr = document.getElementById('c-address').value.trim();
    const area = document.getElementById('c-area').value;

    if (!name || !phone || !addr || !area) {
        showToast('⚠️ Please fill all required fields');
        return false;
    }

    const phoneRegex = /^0\d{9}$/;
    const cleanPhone = phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showToast('⚠️ Enter a valid Sri Lankan phone number (e.g. 0771234567)');
        return false;
    }

    return true;
}

function buildReview() {
    const name = document.getElementById('c-name').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const addr = document.getElementById('c-address').value.trim();
    const area = document.getElementById('c-area').value;
    const note = document.getElementById('c-note').value.trim();

    reviewAddressEl.innerHTML = `
        <strong>${name}</strong> &nbsp;|&nbsp; ${phone}<br>
        ${addr}, ${area}<br>
        Vavuniya District, Northern Province<br>
        ${note ? `<em>Note: ${note}</em>` : ''}
    `;

    reviewItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const row = document.createElement('div');
        row.className = 'review-item';
        row.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <strong>Rs ${(item.price * item.quantity).toLocaleString()}</strong>
        `;
        reviewItemsEl.appendChild(row);
    });

    if (total > 6000) {
        reviewTotalEl.innerHTML = `Rs ${total.toLocaleString()} <br><span style="color:#d32f2f; font-size: 0.85em; font-weight: 500;">(Advance Payment Required)</span>`;
    } else {
        reviewTotalEl.textContent = `Rs ${total.toLocaleString()} (COD)`;
    }
}

function placeOrder() {
    // Animate button
    btnConfirm.textContent = '⏳ Placing Order…';
    btnConfirm.disabled = true;

    // Gather order data
    const orderData = {
        customer: {
            name: document.getElementById('c-name').value.trim(),
            phone: document.getElementById('c-phone').value.trim(),
            address: document.getElementById('c-address').value.trim(),
            area: document.getElementById('c-area').value,
            note: document.getElementById('c-note').value.trim()
        },
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            selectedSize: item.selectedSize || null,
            img: item.img || null
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        paymentMethod: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) > 6000 ? 'Advance' : 'COD',
        status: 'pending',
        createdAt: new Date().toISOString(),
        orderNumber: 'BB-' + Date.now().toString(36).toUpperCase()
    };

    // Save to Firebase Firestore
    const saveOrder = (typeof db !== 'undefined')
        ? db.collection('orders').add(orderData)
        : Promise.resolve();

    saveOrder
        .then(() => {
            cart = [];
            updateCart();
            checkoutModal.classList.remove('active');
            checkoutForm.reset();
            goToStep(1);
            btnConfirm.textContent = '✅ Confirm Order';
            btnConfirm.disabled = false;

            // Redirect to success page
            window.location.href = 'order-success.html?method=' + orderData.paymentMethod;
        })
        .catch((err) => {
            console.error('Error saving order:', err);
            btnConfirm.textContent = '✅ Confirm Order';
            btnConfirm.disabled = false;
            showToast('⚠️ Order failed. Please try again.');
        });
}

// ─── Toast ────────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// ─── Start ────────────────────────────────────────────
init();
