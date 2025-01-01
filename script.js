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
    { text: "Buraleh & Co’s geolocation strategy helped me reach local patients in Vancouver, and I saw a significant boost in new appointments.", author: "Dr. Rachel Peterson - Dentist, Vancouver" },
    { text: "I filled my dental office schedule within a week of using Buraleh & Co’s service in Montreal. The leads were perfect and right on target.", author: "Dr. Charlie King - Dentist, Montreal" },
    { text: "Buraleh & Co’s geolocation ads brought more patients to my dental practice in Ottawa, increasing inquiries and appointments quickly.", author: "Dr. Sarah Anderson - Dentist, Ottawa" },
    { text: "I saw a noticeable increase in patient traffic to my clinic in Calgary thanks to their tailored marketing strategies.", author: "Dr. Brian Walker - Dentist, Calgary" },
    { text: "Buraleh & Co's targeted ads helped my dental office in Edmonton attract exactly the patients we needed.", author: "Dr. Lauren Turner - Dentist, Edmonton" },
    { text: "With Buraleh & Co, my dental practice in Calgary saw remarkable growth in just a short time.", author: "Dr. Mark Wilson - Dentist, Calgary" },
    { text: "Buraleh & Co’s SEO and geolocation strategies boosted my dental practice's visibility in Edmonton, leading to more appointments.", author: "Dr. Susan Davis - Dentist, Edmonton" },
    { text: "Thanks to Buraleh & Co, my dental practice in Vancouver experienced a steady influx of new patients.", author: "Dr. Emily Jenkins - Dentist, Vancouver" }
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
