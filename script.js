// Load Dynamic Content function
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

// Testimonials Data
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

// Current Testimonial Index
let currentTestimonialIndex = 0;

// Slide Testimonials function
function slideTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (!testimonialsSlider) return;

    const totalTestimonials = testimonialsData.length;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    const itemWidth = document.querySelector('.testimonial')?.offsetWidth || 320; // Default to 320px
    testimonialsSlider.style.transform = `translateX(-${currentTestimonialIndex * itemWidth}px)`;
}

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    loadDynamicContent(testimonialsData, '.testimonials-slider', 'testimonial', item => `
        <p>"${item.text}"</p>
        <h3>${item.author}</h3>
    `);

    // Initialize the slider
    slideTestimonials();
    setInterval(slideTestimonials, 4000);
});
