// Auto-rotating tabs functionality
class AutoRotatingTabs {
    constructor(containerSelector, interval = 5000) {
        this.container = document.querySelector(containerSelector);
        this.interval = interval;
        this.currentIndex = 0;
        this.isAutoRotating = true;
        this.rotationTimer = null;
        this.tabs = [];
        this.contents = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.tabs = this.container.querySelectorAll('.tab-btn');
        this.contents = this.container.querySelectorAll('.tab-content');
        
        if (this.tabs.length === 0) return;
        
        this.setupEventListeners();
        this.startAutoRotation();
    }
    
    setupEventListeners() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                this.stopAutoRotation();
                this.switchToTab(index);
                // Resume auto-rotation after 10 seconds of inactivity
                setTimeout(() => {
                    if (!this.isAutoRotating) {
                        this.startAutoRotation();
                    }
                }, 10000);
            });
        });
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => {
            this.pauseAutoRotation();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.resumeAutoRotation();
        });
    }
    
    switchToTab(index) {
        // Remove active classes
        this.tabs.forEach(tab => {
            tab.classList.remove('active', 'auto-rotating');
        });
        this.contents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active classes
        this.tabs[index].classList.add('active');
        this.contents[index].classList.add('active');
        
        this.currentIndex = index;
    }
    
    nextTab() {
        const nextIndex = (this.currentIndex + 1) % this.tabs.length;
        this.switchToTab(nextIndex);
    }
    
    startAutoRotation() {
        this.isAutoRotating = true;
        this.rotationTimer = setInterval(() => {
            // Add progress animation to current tab
            this.tabs[this.currentIndex].classList.add('auto-rotating');
            
            // Switch to next tab after animation
            setTimeout(() => {
                this.nextTab();
            }, this.interval - 100);
        }, this.interval);
    }
    
    stopAutoRotation() {
        this.isAutoRotating = false;
        if (this.rotationTimer) {
            clearInterval(this.rotationTimer);
            this.rotationTimer = null;
        }
        this.tabs.forEach(tab => tab.classList.remove('auto-rotating'));
    }
    
    pauseAutoRotation() {
        if (this.rotationTimer) {
            clearInterval(this.rotationTimer);
        }
    }
    
    resumeAutoRotation() {
        if (this.isAutoRotating) {
            this.startAutoRotation();
        }
    }
    

}

// Auto-rotating news filters
class AutoRotatingNews {
    constructor(containerSelector, interval = 3000) {
        this.container = document.querySelector(containerSelector);
        this.interval = interval;
        this.currentIndex = 0;
        this.isAutoRotating = true;
        this.rotationTimer = null;
        this.filters = [];
        this.newsCards = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.filters = this.container.querySelectorAll('.filter-btn');
        this.newsCards = document.querySelectorAll('.news-card[data-category]');
        
        if (this.filters.length === 0) return;
        
        this.setupEventListeners();
        this.startAutoRotation();
    }
    
    setupEventListeners() {
        this.filters.forEach((filter, index) => {
            filter.addEventListener('click', () => {
                this.stopAutoRotation();
                this.switchToFilter(index);
                // Resume auto-rotation after 8 seconds of inactivity
                setTimeout(() => {
                    if (!this.isAutoRotating) {
                        this.startAutoRotation();
                    }
                }, 8000);
            });
        });
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => {
            this.pauseAutoRotation();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.resumeAutoRotation();
        });
    }
    
    switchToFilter(index) {
        const filter = this.filters[index];
        const filterType = filter.dataset.filter;
        
        // Remove active classes
        this.filters.forEach(f => {
            f.classList.remove('active', 'auto-active');
        });
        
        // Add active class
        filter.classList.add('active');
        
        // Filter news cards with animation
        this.filterNewsCards(filterType);
        
        this.currentIndex = index;
    }
    
    filterNewsCards(filterType) {
        this.newsCards.forEach((card, index) => {
            // Add stagger delay for smooth animation
            setTimeout(() => {
                if (filterType === 'all') {
                    if (card.classList.contains('news-visible')) {
                        card.style.display = 'block';
                        card.classList.add('visible');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('visible');
                    }
                } else if (card.dataset.category === filterType) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            }, index * 100);
        });
    }
    
    nextFilter() {
        const nextIndex = (this.currentIndex + 1) % this.filters.length;
        this.switchToFilter(nextIndex);
    }
    
    startAutoRotation() {
        this.isAutoRotating = true;
        this.rotationTimer = setInterval(() => {
            // Add progress animation to current filter
            this.filters[this.currentIndex].classList.add('auto-active');
            
            // Switch to next filter after animation
            setTimeout(() => {
                this.nextFilter();
            }, this.interval - 100);
        }, this.interval);
    }
    
    stopAutoRotation() {
        this.isAutoRotating = false;
        if (this.rotationTimer) {
            clearInterval(this.rotationTimer);
            this.rotationTimer = null;
        }
        this.filters.forEach(filter => filter.classList.remove('auto-active'));
    }
    
    pauseAutoRotation() {
        if (this.rotationTimer) {
            clearInterval(this.rotationTimer);
        }
    }
    
    resumeAutoRotation() {
        if (this.isAutoRotating) {
            this.startAutoRotation();
        }
    }
    

}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if mobile view (768px or less)
    function isMobileView() {
        return window.innerWidth <= 768;
    }
    
    let facilitiesTabs = null;
    let newsRotation = null;
    
    function initMobileFeatures() {
        if (isMobileView()) {
            // Initialize auto-rotating facilities tabs (5 seconds interval)
            if (!facilitiesTabs) {
                facilitiesTabs = new AutoRotatingTabs('.facilities-showcase', 5000);
            }
            
            // News auto-rotation disabled
            // if (!newsRotation) {
            //     newsRotation = new AutoRotatingNews('.news', 3000);
            // }
        } else {
            // Stop auto-rotation on desktop
            if (facilitiesTabs) {
                facilitiesTabs.stopAutoRotation();
                facilitiesTabs = null;
            }
            if (newsRotation) {
                newsRotation.stopAutoRotation();
                newsRotation = null;
            }
        }
    }
    
    // Initialize on load
    initMobileFeatures();
    
    // Re-initialize on window resize
    window.addEventListener('resize', initMobileFeatures);
    
    // Add smooth scroll behavior for better UX
    if (isMobileView()) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Enhanced visibility animations for news cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const newsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all news cards
    document.querySelectorAll('.news-card.modern').forEach(card => {
        newsObserver.observe(card);
    });
});

// Export for potential external use
window.AutoRotatingTabs = AutoRotatingTabs;
window.AutoRotatingNews = AutoRotatingNews;