// admin.js
// Logic for the BlackBird Admin Panel

// State Variables
let localProducts = [];
let isEditing = false;
let currentUploadedFile = null;

// DOM References
const loginSection = document.getElementById('admin-login-section');
const dashboardSection = document.getElementById('admin-dashboard-section');
const loginForm = document.getElementById('login-form');
const passcodeInput = document.getElementById('passcode-input');
const authedNavActions = document.getElementById('authed-nav-actions');
const btnLogout = document.getElementById('btn-logout');

// Form References
const productForm = document.getElementById('product-form');
const formTitle = document.getElementById('form-title');
const editProductId = document.getElementById('edit-product-id');
const pName = document.getElementById('p-name');
const pCategory = document.getElementById('p-category');
const pBadge = document.getElementById('p-badge');
const pPrice = document.getElementById('p-price');
const pOriginal = document.getElementById('p-original');
const pFreeDelivery = document.getElementById('p-free-delivery');
const pDescription = document.getElementById('p-description');
const pMaterial = document.getElementById('p-material');
const pStyle = document.getElementById('p-style');
const pFinish = document.getElementById('p-finish');
const pOccasion = document.getElementById('p-occasion');
const pSizes = document.getElementById('p-sizes');
const pHighlights = document.getElementById('p-highlights');
const pImageFile = document.getElementById('p-image-file');
const pImageUrl = document.getElementById('p-image-url');

// Image upload preview references
const imageDragArea = document.getElementById('image-drag-area');
const imgPreview = document.getElementById('img-preview');
const btnRemovePreview = document.getElementById('btn-remove-preview');
const btnCancelEdit = document.getElementById('btn-cancel-edit');

// Filters & Table References
const inventorySearch = document.getElementById('inventory-search');
const inventoryFilterCat = document.getElementById('inventory-filter-cat');
const inventoryContainer = document.getElementById('inventory-items-container');

// Stats Elements
const statTotalProducts = document.getElementById('stat-total-products');
const statTotalCategories = document.getElementById('stat-total-categories');
const statPromoCount = document.getElementById('stat-promo-count');

// Overlays & Toasts
const loadingOverlay = document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const toastEl = document.getElementById('toast');

// ─── Authentication Flow ───────────────────────────────────
function initAuth() {
    const isAuthed = sessionStorage.getItem('bb-admin-authed') === 'true';
    if (isAuthed) {
        showDashboard();
    } else {
        showLogin();
    }
}

function showLogin() {
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
    authedNavActions.style.display = 'none';
}

function showDashboard() {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    authedNavActions.style.display = 'flex';
    loadInventory();
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredCode = passcodeInput.value.trim();
    if (enteredCode === ADMIN_CONFIG.PASSCODE) {
        sessionStorage.setItem('bb-admin-authed', 'true');
        showToast('🔓 Console unlocked successfully!');
        showDashboard();
    } else {
        showToast('⚠️ Incorrect passcode. Please try again.');
        passcodeInput.value = '';
        passcodeInput.focus();
    }
});

btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('bb-admin-authed');
    showToast('🔒 Logged out successfully.');
    showLogin();
});

// ─── Toast System ──────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// ─── Loader Controls ───────────────────────────────────────
function showLoader(text) {
    loadingText.textContent = text || 'Processing...';
    loadingOverlay.classList.add('active');
}

function hideLoader() {
    loadingOverlay.classList.remove('active');
}

// ─── Loading Products from JSONBin ──────────────────────────
async function loadInventory() {
    showLoader('Fetching database from JSONBin.io...');
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.JSONBIN_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': ADMIN_CONFIG.JSONBIN_KEY
            }
        });
        if (!res.ok) throw new Error('Database fetch failed');
        const data = await res.json();
        
        localProducts = data.record || [];
        // Sort products by ID descending so newly added are visible at top
        localProducts.sort((a, b) => b.id - a.id);
        
        updateStats();
        renderInventory();
        showToast('📦 Catalog loaded.');
    } catch (err) {
        console.error('Error loading inventory:', err);
        showToast('⚠️ Error loading products database.');
    } finally {
        hideLoader();
    }
}

// ─── Update Stats Dashboard Cards ─────────────────────────
function updateStats() {
    statTotalProducts.textContent = localProducts.length;
    
    const categories = new Set(localProducts.map(p => p.category));
    statTotalCategories.textContent = categories.size;
    
    const promoCount = localProducts.filter(p => p.badge && p.badge !== '').length;
    statPromoCount.textContent = promoCount;
}

// ─── Render Inventory List ────────────────────────────────
function renderInventory() {
    const query = inventorySearch.value.trim().toLowerCase();
    const filterCat = inventoryFilterCat.value;
    
    const filtered = localProducts.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
        const matchesCat = filterCat === 'All' || p.category === filterCat;
        return matchesQuery && matchesCat;
    });

    if (filtered.length === 0) {
        inventoryContainer.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text-muted); font-weight:600;">No products found.</div>';
        return;
    }

    inventoryContainer.innerHTML = filtered.map(p => `
        <div class="inventory-item">
            <div class="item-meta">
                <img src="${p.img || 'product_img/fav.png'}" alt="${p.name}" class="item-img-preview" onerror="this.src='product_img/fav.png'">
                <div class="item-info">
                    <h4>${p.name}</h4>
                    <span>${p.category}</span>
                    <span class="item-price">Rs. ${p.price.toLocaleString()}</span>
                    ${p.badge ? `<span style="background:var(--accent-light); color:var(--accent); font-size:0.7em;">${p.badge.toUpperCase()}</span>` : ''}
                </div>
            </div>
            <div class="item-actions">
                <button class="btn-icon edit-btn" onclick="editProduct(${p.id})" title="Edit Product">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path></svg>
                </button>
                <button class="btn-icon delete-btn" onclick="deleteProduct(${p.id})" title="Delete Product">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        </div>
    `).join('');
}

// ─── Search & Filters Events ──────────────────────────────
inventorySearch.addEventListener('input', renderInventory);
inventoryFilterCat.addEventListener('change', renderInventory);

// ─── Image Drag and Drop Handlers ─────────────────────────
imageDragArea.addEventListener('click', () => pImageFile.click());

pImageFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        setPreview(file);
    }
});

function setPreview(fileOrUrl) {
    if (fileOrUrl instanceof File) {
        currentUploadedFile = fileOrUrl;
        const reader = new FileReader();
        reader.onload = (e) => {
            imgPreview.src = e.target.result;
            imageDragArea.classList.add('has-image');
        };
        reader.readAsDataURL(fileOrUrl);
    } else if (typeof fileOrUrl === 'string' && fileOrUrl) {
        currentUploadedFile = null;
        imgPreview.src = fileOrUrl;
        imageDragArea.classList.add('has-image');
        pImageUrl.value = fileOrUrl;
    }
}

btnRemovePreview.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid triggering file selection click
    imgPreview.src = '';
    imageDragArea.classList.remove('has-image');
    pImageFile.value = '';
    pImageUrl.value = '';
    currentUploadedFile = null;
});

// Drag events
['dragenter', 'dragover'].forEach(eventName => {
    imageDragArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDragArea.style.borderColor = 'var(--accent)';
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    imageDragArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDragArea.style.borderColor = 'var(--border)';
    }, false);
});

imageDragArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files[0];
    if (file && file.type.startsWith('image/')) {
        setPreview(file);
    }
});

// ─── Cloudinary Signed Signature Generation ───────────────
async function generateSHA1(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function uploadImageToCloudinary(file) {
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = 'products';
    
    // Sort parameters alphabetically: folder, then timestamp
    const signatureStr = `folder=${folder}&timestamp=${timestamp}${ADMIN_CONFIG.CLOUDINARY_API_SECRET}`;
    const signature = await generateSHA1(signatureStr);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', CONFIG.CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp);
    formData.append('folder', folder);
    formData.append('signature', signature);
    
    const url = `https://api.cloudinary.com/v1_1/${CONFIG.CLOUDINARY_CLOUD_NAME}/image/upload`;
    
    const res = await fetch(url, {
        method: 'POST',
        body: formData
    });
    
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.message || 'Cloudinary upload failed');
    }
    
    const result = await res.json();
    return result.secure_url;
}

// ─── Submit Form: Add or Edit Product ──────────────────────
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validations
    if (!currentUploadedFile && !pImageUrl.value) {
        showToast('⚠️ Please upload or select a product image.');
        return;
    }
    
    let finalImageUrl = pImageUrl.value;
    
    showLoader('Uploading product image to Cloudinary...');
    try {
        // 1. Upload to Cloudinary if new file selected
        if (currentUploadedFile) {
            finalImageUrl = await uploadImageToCloudinary(currentUploadedFile);
            console.log('Image uploaded to Cloudinary:', finalImageUrl);
        }
        
        // 2. Prepare payload
        showLoader('Updating database on JSONBin.io...');
        const idVal = editProductId.value;
        const priceVal = Number(pPrice.value);
        const originalVal = pOriginal.value ? Number(pOriginal.value) : null;
        
        const detailsObj = {
            description: pDescription.value.trim(),
            material: pMaterial.value.trim() || 'Standard',
            style: pStyle.value.trim() || 'Modern',
            finish: pFinish.value.trim() || 'Matte Finish',
            occasion: pOccasion.value.trim() || 'Casual',
            sizes: pSizes.value.split(',').map(s => s.trim()).filter(s => s),
            highlights: pHighlights.value.split('\n').map(h => h.trim()).filter(h => h)
        };
        
        const newProduct = {
            name: pName.value.trim(),
            category: pCategory.value,
            price: priceVal,
            original: originalVal,
            badge: pBadge.value || null,
            rating: 5.0,
            reviews: 0,
            freeDelivery: pFreeDelivery.checked,
            img: finalImageUrl,
            details: detailsObj
        };
        
        if (isEditing && idVal) {
            // Edit Mode
            newProduct.id = Number(idVal);
            const index = localProducts.findIndex(p => p.id === newProduct.id);
            if (index !== -1) {
                // Preserving rating & reviews count
                newProduct.rating = localProducts[index].rating || 5.0;
                newProduct.reviews = localProducts[index].reviews || 0;
                localProducts[index] = newProduct;
                showToast('📝 Product updated successfully!');
            }
        } else {
            // Add Mode: find max ID and increment
            const maxId = localProducts.reduce((max, p) => p.id > max ? p.id : max, 0);
            newProduct.id = maxId + 1;
            localProducts.push(newProduct);
            showToast('✅ Product added successfully!');
        }
        
        // 3. Save to JSONBin
        await saveToJSONBin();
        resetForm();
        renderInventory();
        updateStats();
        
    } catch (err) {
        console.error('Submit Error:', err);
        showToast('⚠️ Error saving product: ' + err.message);
    } finally {
        hideLoader();
    }
});

// ─── Save Inventory Array to JSONBin.io ───────────────────
async function saveToJSONBin() {
    // Sort ascending before saving to database (preserves sequential IDs)
    const sortedToSave = [...localProducts].sort((a, b) => a.id - b.id);
    
    const res = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.JSONBIN_BIN_ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': ADMIN_CONFIG.JSONBIN_KEY
        },
        body: JSON.stringify(sortedToSave)
    });
    
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'JSONBin save failed');
    }
}

// ─── Reset Editor Form ─────────────────────────────────────
function resetForm() {
    productForm.reset();
    editProductId.value = '';
    formTitle.textContent = 'Add New Product';
    imgPreview.src = '';
    imageDragArea.classList.remove('has-image');
    pImageFile.value = '';
    pImageUrl.value = '';
    currentUploadedFile = null;
    
    isEditing = false;
    btnCancelEdit.style.display = 'none';
    document.getElementById('btn-submit-product').textContent = 'Save Product';
}

btnCancelEdit.addEventListener('click', resetForm);

// ─── Edit Action Trigger ──────────────────────────────────
window.editProduct = function(id) {
    const product = localProducts.find(p => p.id === id);
    if (!product) return;
    
    isEditing = true;
    editProductId.value = product.id;
    formTitle.textContent = `Edit Product: ${product.name}`;
    
    pName.value = product.name;
    pCategory.value = product.category;
    pBadge.value = product.badge || '';
    pPrice.value = product.price;
    pOriginal.value = product.original || '';
    pFreeDelivery.checked = product.freeDelivery;
    
    setPreview(product.img);
    
    const details = product.details || {};
    pDescription.value = details.description || '';
    pMaterial.value = details.material || '';
    pStyle.value = details.style || '';
    pFinish.value = details.finish || '';
    pOccasion.value = details.occasion || '';
    
    pSizes.value = (details.sizes || []).join(', ') || 'Standard';
    pHighlights.value = (details.highlights || []).join('\n') || '';
    
    btnCancelEdit.style.display = 'block';
    document.getElementById('btn-submit-product').textContent = 'Update Product';
    
    // Scroll form into view smoothly
    document.getElementById('form-title').scrollIntoView({ behavior: 'smooth' });
};

// ─── Delete Action Trigger ────────────────────────────────
window.deleteProduct = async function(id) {
    const product = localProducts.find(p => p.id === id);
    if (!product) return;
    
    const confirmed = confirm(`Are you sure you want to permanently delete "${product.name}"?`);
    if (!confirmed) return;
    
    showLoader('Deleting product from JSONBin...');
    try {
        localProducts = localProducts.filter(p => p.id !== id);
        await saveToJSONBin();
        
        renderInventory();
        updateStats();
        showToast('🗑️ Product deleted successfully.');
        
        if (isEditing && editProductId.value == id) {
            resetForm();
        }
    } catch (err) {
        console.error('Delete Error:', err);
        showToast('⚠️ Delete failed: ' + err.message);
    } finally {
        hideLoader();
    }
};

// ─── Start Authentication check ────────────────────────────
initAuth();
