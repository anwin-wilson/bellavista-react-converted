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
    if (!location) {
        alert('Please enter your postcode or city');
        return;
    }
    
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
    results.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <h4 style="color: var(--primary-blue); margin-bottom: 15px;">
                <i class="fas fa-map-marker-alt"></i> ${randomHome.name}
            </h4>
            <p><i class="fas fa-phone"></i> ${randomHome.phone}</p>
            <div style="margin-top: 15px;">
                <a href="./pages/info/schedule-tour.html" class="btn" style="margin-right: 10px;">
                    <i class="fas fa-calendar-check"></i> Schedule Tour
                </a>
                <a href="./pages/info/contact.html" class="btn ghost">
                    <i class="fas fa-phone"></i> Contact
                </a>
            </div>
        </div>
    `;
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
    
    // Auto-advance slideshow every 4 seconds
    if (slides.length > 0) {
        setInterval(nextSlide, 4000);
    }

});