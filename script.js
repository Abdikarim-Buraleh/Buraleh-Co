// Testimonial Data (Updated to reflect car makes sold)
const testimonialsData = [
    { text: "Buraleh & Co helped us sell Tesla cars 30% faster through targeted marketing and geolocation ads in Toronto!", author: "Chris Williams - Sales Manager, Dilawri Group of Companies", carMake: "Tesla" },
    { text: "The geolocation-based ads brought in more qualified buyers for Ford and reduced our marketing costs in Toronto.", author: "Jessica Taylor - Dealer, Go Auto", carMake: "Ford" },
    { text: "We saw a significant increase in engagement for BMW thanks to Buraleh & Co's marketing strategy in Vancouver.", author: "David Carter - Owner, Porsche Centre Vancouver", carMake: "BMW" },
    { text: "Targeted marketing has significantly improved our conversion rates for Honda cars in Toronto. Highly recommend!", author: "Olivia Harris - Sales Director, Toronto Honda", carMake: "Honda" },
    { text: "Fantastic results with SEO-optimized ads. We've seen more traffic than ever before for Toyota in Vancouver.", author: "Matthew Robinson - Car Sales Rep, Vancouver BMW", carMake: "Toyota" },
    { text: "We trust Buraleh & Co for all our advertising needs. Our sales for Mercedes-Benz have doubled in Los Angeles.", author: "Michael Thompson - Sales Manager, Highlander Toyota", carMake: "Mercedes-Benz" },
    { text: "The ability to target potential buyers for Land Rover within a specific radius has been game-changing in Vancouver.", author: "Rachel Peterson - Owner, St. John's Ford", carMake: "Land Rover" },
    { text: "Their geolocation strategy works wonders! We’re reaching new customers for Chevrolet every day in Toronto.", author: "Will Turner - Marketing Head, AutoCanada", carMake: "Chevrolet" },
    { text: "Great customer service and even better results! Buraleh & Co is the real deal for Audi in Toronto.", author: "Samantha Brooks - Owner, Calgary's Crowfoot Ford", carMake: "Audi" },
    { text: "With Buraleh & Co, we are able to engage highly targeted buyers for Jeep, not just leads in Vancouver.", author: "Emily Jenkins - Sales Rep, Windsor Mazda", carMake: "Jeep" },
    { text: "The results speak for themselves! Higher quality leads, more car sales for Lincoln in New York.", author: "Charlie King - Sales Rep, Sherwood Park Toyota", carMake: "Lincoln" },
    { text: "We’ve been using Buraleh & Co's service for over a year, and it just keeps getting better for Volkswagen in Miami.", author: "Evelyn Martinez - Marketing Manager, Edmonton Mitsubishi", carMake: "Volkswagen" },
    { text: "From ad creation to conversion, Buraleh & Co has streamlined everything. Very happy selling Infiniti cars in New York.", author: "Ben Lewis - Car Salesman, Montreal Kia", carMake: "Infiniti" },
    { text: "With their SEO expertise, our car listings for Jaguar are getting more views than ever in Miami.", author: "George Evans - Sales Manager, Mississauga Chrysler", carMake: "Jaguar" },
    { text: "We’ve cut down on ad spend significantly while increasing sales volume for Toyota in Los Angeles. Best decision ever!", author: "Amanda Scott - Marketing Director, Markham Toyota", carMake: "Toyota" }
];

// Car Makes Data (log URLs for 15 car makes)
const carMakesData = [
    { logoUrl: 'https://www.carlogos.org/car-logos/tesla-logo-2007.png', name: 'Tesla' },
    { logoUrl: 'https://www.carlogos.org/car-logos/ford-logo.png', name: 'Ford' },
    { logoUrl: 'https://www.carlogos.org/car-logos/chevrolet-logo.png', name: 'Chevrolet' },
    { logoUrl: 'https://www.carlogos.org/car-logos/honda-logo.png', name: 'Honda' },
    { logoUrl: 'https://www.carlogos.org/car-logos/toyota-logo.png', name: 'Toyota' },
    { logoUrl: 'https://www.carlogos.org/car-logos/infiniti-logo.png', name: 'Infiniti' },
    { logoUrl: 'https://www.carlogos.org/car-logos/bmw-logo.png', name: 'BMW' },
    { logoUrl: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png', name: 'Mercedes-Benz' },
    { logoUrl: 'https://www.carlogos.org/car-logos/land-rover-logo.png', name: 'Land Rover' },
    { logoUrl: 'https://www.carlogos.org/car-logos/jaguar-logo.png', name: 'Jaguar' },
    { logoUrl: 'https://www.carlogos.org/car-logos/audi-logo.png', name: 'Audi' },
    { logoUrl: 'https://www.carlogos.org/car-logos/volkswagen-logo.png', name: 'Volkswagen' },
    { logoUrl: 'https://www.carlogos.org/car-logos/jeep-logo.png', name: 'Jeep' },
    { logoUrl: 'https://www.carlogos.org/car-logos/lincoln-logo.png', name: 'Lincoln' }
];

// Function to populate car makes in the section
function populateCarMakes() {
    const slider = document.getElementById('carMakesSlider');

    carMakesData.forEach(carMake => {
        // Create the car make container
        const carMakeDiv = document.createElement('div');
        carMakeDiv.classList.add('car-make');
        
        // Create the logo image element
        const imgElement = document.createElement('img');
        imgElement.src = carMake.logoUrl;
        imgElement.alt = carMake.name;

        // Create the title element
        const titleElement = document.createElement('h3');
        titleElement.textContent = carMake.name;

        // Append the image and title to the car make container
        carMakeDiv.appendChild(imgElement);
        carMakeDiv.appendChild(titleElement);

        // Append the car make to the slider
        slider.appendChild(carMakeDiv);
    });
}

// Function to load dynamic content (testimonials, car makes, or cities)
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
        <small>Car Make: ${item.carMake}</small>
    `);
    loadDynamicContent(carMakesData, '.car-makes-slider', 'car-make-logo', item => `
        <img src="${item.logoUrl}" alt="Car Make">
    `);

    // Initialize the other sliders
    slideTestimonials();
    slideCarMakes();

    // Add hover listeners for testimonials and car makes
    addCarouselHoverListeners('.testimonials-carousel-container', 'testimonials');
    addCarouselHoverListeners('.car-makes-carousel-container', 'carMakes');
});
