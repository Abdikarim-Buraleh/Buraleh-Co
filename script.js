// Testimonial Data (15 entries)
const testimonialsData = [
    { text: "Buraleh & Co helped us sell cars 30% faster through targeted marketing and geolocation ads!", author: "John Doe - Sales Manager, Luxury Motors" },
    { text: "The geolocation-based ads brought in more qualified buyers and reduced our marketing costs.", author: "Jane Smith - Dealer, Premium Cars Inc." },
    { text: "We saw a significant increase in engagement thanks to Buraleh & Co's marketing strategy.", author: "David Lee - Owner, CarWorld" },
    { text: "Targeted marketing has significantly improved our conversion rates. Highly recommend!", author: "Lisa Martin - Sales Director, High End Motors" },
    { text: "Fantastic results with SEO-optimized ads. We've seen more traffic than ever before.", author: "James Johnson - Car Sales Rep, Elite Cars" },
    { text: "We trust Buraleh & Co for all our advertising needs. Our sales have doubled.", author: "Michael Brown - Sales Manager, Auto Dreams" },
    { text: "The ability to target potential buyers within a specific radius has been game-changing.", author: "Rachel Green - Owner, Auto Spot" },
    { text: "Their geolocation strategy works wonders! We’re reaching new customers every day.", author: "Will Turner - Marketing Head, Speedster Deals" },
    { text: "Great customer service and even better results! Buraleh & Co is the real deal.", author: "Samantha Gray - Owner, Luxury Auto" },
    { text: "With Buraleh & Co, we are able to engage highly targeted buyers, not just leads.", author: "Olivia Harris - Sales Rep, High-End Motors" },
    { text: "The results speak for themselves! Higher quality leads, more car sales.", author: "Charlie King - Sales Rep, Dream Motors" },
    { text: "We’ve been using Buraleh & Co's service for over a year, and it just keeps getting better.", author: "Evelyn Roberts - Marketing Manager, CarShop" },
    { text: "From ad creation to conversion, Buraleh & Co has streamlined everything. Very happy.", author: "Benjamin Lee - Car Salesman, Next Gen Autos" },
    { text: "With their SEO expertise, our car listings are getting more views than ever.", author: "George White - Sales Manager, Premier Cars" },
    { text: "We’ve cut down on ad spend significantly while increasing sales volume. Best decision ever!", author: "Amanda Young - Marketing Director, Auto Bazaar" }
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

// Common function to load dynamic data (testimonials or car makes)
function loadDynamicContent(data, containerClass, itemClass, contentFn) {
    const container = document.querySelector(containerClass);
    container.innerHTML = ''; // Clear existing content
    data.forEach(item => {
        const element = document.createElement('div');
        element.classList.add(itemClass);
        element.innerHTML = contentFn(item);
        container.appendChild(element);
    });
}

// Testimonials slide logic
let currentTestimonialIndex = 0;

function slideTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const totalTestimonials = testimonialsData.length;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    testimonialsSlider.style.transform = `translateX(-${currentTestimonialIndex * 320}px)`;
}

// Car makes slide logic
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    const totalCarMakes = carMakesData.length;
    currentCarMakeIndex = (currentCarMakeIndex + 1) % totalCarMakes;
    carMakesSlider.style.transition = 'transform 4s ease-in-out';
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * 170}px)`;
}

// Carousel intervals
let carouselIntervals = {
    testimonials: setInterval(slideTestimonials, 4000),
    carMakes: setInterval(slideCarMakes, 4000)
};

// Hover event listeners to pause and resume carousels
function addCarouselHoverListeners(containerClass, intervalType) {
    document.querySelector(containerClass).addEventListener('mouseover', () => {
        clearInterval(carouselIntervals[intervalType]);
    });
    document.querySelector(containerClass).addEventListener('mouseout', () => {
        carouselIntervals[intervalType] = setInterval(window[`${intervalType}Slider`], 4000);
    });
}

// Load initial dynamic content and set up carousels
window.onload = function () {
    loadDynamicContent(testimonialsData, '.testimonials-slider', 'testimonial', item => `
        <p>"${item.text}"</p>
        <h3>${item.author}</h3>
    `);
    loadDynamicContent(carMakesData, '.car-makes-slider', 'car-make-logo', item => `
        <img src="${item.logoUrl}" alt="Car Make">
    `);
    slideTestimonials();
    slideCarMakes();
    addCarouselHoverListeners('.testimonials-carousel-container', 'testimonials');
    addCarouselHoverListeners('.car-makes-carousel-container', 'carMakes');
};
// Car makes slide logic
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    const totalCarMakes = carMakesData.length;
    
    // Ensure carMakesSlider exists before applying styles
    if (!carMakesSlider) return;
    
    currentCarMakeIndex = (currentCarMakeIndex + 1) % totalCarMakes;
    
    // Set transition for smooth sliding
    carMakesSlider.style.transition = 'transform 4s ease-in-out';
    
    // Ensure the width used for translation matches the actual width of each car make element
    const carMakeWidth = 170; // Replace with the actual width of each item
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * carMakeWidth}px)`;
}
// Car makes slide logic
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    const totalCarMakes = carMakesData.length;
    
    // Ensure carMakesSlider exists before applying styles
    if (!carMakesSlider) return;
    
    currentCarMakeIndex = (currentCarMakeIndex + 1) % totalCarMakes;
    
    // Set transition for smooth sliding
    carMakesSlider.style.transition = 'transform 4s ease-in-out';
    
    // Ensure the width used for translation matches the actual width of each car make element
    const carMakeWidth = 170; // Replace with the actual width of each item
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * carMakeWidth}px)`;
}
