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
        
        // Form submission
        document.querySelectorAll('.form-btn, .newsletter-btn').forEach(button => {
            button.addEventListener('click', function(e) {
				if (this.closest('form')?.id === 'loginForm') return;
                e.preventDefault();
                
                // // Show success message
                // const originalText = this.textContent;
                // this.textContent = 'Thank you! Message sent.';
                // this.style.background = 'linear-gradient(135deg, #06ffa5, #00b4d8)';
                
                // Reset form
                const form = this.closest('form');
                if (form) {
                    form.reset();
                }
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 3000);
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
        
        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
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
