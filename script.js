// Simple slideshow for hero images
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000); // every 4 seconds

// Fade-in on scroll for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Optional: Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {  // check if form exists on page
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Music items hover effect
const musicItems = document.querySelectorAll('.music-item');

musicItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// YouTube carousel arrows functionality
const carousel = document.querySelector('.youtube-carousel');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

const scrollAmount = 300; // pixels to scroll on each arrow click

if (leftArrow && rightArrow && carousel) {
  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Pause autoplay animation on hover if you have one (optional)
  carousel.addEventListener('mouseenter', () => carousel.style.animationPlayState = 'paused');
  carousel.addEventListener('mouseleave', () => carousel.style.animationPlayState = 'running');
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}
