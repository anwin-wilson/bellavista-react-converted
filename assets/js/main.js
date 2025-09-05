// Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            const mobileMenu = document.querySelector('.mobile-menu');
            nav.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            if (!nav.contains(event.target) && !mobileMenu.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('nav').classList.remove('active');
                document.querySelector('.mobile-menu').classList.remove('active');
            });
        });
        
        // Left side menu toggle
        document.querySelector('.left-menu-toggle').addEventListener('click', function() {
            const sideMenu = document.getElementById('sideMenu');
            sideMenu.classList.toggle('active');
        });
		
        
        // Close menu when clicking the close button
        document.querySelector('.close-menu').addEventListener('click', function() {
            document.getElementById('sideMenu').classList.remove('active');
        });
        
        // Close side menu when clicking outside
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('sideMenu');
            const toggle = document.querySelector('.left-menu-toggle');
            
            if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
                menu.classList.remove('active');
            }
        });
        
        // Close side menu when clicking on a link
        document.querySelectorAll('#sideMenu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('sideMenu').classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
            });
        });
        
        // Form submission with loading state
        document.querySelectorAll('.form-btn, .newsletter-btn').forEach(button => {
            button.addEventListener('click', function(e) {
				if (this.closest('form')?.id === 'loginForm') return;
                e.preventDefault();
                
                // Show loading state
                const originalText = this.textContent;
                this.innerHTML = '<span class="loading-spinner"></span>Sending...';
                this.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    this.innerHTML = '✓ Thank you! Message sent.';
                    this.style.background = 'linear-gradient(135deg, #06ffa5, #00b4d8)';
                    
                    // Reset form
                    const form = this.closest('form');
                    if (form) {
                        form.reset();
                    }
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = '';
                        this.disabled = false;
                    }, 3000);
                }, 1500);
            });
        });
        
        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                // Show success message
                const button = this.querySelector('.newsletter-btn');
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.style.background = 'linear-gradient(135deg, #06ffa5, #00b4d8)';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 3000);
            }
        });
        
        // Gallery item click handler
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                // In a real application, this would open a lightbox or modal
                const title = this.querySelector('.gallery-title').textContent;
                const description = this.querySelector('.gallery-description').textContent;
                
                // Create a simple modal
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                modal.style.display = 'flex';
                modal.style.alignItems = 'center';
                modal.style.justifyContent = 'center';
                modal.style.zIndex = '2000';
                
                modal.innerHTML = `
                    <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; text-align: center;">
                        <h3 style="color: var(--primary-purple); margin-bottom: 15px;">${title}</h3>
                        <p style="color: var(--text-light); margin-bottom: 20px;">${description}</p>
                        <button onclick="this.parentElement.parentElement.remove()" style="background: var(--gradient); color: white; border: none; padding: 10px 20px; border-radius: 30px; cursor: pointer;">Close</button>
                    </div>
                `;
                
                document.body.appendChild(modal);
            });
        });
        
        // Add animation on scroll (optimized for mobile)
        const observerOptions = {
            threshold: window.innerWidth <= 768 ? 0.05 : 0.1,
            rootMargin: window.innerWidth <= 768 ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.home-card, .testimonial-card, .news-card, .career-card, .faq-item, .gallery-item').forEach(el => {
            observer.observe(el);
        });
        
        // Back to Top functionality
document.body.insertAdjacentHTML('beforeend', '<button class="back-to-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>');

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// PWA Installation
let deferredPrompt;
let installButton;

// Create install button
function createInstallButton() {
    installButton = document.createElement('button');
    installButton.className = 'pwa-install-btn';
    installButton.innerHTML = '<i class="fas fa-download"></i>';
    installButton.setAttribute('aria-label', 'Install App');
    installButton.title = 'Install Bellavista App';
    document.body.appendChild(installButton);
    
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('PWA installed');
            }
            deferredPrompt = null;
            installButton.style.display = 'none';
        }
    });
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    if (!installButton) {
        createInstallButton();
    }
    installButton.classList.add('show');
});

// Hide install button after installation
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installButton) {
        installButton.style.display = 'none';
    }
    deferredPrompt = null;
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Chat Widget Functionality
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.classList.toggle('active');
}

// Close chat when clicking outside
document.addEventListener('click', function(event) {
    const chatWidget = document.getElementById('chatWidget');
    const chatPopup = document.getElementById('chatPopup');
    
    if (chatWidget && !chatWidget.contains(event.target)) {
        chatPopup.classList.remove('active');
    }
});

// Mobile-specific enhancements
if (window.innerWidth <= 768) {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add touch feedback
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('btn') || 
            e.target.classList.contains('home-card') ||
            e.target.classList.contains('news-card')) {
            e.target.style.transform = 'scale(0.98)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.classList.contains('btn') || 
            e.target.classList.contains('home-card') ||
            e.target.classList.contains('news-card')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
    
    // Optimize scrolling for mobile
    document.addEventListener('touchmove', function(e) {
        if (e.target.closest('.homes-grid') || 
            e.target.closest('.news-grid') ||
            e.target.closest('.testimonials-grid')) {
            e.stopPropagation();
        }
    }, { passive: true });
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization for mobile
if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        .animate__animated {
            animation-duration: 0.5s !important;
        }
    `;
    document.head.appendChild(style);
}
