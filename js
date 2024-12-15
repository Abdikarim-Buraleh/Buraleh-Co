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

function loadTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    testimonialsSlider.innerHTML = '';
    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');
        testimonialElement.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h3>${testimonial.author}</h3>
        `;
        testimonialsSlider.appendChild(testimonialElement);
    });
}

let currentTestimonialIndex = 0;

function slideTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const totalTestimonials = testimonialsData.length;

    if (currentTestimonialIndex >= totalTestimonials) {
        currentTestimonialIndex = 0;
    }

    testimonialsSlider.style.transform = `translateX(-${currentTestimonialIndex * 320}px)`;
    currentTestimonialIndex++;
}

let carouselInterval = setInterval(slideTestimonials, 4000);

document.querySelector('.testimonials-carousel-container').addEventListener('mouseover', () => {
    clearInterval(carouselInterval);
});

document.querySelector('.testimonials-carousel-container').addEventListener('mouseout', () => {
    carouselInterval = setInterval(slideTestimonials, 4000);
});

window.onload = function() {
    loadTestimonials();
    slideTestimonials();
};
// Testimonial Data (Increased to 15 for continuous scrolling)
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
    { logoUrl: 'https://www.carlogos.org/car-logos/lincoln-logo.png' },
];

// Function to load dynamic car make logos
function loadCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    carMakesSlider.innerHTML = ''; // Clear existing logos
    carMakesData.forEach(carMake => {
        const carMakeElement = document.createElement('div');
        carMakeElement.classList.add('car-make-logo');
        carMakeElement.innerHTML = `
            <img src="${carMake.logoUrl}" alt="Car Make">
        `;
        carMakesSlider.appendChild(carMakeElement);
    });
}

// Carousel functionality (automatic sliding for car makes)
let currentCarMakeIndex = 0;

function slideCarMakes() {
    const carMakesSlider = document.querySelector('.car-makes-slider');
    const totalCarMakes = carMakesData.length;

    // Loop back to the start after reaching the last car make
    if (currentCarMakeIndex >= totalCarMakes) {
        currentCarMakeIndex = 0;
    }

    // Update the transform to "scroll" the car make logos to the left
    carMakesSlider.style.transition = 'transform 4s ease-in-out'; // Adding transition effect
    carMakesSlider.style.transform = `translateX(-${currentCarMakeIndex * 170}px)`; // Adjust the "170px" for the width of each logo

    // Move to the next car make logo
    currentCarMakeIndex++;
}

// Automatically slide the car make logos every 4 seconds
let carMakesInterval = setInterval(slideCarMakes, 4000);

// Pause sliding on hover
document.querySelector('.car-makes-carousel-container').addEventListener('mouseover', () => {
    clearInterval(carMakesInterval);
});

document.querySelector('.car-makes-carousel-container').addEventListener('mouseout', () => {
    carMakesInterval = setInterval(slideCarMakes, 4000);
});

// Load initial dynamic content for car makes
window.onload = function() {
    loadTestimonials(); // Load testimonials on page load
    loadCarMakes(); // Load car make logos
    slideTestimonials(); // Slide to the first testimonial
    slideCarMakes(); // Slide to the first car make logo
};

