// Testimonial Data (15 entries with real car dealerships in Toronto, New York, Vancouver, Miami, and Los Angeles)
// Testimonial Data (15 entries with specific boat model sales in Toronto, New York, Vancouver, Miami, and Los Angeles)
const testimonialsData = [
    { text: "We sold our 2022 Sea Ray SLX 400 30% faster thanks to Buraleh & Co's targeted marketing and geolocation ads in Toronto!", author: "Chris Williams - Boat Seller, Toronto" },
    { text: "Buraleh & Co’s targeted ads brought in the right buyers for my 2021 Boston Whaler 270 Vantage, and I saved on marketing costs in Toronto.", author: "Jessica Taylor - Boat Owner, Toronto" },
    { text: "Selling my 2019 Sunseeker Predator 55 was a breeze with Buraleh & Co. We saw more interest and quicker offers in Vancouver.", author: "David Carter - Boat Seller, Vancouver" },
    { text: "Thanks to Buraleh & Co’s targeted marketing, my 2020 Regal 33 SAV sold much faster in Toronto. Highly recommend!", author: "Olivia Harris - Boat Owner, Toronto" },
    { text: "I got way more traffic for my 2021 Chaparral 267 SSX than ever before, all thanks to their SEO-optimized ads in Vancouver.", author: "Matthew Robinson - Boat Seller, Vancouver" },
    { text: "Buraleh & Co helped me sell my 2018 Grady-White Freedom 275 in Los Angeles much faster than I expected. Amazing results!", author: "Michael Thompson - Boat Seller, Los Angeles" },
    { text: "Buraleh & Co’s geolocation strategy helped me find buyers within my local area in Vancouver, and I sold my 2022 Monterey M225 in no time.", author: "Rachel Peterson - Boat Owner, Vancouver" },
    { text: "Their targeted ads helped me reach exactly the right buyers, and I sold my 2019 Sea Ray 230 SPX fast in Toronto.", author: "Will Turner - Boat Seller, Toronto" },
    { text: "I couldn’t believe how quickly I found a buyer for my 2020 Jeanneau NC 1095 after working with Buraleh & Co in Toronto. Excellent service!", author: "Samantha Brooks - Boat Owner, Toronto" },
    { text: "Buraleh & Co’s expertise in reaching targeted buyers really worked for me in Vancouver. My 2021 Cobalt R30 sold quickly.", author: "Emily Jenkins - Boat Seller, Vancouver" },
    { text: "I sold my 2022 Malibu Wakesetter 23 LSV within a week of using Buraleh & Co’s service in New York. The leads were high-quality and right on target.", author: "Charlie King - Boat Owner, New York" },
    { text: "Buraleh & Co helped me sell my 2020 Azimut Atlantis 43 faster than I ever expected in Miami. I’m so glad I chose their service!", author: "Evelyn Martinez - Boat Seller, Miami" },
    { text: "From the ad creation to the sale, Buraleh & Co made everything smooth. I’m happy with the result for my 2019 Beneteau Gran Turismo 50 in New York.", author: "Ben Lewis - Boat Seller, New York" },
    { text: "The SEO expertise they provided really helped my 2021 Pursuit S 408 listings stand out in Miami. More views and quicker offers!", author: "George Evans - Boat Owner, Miami" },
    { text: "Thanks to Buraleh & Co, I sold my 2018 Fountain 38 TE in Los Angeles much faster than I anticipated, all while saving on ad costs!", author: "Amanda Scott - Boat Seller, Los Angeles" }
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
