// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Select elements
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');

// Open side nav
menuToggle.addEventListener('click', () => {
    sideNav.style.width = '250px'; // set width to open
});

// Close side nav
closeBtn.addEventListener('click', () => {
    sideNav.style.width = '0';
});

// Optional: close nav when clicking a link
sideNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        sideNav.style.width = '0';
    });
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Simple contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});
