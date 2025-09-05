// Care homes data
const careHomes = [
    { name: 'Bellavista Cardiff', distance: '2.3 miles', duration: '8 minutes', phone: '029 2000 0000' },
    { name: 'Bellavista Barry', distance: '3.1 miles', duration: '12 minutes', phone: '01446 700 000' },
    { name: 'Waverley Care Centre', distance: '1.8 miles', duration: '6 minutes', phone: '029 2100 0000' },
    { name: 'College Fields', distance: '4.2 miles', duration: '15 minutes', phone: '029 2200 0000' }
];

// Find nearest home functionality
function findNearestHome() {
    const location = document.getElementById('locationInput').value.trim();
    const searchBtn = document.querySelector('.search-btn');
    
    if (!location) {
        // Mobile-friendly alert
        if (window.innerWidth <= 768) {
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #ff6b6b;
                color: white;
                padding: 12px 20px;
                border-radius: 25px;
                font-size: 14px;
                z-index: 9999;
                animation: slideDown 0.3s ease;
            `;
            toast.textContent = 'Please enter your postcode or city';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        } else {
            alert('Please enter your postcode or city');
        }
        return;
    }
    
    // Show loading state
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    searchBtn.disabled = true;
    
    // Simulate search delay
    setTimeout(() => {
        const randomHome = careHomes[Math.floor(Math.random() * careHomes.length)];
        const mapContainer = document.getElementById('mapContainer');
        const results = document.getElementById('results');
        
        mapContainer.style.display = 'block';
        setTimeout(() => {
            mapContainer.classList.add('show');
        }, 100);
        
        document.getElementById('nearestHomeName').textContent = randomHome.name;
        document.getElementById('distance').textContent = randomHome.distance;
        document.getElementById('duration').textContent = randomHome.duration;
        
        results.style.display = 'block';
        const isMobile = window.innerWidth <= 768;
        results.innerHTML = `
            <div style="background: white; padding: ${isMobile ? '15px' : '20px'}; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h4 style="color: var(--primary-blue); margin-bottom: 15px; font-size: ${isMobile ? '16px' : '18px'};">
                    <i class="fas fa-map-marker-alt"></i> ${randomHome.name}
                </h4>
                <p style="font-size: ${isMobile ? '14px' : '16px'};"><i class="fas fa-phone"></i> ${randomHome.phone}</p>
                <div style="margin-top: 15px; ${isMobile ? 'display: flex; flex-direction: column; gap: 10px;' : ''}">
                    <a href="./pages/info/schedule-tour.html" class="btn" style="${isMobile ? 'width: 100%; text-align: center; font-size: 14px; padding: 10px;' : 'margin-right: 10px;'}">
                        <i class="fas fa-calendar-check"></i> Schedule Tour
                    </a>
                    <a href="./pages/info/contact.html" class="btn btn-outline" style="${isMobile ? 'width: 100%; text-align: center; font-size: 14px; padding: 10px;' : ''}">
                        <i class="fas fa-phone"></i> Contact
                    </a>
                </div>
            </div>
        `;
        
        // Reset search button
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        
        // Scroll to results on mobile
        if (isMobile) {
            results.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 1000);
}

// Close map functionality
function closeMap() {
    const mapContainer = document.getElementById('mapContainer');
    const results = document.getElementById('results');
    
    mapContainer.classList.remove('show');
    setTimeout(() => {
        mapContainer.style.display = 'none';
        results.style.display = 'none';
    }, 800);
}

// Hero slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Chat widget functionality
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

// Modal functionality for care promise cards
function openModal(serviceType) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    const serviceDetails = {
        comfort: {
            title: 'Home Comfort - A Warm, Welcoming Environment',
            content: `
                <div class="service-detail">
                    <h4><i class="fas fa-home"></i> Creating a Home-Like Atmosphere</h4>
                    <p>At Bellavista, we believe that comfort begins with creating an environment that truly feels like home. Our spaces are thoughtfully designed to provide warmth, familiarity, and a sense of belonging for every resident.</p>
                    
                    <h4><i class="fas fa-couch"></i> Comfortable Living Spaces</h4>
                    <ul>
                        <li>Beautifully furnished communal lounges with comfortable seating</li>
                        <li>Private en-suite bedrooms with personal touches encouraged</li>
                        <li>Quiet reading areas and peaceful garden spaces</li>
                        <li>Family-friendly visiting areas for quality time together</li>
                    </ul>
                    
                    <h4><i class="fas fa-heart"></i> Personal Touch</h4>
                    <p>We encourage residents to bring personal belongings, photographs, and cherished items to make their space truly their own. Our staff take time to understand each resident's preferences, routines, and what makes them feel most at home.</p>
                </div>
            `
        },
        safety: {
            title: 'Safety First - Advanced Protection & Emergency Response',
            content: `
                <div class="service-detail">
                    <h4><i class="fas fa-shield-alt"></i> Comprehensive Safety Systems</h4>
                    <p>The safety and security of our residents is our top priority. We maintain state-of-the-art safety systems and protocols to ensure peace of mind for residents and families.</p>
                    
                    <h4><i class="fas fa-bell"></i> Emergency Response</h4>
                    <ul>
                        <li>24/7 nurse call systems in every room</li>
                        <li>Trained emergency response team on-site at all times</li>
                        <li>Direct links to local emergency services</li>
                        <li>Regular emergency drills and staff training</li>
                    </ul>
                    
                    <h4><i class="fas fa-user-md"></i> Medical Safety</h4>
                    <p>With qualified nursing staff available 24/7, medical equipment on-site, and established relationships with local hospitals, we're prepared to handle any health emergency promptly and professionally.</p>
                </div>
            `
        },
        community: {
            title: 'Community - Vibrant Social Life & Meaningful Connections',
            content: `
                <div class="service-detail">
                    <h4><i class="fas fa-users"></i> Building Lasting Friendships</h4>
                    <p>We foster a vibrant community where residents can form meaningful friendships, participate in group activities, and maintain social connections that enrich their daily lives.</p>
                    
                    <h4><i class="fas fa-calendar-alt"></i> Daily Activities & Events</h4>
                    <ul>
                        <li>Group exercise classes and gentle fitness programs</li>
                        <li>Arts and crafts workshops with seasonal themes</li>
                        <li>Music therapy sessions and sing-alongs</li>
                        <li>Games nights, bingo, and quiz competitions</li>
                        <li>Special celebrations for holidays and birthdays</li>
                    </ul>
                    
                    <h4><i class="fas fa-handshake"></i> Family Integration</h4>
                    <p>We welcome family involvement in our community through regular events, family days, and opportunities for loved ones to participate in activities and celebrations together.</p>
                </div>
            `
        },
        wellness: {
            title: 'Wellness Focus - Holistic Health & Wellbeing',
            content: `
                <div class="service-detail">
                    <h4><i class="fas fa-leaf"></i> Holistic Approach to Wellbeing</h4>
                    <p>We believe in caring for the whole person - mind, body, and spirit. Our wellness programs are designed to promote physical health, mental stimulation, and emotional wellbeing.</p>
                    
                    <h4><i class="fas fa-dumbbell"></i> Physical Wellness</h4>
                    <ul>
                        <li>Physiotherapy and occupational therapy services</li>
                        <li>Chair exercises and gentle movement programs</li>
                        <li>Accessible garden areas for outdoor activities</li>
                        <li>Nutritious, balanced meals tailored to dietary needs</li>
                    </ul>
                    
                    <h4><i class="fas fa-brain"></i> Mental Stimulation</h4>
                    <p>Our activities program includes cognitive exercises, memory games, reading groups, and educational talks to keep minds active and engaged.</p>
                </div>
            `
        }
    };
    
    if (serviceDetails[serviceType]) {
        title.textContent = serviceDetails[serviceType].title;
        body.innerHTML = serviceDetails[serviceType].content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Enter key support for location input
    const locationInput = document.getElementById('locationInput');
    if (locationInput) {
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                findNearestHome();
            }
        });
    }
    
    // Auto-advance slideshow every 5 seconds (slower for mobile)
    if (slides.length > 0) {
        const interval = window.innerWidth <= 768 ? 6000 : 4000;
        setInterval(nextSlide, interval);
    }
    
    // Add swipe support for slideshow on mobile
    if (window.innerWidth <= 768 && slides.length > 0) {
        let startX = 0;
        let endX = 0;
        
        const slideshow = document.querySelector('.hero-slideshow');
        if (slideshow) {
            slideshow.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            slideshow.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                const diff = startX - endX;
                
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
                        showSlide(currentSlide);
                    }
                }
            });
        }
    }
    
    // Mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
});