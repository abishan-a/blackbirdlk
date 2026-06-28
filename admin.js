/* =====================================================
   BLACK BIRD — Admin Dashboard (admin.js)
   ===================================================== */

// ─── State ────────────────────────────────────────────
let allOrders = [];
let filteredOrders = [];
let currentStatusFilter = 'all';
let currentSearch = '';

// ─── DOM References ───────────────────────────────────
const ordersContainer = document.getElementById('orders-container');
const loadingState    = document.getElementById('loading-state');
const searchInput     = document.getElementById('admin-search');
const statusFilter    = document.getElementById('status-filter');
const refreshBtn      = document.getElementById('refresh-btn');
const toastEl         = document.getElementById('admin-toast');

// Stats
const statTotal     = document.getElementById('stat-total');
const statPending   = document.getElementById('stat-pending');
const statDelivered = document.getElementById('stat-delivered');
const statRevenue   = document.getElementById('stat-revenue');

// ─── Initialize ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadOrders();

    // Search
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value.trim().toLowerCase();
            applyFilters();
        }, 250);
    });

    // Status Filter
    statusFilter.addEventListener('change', (e) => {
        currentStatusFilter = e.target.value;
        applyFilters();
    });
});

// ─── Load Orders from Firestore ───────────────────────
function loadOrders() {
    ordersContainer.innerHTML = `
        <div class="loading-wrap">
            <div class="loading-spinner"></div>
            <p>Loading orders from Firebase…</p>
        </div>
    `;

    // Animate refresh button
    refreshBtn.classList.add('spinning');
    setTimeout(() => refreshBtn.classList.remove('spinning'), 600);

    db.collection('orders')
        .orderBy('createdAt', 'desc')
        .get()
        .then((snapshot) => {
            allOrders = [];
            snapshot.forEach((doc) => {
                allOrders.push({ id: doc.id, ...doc.data() });
            });
            updateStats();
            applyFilters();
        })
        .catch((err) => {
            console.error('Error loading orders:', err);
            ordersContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    <h3>Connection Error</h3>
                    <p>Could not connect to Firebase. Check your internet connection and Firestore rules, then try again.</p>
                </div>
            `;
        });
}

// ─── Update Stats ─────────────────────────────────────
function updateStats() {
    const total = allOrders.length;
    const pending = allOrders.filter(o => o.status === 'pending').length;
    const delivered = allOrders.filter(o => o.status === 'delivered').length;
    const revenue = allOrders
        .filter(o => o.status === 'delivered')
        .reduce((sum, o) => sum + (o.total || 0), 0);

    animateCounter(statTotal, total);
    animateCounter(statPending, pending);
    animateCounter(statDelivered, delivered);
    statRevenue.textContent = `Rs ${revenue.toLocaleString()}`;
}

function animateCounter(el, target) {
    const duration = 600;
    const start = parseInt(el.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;

    function step() {
        current += increment;
        if ((increment > 0 && current >= target) || (increment < 0 && current <= target) || increment === 0) {
            el.textContent = target;
            return;
        }
        el.textContent = Math.round(current);
        requestAnimationFrame(step);
    }
    step();
}

// ─── Apply Filters ────────────────────────────────────
function applyFilters() {
    filteredOrders = allOrders.filter(order => {
        // Status filter
        if (currentStatusFilter !== 'all' && order.status !== currentStatusFilter) {
            return false;
        }

        // Search filter
        if (currentSearch) {
            const searchTarget = [
                order.orderNumber || '',
                order.customer?.name || '',
                order.customer?.phone || '',
                order.customer?.address || '',
                order.customer?.area || '',
                ...(order.items || []).map(i => i.name || '')
            ].join(' ').toLowerCase();

            return searchTarget.includes(currentSearch);
        }

        return true;
    });

    renderOrders();
}

// ─── Render Orders Table ──────────────────────────────
function renderOrders() {
    if (filteredOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <h3>No Orders Found</h3>
                <p>${currentSearch || currentStatusFilter !== 'all'
                    ? 'Try adjusting your search or filter.'
                    : 'Orders will appear here once customers place them.'}</p>
            </div>
        `;
        return;
    }

    let tableHTML = `
        <table class="orders-table">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Amount</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    filteredOrders.forEach((order) => {
        const date = order.createdAt ? new Date(order.createdAt) : null;
        const dateStr = date ? date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
        const timeStr = date ? date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : '';

        // Items
        let itemsHTML = '<div class="items-list">';
        if (order.items && order.items.length > 0) {
            order.items.forEach(item => {
                itemsHTML += `
                    <div class="item-row">
                        <span class="item-qty">×${item.quantity}</span>
                        <span>${item.name || 'Unknown'}</span>
                        ${item.selectedSize ? `<span class="item-size">(${item.selectedSize})</span>` : ''}
                    </div>
                `;
            });
        } else {
            itemsHTML += '<span style="color:var(--text-muted)">No items</span>';
        }
        itemsHTML += '</div>';

        // Address
        let addressHTML = `<div class="address-cell">`;
        if (order.customer) {
            addressHTML += `${order.customer.address || ''}`;
            if (order.customer.area) {
                addressHTML += `<br><span class="area-tag">${order.customer.area}</span>`;
            }
            if (order.customer.note) {
                addressHTML += `<div class="order-note">📝 ${order.customer.note}</div>`;
            }
        }
        addressHTML += '</div>';

        // Status
        const status = order.status || 'pending';
        const statusLabels = {
            pending: '⏳ Pending',
            confirmed: '📦 Confirmed',
            delivered: '✅ Delivered',
            cancelled: '❌ Cancelled'
        };

        tableHTML += `
            <tr>
                <td><span class="order-number">${order.orderNumber || order.id.substring(0,8).toUpperCase()}</span></td>
                <td>
                    <div class="customer-cell">
                        <span class="customer-name">${order.customer?.name || 'Unknown'}</span>
                        <span class="customer-phone">${order.customer?.phone || '—'}</span>
                    </div>
                </td>
                <td>${itemsHTML}</td>
                <td><span class="order-amount">Rs ${(order.total || 0).toLocaleString()}</span></td>
                <td>${addressHTML}</td>
                <td>
                    <span class="status-badge ${status}">
                        <span class="status-dot"></span>
                        ${statusLabels[status] || status}
                    </span>
                    <select class="status-select" onchange="updateOrderStatus('${order.id}', this.value)">
                        <option value="pending" ${status === 'pending' ? 'selected' : ''}>⏳ Pending</option>
                        <option value="confirmed" ${status === 'confirmed' ? 'selected' : ''}>📦 Confirmed</option>
                        <option value="delivered" ${status === 'delivered' ? 'selected' : ''}>✅ Delivered</option>
                        <option value="cancelled" ${status === 'cancelled' ? 'selected' : ''}>❌ Cancelled</option>
                    </select>
                </td>
                <td>
                    <div class="order-date">${dateStr}</div>
                    <div class="order-time">${timeStr}</div>
                </td>
                <td>
                    <button class="delete-btn" onclick="deleteOrder('${order.id}')" title="Delete order">🗑️</button>
                </td>
            </tr>
        `;
    });

    tableHTML += '</tbody></table>';
    ordersContainer.innerHTML = tableHTML;
}

// ─── Update Order Status ──────────────────────────────
function updateOrderStatus(orderId, newStatus) {
    db.collection('orders').doc(orderId).update({ status: newStatus })
        .then(() => {
            // Update local state
            const order = allOrders.find(o => o.id === orderId);
            if (order) order.status = newStatus;
            updateStats();
            applyFilters();
            showAdminToast(`✅ Order status updated to "${newStatus}"`);
        })
        .catch((err) => {
            console.error('Error updating status:', err);
            showAdminToast('⚠️ Failed to update status. Try again.');
        });
}

// ─── Delete Order ─────────────────────────────────────
function deleteOrder(orderId) {
    if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
        return;
    }

    db.collection('orders').doc(orderId).delete()
        .then(() => {
            allOrders = allOrders.filter(o => o.id !== orderId);
            updateStats();
            applyFilters();
            showAdminToast('🗑️ Order deleted successfully');
        })
        .catch((err) => {
            console.error('Error deleting order:', err);
            showAdminToast('⚠️ Failed to delete order. Try again.');
        });
}

// ─── Toast ────────────────────────────────────────────
let adminToastTimeout;
function showAdminToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(adminToastTimeout);
    adminToastTimeout = setTimeout(() => toastEl.classList.remove('show'), 3500);
}
