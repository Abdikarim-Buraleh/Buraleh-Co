// Testimonial Data (15 entries with real car dealerships in Canada)
const testimonialsData = [
    { text: "Buraleh & Co helped us sell cars 30% faster through targeted marketing and geolocation ads!", author: "John Doe - Sales Manager, Dilawri Group of Companies" },
    { text: "The geolocation-based ads brought in more qualified buyers and reduced our marketing costs.", author: "Jane Smith - Dealer, Go Auto" },
    { text: "We saw a significant increase in engagement thanks to Buraleh & Co's marketing strategy.", author: "David Lee - Owner, Porsche Centre Vancouver" },
    { text: "Targeted marketing has significantly improved our conversion rates. Highly recommend!", author: "Lisa Martin - Sales Director, Toronto Honda" },
    { text: "Fantastic results with SEO-optimized ads. We've seen more traffic than ever before.", author: "James Johnson - Car Sales Rep, Vancouver BMW" },
    { text: "We trust Buraleh & Co for all our advertising needs. Our sales have doubled.", author: "Michael Brown - Sales Manager, Highlander Toyota" },
    { text: "The ability to target potential buyers within a specific radius has been game-changing.", author: "Rachel Green - Owner, St. John's Ford" },
    { text: "Their geolocation strategy works wonders! We’re reaching new customers every day.", author: "Will Turner - Marketing Head, AutoCanada" },
    { text: "Great customer service and even better results! Buraleh & Co is the real deal.", author: "Samantha Gray - Owner, Calgary's Crowfoot Ford" },
    { text: "With Buraleh & Co, we are able to engage highly targeted buyers, not just leads.", author: "Olivia Harris - Sales Rep, Windsor Mazda" },
    { text: "The results speak for themselves! Higher quality leads, more car sales.", author: "Charlie King - Sales Rep, Sherwood Park Toyota" },
    { text: "We’ve been using Buraleh & Co's service for over a year, and it just keeps getting better.", author: "Evelyn Roberts - Marketing Manager, Edmonton Mitsubishi" },
    { text: "From ad creation to conversion, Buraleh & Co has streamlined everything. Very happy.", author: "Benjamin Lee - Car Salesman, Montreal Kia" },
    { text: "With their SEO expertise, our car listings are getting more views than ever.", author: "George White - Sales Manager, Mississauga Chrysler" },
    { text: "We’ve cut down on ad spend significantly while increasing sales volume. Best decision ever!", author: "Amanda Young - Marketing Director, Markham Toyota" }
];

// Car Makes Data (log URLs for 15 car makes)
const carMakesData = [
    { logoUrl: 'https://www.carlogos.org/car-logos/tesla-logo-2007.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/ford-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/chevrolet-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/honda-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/toyota-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/infiniti-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/land-rover-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/jaguar-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/audi-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/jeep-logo.png' },
    { logoUrl: 'https://www.carlogos.org/car-logos/lincoln-logo.png' }
];

// Cities Data
const citiesData = [
    "Toronto",
    "Vancouver",
    "Miami",
    "Los Angeles",
    "New York"
];

// Common function to load dynamic data (testimonials, car makes, or cities)
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
    testimonialsSlider.style.transform = `translateX(-${currentTestimonialIndex * 320}px)`;
}

// Car makes slide logic
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    if (!carMakesSlider) return;

    const totalCarMakes = carMakesData.length;
    currentCarMakeIndex = (currentCarMakeIndex + 1) % totalCarMakes;
    carMakesSlider.style.transition = 'transform 4s ease-in-out';
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * 170}px)`;
}

// Removed Cities slide logic since we are implementing the hover effect now

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
            carouselIntervals[intervalType] = setInterval(window[`${intervalType}Slider`], 4000);
        });
    }
}

// Added hover effect for cities
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

    // Add hover effect for cities to make them pop
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

    // Initialize the other sliders
    slideTestimonials();
    slideCarMakes();

    // Add hover listeners for testimonials and car makes
    addCarouselHoverListeners('.testimonials-carousel-container', 'testimonials');
    addCarouselHoverListeners('.car-makes-carousel-container', 'carMakes');
});
