// Global variables
let charts = {};
let currentPage = 'dashboard';

// Document ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    setupEventListeners();
    initializeCharts();
    initializeDataTables();
    setupSidebarToggle();
    setupNavigation();
    setupProfileDropdown();
}

// Setup event listeners
function setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Profile dropdown actions
    document.querySelectorAll('[data-action]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');
            handleProfileAction(action);
        });
    });
    
    // Quick action buttons
    document.querySelectorAll('.btn-quick-action').forEach(btn => {
        btn.addEventListener('click', function() {
            handleQuickAction(this);
        });
    });
    
    // Settings save button
    const saveButton = document.querySelector('button:has-text("Save Settings")');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            saveSettings();
        });
    }
    
    // Filter buttons
    const filterButton = document.querySelector('.filter-section button');
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            applyFilters();
        });
    }
}

// Setup sidebar toggle
function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.getElementById('mainContainer');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContainer.classList.toggle('sidebar-collapsed');
        });
    }
}

// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('active');
            });
            this.classList.add('active');
            
            // Navigate to page
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

// Navigate to page
function navigateToPage(page) {
    currentPage = page;
    
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected content section
    const contentSection = document.getElementById(`${page}-content`);
    if (contentSection) {
        contentSection.classList.add('active');
    }
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('currentBreadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = capitalizeFirstLetter(page);
    }
    
    // Redraw charts if they exist for the current page
    setTimeout(() => {
        redrawChartsForPage(page);
    }, 100);
}

// Setup profile dropdown
function setupProfileDropdown() {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('active');
            }
        });
    }
}

// Handle profile actions
function handleProfileAction(action) {
    switch(action) {
        case 'profile':
            Swal.fire({
                title: 'My Profile',
                text: 'Profile settings coming soon',
                icon: 'info'
            });
            break;
        case 'settings':
            navigateToPage('settings');
            break;
        case 'logout':
            Swal.fire({
                title: 'Logout',
                text: 'Are you sure you want to logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, logout',
                confirmButtonColor: '#A5D1C7'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
                }
            });
            break;
    }
}

// Handle quick actions
function handleQuickAction(btn) {
    const text = btn.textContent.trim();
    Swal.fire({
        title: 'Action: ' + text,
        text: 'This action is being processed...',
        icon: 'info',
        confirmButtonColor: '#A5D1C7'
    });
}

// Save settings
function saveSettings() {
    Swal.fire({
        title: 'Settings Saved!',
        text: 'Your settings have been saved successfully.',
        icon: 'success',
        confirmButtonColor: '#A5D1C7'
    });
}

// Apply filters
function applyFilters() {
    Swal.fire({
        title: 'Filters Applied',
        text: 'Log filters have been applied.',
        icon: 'info',
        confirmButtonColor: '#A5D1C7'
    });
}

// Initialize charts
function initializeCharts() {
    // Logs per hour chart
    const logsPerHourCtx = document.getElementById('logsPerHourChart');
    if (logsPerHourCtx) {
        charts.logsPerHour = new Chart(logsPerHourCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                datasets: [{
                    label: 'Logs per Hour',
                    data: [450, 380, 320, 600, 850, 920, 1100, 1450, 1200, 950, 850, 720],
                    borderColor: '#A5D1C7',
                    backgroundColor: 'rgba(165, 209, 199, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
    
    // Error distribution chart
    const errorDistributionCtx = document.getElementById('errorDistributionChart');
    if (errorDistributionCtx) {
        charts.errorDistribution = new Chart(errorDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Database', 'API', 'Network', 'Permission', 'Other'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: ['#A5D1C7', '#D8C1B8', '#CED9E1', '#525252', '#FFB3BA']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                }
            }
        });
    }
    
    // Performance chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        charts.performance = new Chart(performanceCtx, {
            type: 'bar',
            data: {
                labels: ['CPU', 'Memory', 'Disk I/O', 'Network', 'Database'],
                datasets: [{
                    label: 'Usage %',
                    data: [68, 82, 45, 56, 72],
                    backgroundColor: ['#A5D1C7', '#D8C1B8', '#CED9E1', '#525252', '#FFB3BA']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    y: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
    
    // Network activity chart
    const networkActivityCtx = document.getElementById('networkActivityChart');
    if (networkActivityCtx) {
        charts.networkActivity = new Chart(networkActivityCtx, {
            type: 'area',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    label: 'Inbound (MB/s)',
                    data: [120, 150, 200, 180, 160, 140],
                    borderColor: '#A5D1C7',
                    backgroundColor: 'rgba(165, 209, 199, 0.2)',
                    fill: true
                }, {
                    label: 'Outbound (MB/s)',
                    data: [90, 110, 150, 140, 130, 100],
                    borderColor: '#D8C1B8',
                    backgroundColor: 'rgba(216, 193, 184, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
    
    // Daily volume chart
    const dailyVolumeCtx = document.getElementById('dailyVolumeChart');
    if (dailyVolumeCtx) {
        charts.dailyVolume = new Chart(dailyVolumeCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Log Count',
                    data: [45000, 52000, 48000, 61000, 55000, 35000, 28000],
                    backgroundColor: '#A5D1C7'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
    
    // Top sources chart
    const topSourcesCtx = document.getElementById('topSourcesChart');
    if (topSourcesCtx) {
        charts.topSources = new Chart(topSourcesCtx, {
            type: 'radar',
            data: {
                labels: ['Server-01', 'Server-02', 'Server-03', 'Server-04', 'Server-05'],
                datasets: [{
                    label: 'Log Count',
                    data: [1200, 1500, 900, 1100, 1300],
                    borderColor: '#A5D1C7',
                    backgroundColor: 'rgba(165, 209, 199, 0.15)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                }
            }
        });
    }
    
    // Error rate chart
    const errorRateCtx = document.getElementById('errorRateChart');
    if (errorRateCtx) {
        charts.errorRate = new Chart(errorRateCtx, {
            type: 'line',
            data: {
                labels: ['Server-01', 'Server-02', 'Server-03', 'Server-04', 'Server-05'],
                datasets: [{
                    label: 'Error Rate %',
                    data: [2.5, 3.2, 1.8, 2.9, 2.1],
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
    
    // Metrics chart
    const metricsCtx = document.getElementById('metricsChart');
    if (metricsCtx) {
        charts.metrics = new Chart(metricsCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 24}, (_, i) => i + ':00'),
                datasets: [{
                    label: 'Response Time (ms)',
                    data: Array.from({length: 24}, () => Math.floor(Math.random() * 50 + 20)),
                    borderColor: '#A5D1C7',
                    backgroundColor: 'rgba(165, 209, 199, 0.1)',
                    borderWidth: 2,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#525252', font: { size: 12 } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#7A7C87' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    }
                }
            }
        });
    }
}

// Redraw charts for current page
function redrawChartsForPage(page) {
    Object.keys(charts).forEach(key => {
        if (charts[key] && charts[key].resize) {
            charts[key].resize();
        }
    });
}

// Initialize DataTables
function initializeDataTables() {
    const logsTable = document.getElementById('logsTable');
    if (logsTable && $.fn.dataTable) {
        $(logsTable).DataTable({
            paging: false,
            searching: false,
            info: false,
            ordering: true
        });
    }
    
    const allLogsTable = document.getElementById('allLogsTable');
    if (allLogsTable && $.fn.dataTable) {
        $(allLogsTable).DataTable({
            pageLength: 10,
            searching: true,
            ordering: true,
            columnDefs: [
                { targets: 4, orderable: false }
            ]
        });
    }
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Auto-refresh data every 30 seconds
setInterval(function() {
    updateDashboardData();
}, 30000);

// Update dashboard data
function updateDashboardData() {
    // Simulate data update
    document.getElementById('serversOnline').textContent = Math.floor(Math.random() * 5) + 10;
    document.getElementById('activeConnections').textContent = Math.floor(Math.random() * 100) + 200;
    document.getElementById('logsCounted').textContent = (Math.floor(Math.random() * 5000) + 5000).toLocaleString();
    document.getElementById('avgResponseTime').textContent = Math.floor(Math.random() * 30) + 20 + 'ms';
}

// Set user name (can be updated with actual user data)
document.addEventListener('DOMContentLoaded', function() {
    const userName = document.getElementById('userName');
    if (userName) {
        userName.textContent = 'Admin User';
    }
});
