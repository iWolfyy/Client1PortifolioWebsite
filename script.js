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
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});

const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.position = 'relative';
    let underline = document.createElement('span');
    underline.classList.add('underline');
    link.appendChild(underline);
    setTimeout(() => {
      underline.style.width = '100%';
    }, 10);
  });

  link.addEventListener('mouseleave', () => {
    const underline = link.querySelector('.underline');
    if (underline) {
      underline.style.width = '0';
      setTimeout(() => underline.remove(), 300);
    }
  });
});


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


let carousel = document.querySelector('.youtube-carousel');
let playing = false;

function checkIfPlaying() {
  const iframes = carousel.querySelectorAll("iframe");
  for (const iframe of iframes) {
    // This won't detect playback reliably due to cross-origin, so we simulate:
    // You can only truly detect YT playing using the YouTube Player API
  }
  if (!playing) {
    carousel.style.animationPlayState = 'running';
  } else {
    carousel.style.animationPlayState = 'paused';
  }
}

// Basic autoplay
carousel.addEventListener('mouseenter', () => carousel.style.animationPlayState = 'paused');
carousel.addEventListener('mouseleave', () => carousel.style.animationPlayState = 'running');



//packages
