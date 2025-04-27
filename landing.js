// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const header = document.querySelector('header');
const loginBtn = document.getElementById('login-btn');
const mobileLoginBtn = document.getElementById('mobile-login-btn');
const registerBtn = document.getElementById('register-btn');
const ctaRegisterBtn = document.getElementById('cta-register-btn');
const ctaLoginBtn = document.getElementById('cta-login-btn');
const demoBtn = document.getElementById('demo-btn');
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modal-close');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const faqItems = document.querySelectorAll('.faq-item');
const tryBtn = document.querySelector('.try-btn');

// Theme Toggle
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Animated Code Particles
function createCodeParticles() {
    const container = document.querySelector('.code-particles');
    const symbols = ['<>', '{}', '()', '//', '/*', '*/', '=>', '+=', '==', '===', '!=', '!==', '&&', '||'];
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('span');
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        particle.textContent = symbol;
        particle.style.position = 'absolute';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.fontSize = `${Math.random() * 16 + 10}px`;
        particle.style.color = 'var(--text-color-light)';
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        particle.style.transition = 'opacity 0.5s ease';
        
        container.appendChild(particle);
        
        // Animate particles
        setInterval(() => {
            particle.style.opacity = Math.random() * 0.3 + 0.1;
        }, Math.random() * 5000 + 2000);
    }
}

// Create world map dots
function createMapDots() {
    const container = document.querySelector('.map-dots');
    
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        
        dot.style.position = 'absolute';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.width = `${Math.random() * 10 + 5}px`;
        dot.style.height = dot.style.width;
        dot.style.borderRadius = '50%';
        dot.style.background = 'var(--primary-color)';
        dot.style.opacity = Math.random() * 0.7 + 0.3;
        dot.style.transform = 'scale(0)';
        dot.style.transition = 'transform 0.5s ease';
        
        container.appendChild(dot);
        
        // Animate dots appearance
        setTimeout(() => {
            dot.style.transform = 'scale(1)';
        }, Math.random() * 2000);
        
        // Pulse animation
        setInterval(() => {
            dot.style.transform = 'scale(1.5)';
            dot.style.opacity = '1';
            
            setTimeout(() => {
                dot.style.transform = 'scale(1)';
                dot.style.opacity = Math.random() * 0.7 + 0.3;
            }, 500);
        }, Math.random() * 5000 + 3000);
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Video Modal
function openVideoModal() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set video src (in a real implementation, you would use an actual video URL)
    const iframe = videoModal.querySelector('iframe');
    iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your actual demo video
}

function closeVideoModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset video src to stop playback
    const iframe = videoModal.querySelector('iframe');
    iframe.src = "";
}

demoBtn.addEventListener('click', openVideoModal);
modalClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // Update active tab button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show active tab content
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(`${tab}-tab`).classList.add('active');
    });
});

// FAQ Accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.testimonial-dots .dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    testimonialCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide and activate dot
    testimonialCards[index].style.display = 'block';
    dots[index].classList.add('active');
}

// Initialize slider
showSlide(currentSlide);

// Next slide
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
});

// Previous slide
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentSlide);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide (optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}, 8000);

// Interactive Demo
tryBtn.addEventListener('click', () => {
    alert('In a real implementation, this would open an interactive demo of the platform.');
});

// Auth Redirects
function redirectToAuth(tab) {
    window.location.href = `auth.html?tab=${tab}`;
}

if (loginBtn) loginBtn.addEventListener('click', () => redirectToAuth('login'));
if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', () => redirectToAuth('login'));
if (registerBtn) registerBtn.addEventListener('click', () => redirectToAuth('register'));
if (ctaRegisterBtn) ctaRegisterBtn.addEventListener('click', () => redirectToAuth('register'));
if (ctaLoginBtn) ctaLoginBtn.addEventListener('click', () => redirectToAuth('login'));

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createCodeParticles();
    
    // Create map dots
    createMapDots();
    
    // Fade in the page
    document.body.classList.add('loaded');
    
    // Check URL parameters for direct auth redirects
    const urlParams = new URLSearchParams(window.location.search);
    const authRedirect = urlParams.get('auth');
    
    if (authRedirect === 'login') {
        redirectToAuth('login');
    } else if (authRedirect === 'register') {
        redirectToAuth('register');
    }
});
