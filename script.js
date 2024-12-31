const testimonialsData = [
    { text: "We attracted new patients 30% faster thanks to Buraleh & Co's targeted marketing and geolocation ads in Toronto!", author: "Dr. Chris Williams - Dentist, Toronto" },
    { text: "Buraleh & Co’s targeted ads brought in the right patients for my dental practice in Toronto, and I saved on marketing costs.", author: "Dr. Jessica Taylor - Dentist, Toronto" },
    { text: "Thanks to Buraleh & Co’s services, my dental practice in Vancouver saw more patient inquiries and appointments in no time.", author: "Dr. David Carter - Dentist, Vancouver" },
    { text: "Buraleh & Co’s targeted marketing helped my dental office in Toronto fill up its schedule much faster. Highly recommend!", author: "Dr. Olivia Harris - Dentist, Toronto" },
    { text: "I got way more patient inquiries for my dental clinic in Vancouver than ever before, thanks to their SEO-optimized ads.", author: "Dr. Matthew Robinson - Dentist, Vancouver" },
    { text: "Buraleh & Co helped my dental office in Los Angeles attract more local patients in a short amount of time. Fantastic results!", author: "Dr. Michael Thompson - Dentist, Los Angeles" },
    { text: "Buraleh & Co’s geolocation strategy helped me reach local patients in Vancouver, and I saw a significant boost in new appointments.", author: "Dr. Rachel Peterson - Dentist, Vancouver" },
    { text: "Their targeted ads helped me reach exactly the right patients, and my dental clinic in Toronto saw an increase in new clients fast.", author: "Dr. Will Turner - Dentist, Toronto" },
    { text: "I couldn’t believe how quickly I attracted new patients to my dental practice in Toronto after working with Buraleh & Co. Excellent service!", author: "Dr. Samantha Brooks - Dentist, Toronto" },
    { text: "Buraleh & Co’s expertise in reaching targeted patients worked wonders for me in Vancouver. My dental practice grew quickly.", author: "Dr. Emily Jenkins - Dentist, Vancouver" },
    { text: "I filled my dental office schedule within a week of using Buraleh & Co’s service in Montreal. The leads were perfect and right on target.", author: "Dr. Charlie King - Dentist, Montreal" },
    { text: "Buraleh & Co helped my dental clinic in Miami grow faster than I expected. Their service truly brought in high-quality leads!", author: "Dr. Evelyn Martinez - Dentist, Miami" },
    { text: "From the ad creation to getting new patients, Buraleh & Co made everything smooth. I’m happy with the result for my dental practice in New York.", author: "Dr. Ben Lewis - Dentist, New York" },
    { text: "The SEO expertise they provided helped my dental office listings stand out in Miami. More visibility and quicker appointment bookings!", author: "Dr. George Evans - Dentist, Miami" },
    { text: "Thanks to Buraleh & Co, I attracted more patients to my dental clinic in Los Angeles than I expected, all while reducing my ad costs.", author: "Dr. Amanda Scott - Dentist, Los Angeles" }
];


// Boat Makes Data (replace with real boat logo PNG URLs)
const boatMakesData = [
    { logoUrl: 'https://ruyachts.com/images/westport/shipyard/logo/logo.png' },  // Replace with actual boat logo URLs
    { logoUrl: 'https://example.com/boat-logos/boat2.png' },
    { logoUrl: 'https://example.com/boat-logos/boat3.png' },
    { logoUrl: 'https://example.com/boat-logos/boat4.png' },
    { logoUrl: 'https://example.com/boat-logos/boat5.png' },
    { logoUrl: 'https://example.com/boat-logos/boat6.png' },
    { logoUrl: 'https://example.com/boat-logos/boat7.png' },
    { logoUrl: 'https://example.com/boat-logos/boat8.png' },
    { logoUrl: 'https://example.com/boat-logos/boat9.png' },
    { logoUrl: 'https://example.com/boat-logos/boat10.png' },
    { logoUrl: 'https://example.com/boat-logos/boat11.png' },
    { logoUrl: 'https://example.com/boat-logos/boat12.png' },
    { logoUrl: 'https://example.com/boat-logos/boat13.png' },
    { logoUrl: 'https://example.com/boat-logos/boat14.png' },
    { logoUrl: 'https://example.com/boat-logos/boat15.png' }
];
// Cities Data (5 major cities)
const citiesData = [
    "Toronto", "New York", "Vancouver", "Miami", "Los Angeles"
];

// Common function to load dynamic content (testimonials, car makes, or cities)
function loadDynamicContent(data, containerClass, itemClass, contentFn) {
    const container = document.querySelector(containerClass);
    if (container) {
        container.innerHTML = ''; // Clear existing content
        data.forEach(item => {
            const element = document.createElement('div');
            element.classList.add(itemClass);
            element.innerHTML = contentFn(item);
            container.appendChild(element);
        });
    }
}

// Testimonials slide logic
let currentTestimonialIndex = 0;

function slideTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (!testimonialsSlider) return;

    const totalTestimonials = testimonialsData.length;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    const itemWidth = document.querySelector('.testimonial')?.offsetWidth || 320; // Default to 320px
    testimonialsSlider.style.transform = `translateX(-${currentTestimonialIndex * itemWidth}px)`;
}

// Car makes slide logic
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    if (!carMakesSlider) return;

    const totalCarMakes = carMakesData.length;
    currentCarMakeIndex = (currentCarMakeIndex + 1) % totalCarMakes;
    const itemWidth = document.querySelector('.car-make-logo')?.offsetWidth || 170; // Default to 170px
    carMakesSlider.style.transition = 'transform 4s ease-in-out';
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * itemWidth}px)`;
}

// Carousel intervals
let carouselIntervals = {
    testimonials: setInterval(slideTestimonials, 4000),
    carMakes: setInterval(slideCarMakes, 4000)
};

// Hover event listeners to pause and resume carousels
function addCarouselHoverListeners(containerClass, intervalType) {
    const container = document.querySelector(containerClass);
    if (container) {
        container.addEventListener('mouseover', () => {
            clearInterval(carouselIntervals[intervalType]);
        });
        container.addEventListener('mouseout', () => {
            if (intervalType === 'testimonials') {
                carouselIntervals.testimonials = setInterval(slideTestimonials, 4000);
            } else if (intervalType === 'carMakes') {
                carouselIntervals.carMakes = setInterval(slideCarMakes, 4000);
            }
        });
    }
}

// Hover effect for cities
function addCityHoverEffect() {
    const cities = document.querySelectorAll('.city');
    cities.forEach(city => {
        city.addEventListener('mouseover', () => {
            // Add pop effect on hover
            city.style.transform = 'scale(1.1)';
            city.style.transition = 'transform 0.3s ease';
        });

        city.addEventListener('mouseout', () => {
            // Reset the pop effect when hover is removed
            city.style.transform = 'scale(1)';
        });
    });
}

// JavaScript for interactive yacht rotation
const yacht = document.getElementById('yacht');
let isDragging = false;
let startX, startY, angleX = 0, angleY = 0;

yacht.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    yacht.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    angleX += deltaX * 0.5;
    angleY -= deltaY * 0.5;

    yacht.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;

    startX = e.clientX;
    startY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    yacht.style.cursor = 'grab';
});

// Initialize everything after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load testimonials and car makes dynamically
    loadDynamicContent(testimonialsData, '.testimonials-slider', 'testimonial', item => `
        <p>"${item.text}"</p>
        <h3>${item.author}</h3>
    `);
    loadDynamicContent(carMakesData, '.car-makes-slider', 'car-make-logo', item => `
        <img src="${item.logoUrl}" alt="Car Make">
    `);
    loadDynamicContent(citiesData, '.cities-slider', 'city', city => `
        <h3>${city}</h3>
    `);

    // Add hover effect for cities
    addCityHoverEffect();

    // Initialize the other sliders
    slideTestimonials();
    slideCarMakes();

    // Add hover listeners for testimonials and car makes
    addCarouselHoverListeners('.testimonials-carousel-container', 'testimonials');
    addCarouselHoverListeners('.car-makes-carousel-container', 'carMakes');
});
