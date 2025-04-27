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
    mobileMenu.
