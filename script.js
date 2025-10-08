// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.vision, .category, .why-love, .curate, footer');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hero Typing Animation
const heroText = document.querySelector('.hero-text h1');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // speed
  }
}
window.addEventListener('load', typeWriter);

// Button Pulse Animation on Click
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 500);
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animate headings when visible
const headings = document.querySelectorAll('h2, .hero-text h1');
const animateHeadings = () => {
  headings.forEach(h => {
    const rect = h.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      h.classList.add('active');
    }
  });
};
window.addEventListener('scroll', animateHeadings);
window.addEventListener('load', animateHeadings);


// Close Floating Box
function closeBox() {
  document.getElementById("floatingBox").style.display = "none";
}
