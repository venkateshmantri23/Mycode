/* ===================================
   JAVASCRIPT FOR PORTFOLIO
   =================================== */

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SCROLL-TO-TOP BUTTON
// ===================================

const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================

function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

highlightActiveLink();

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and content items for animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        '.project-card, .education-card, .certification-card, .skill-category, .timeline-content'
    );
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission (in production, you would send this to a backend)
        try {
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-button');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call with 1 second delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Log form data (in production, send to your backend)
            console.log('Form Data:', { name, email, subject, message });

            // Show success message
            showFormMessage('Message sent successfully! I will get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Restore button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('success');
            }, 5000);

        } catch (error) {
            showFormMessage('An error occurred. Please try again.', 'error');
            const submitBtn = contactForm.querySelector('.submit-button');
            submitBtn.disabled = false;
        }
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to display form message
function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
}

// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = 'var(--shadow-lg)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
        navbar.style.background = 'var(--bg-white)';
    }
});

// ===================================
// SKILL TAGS ANIMATION
// ===================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    // Add staggered animation delay
    tag.style.animationDelay = `${index * 0.05}s`;
    tag.style.opacity = '0';
    tag.style.animation = 'fadeInUp 0.6s ease forwards';
});

// ===================================
// PROJECT FILTER (OPTIONAL ENHANCEMENT)
// ===================================

// You can add project filtering functionality here
// For example, filtering by technology used

// ===================================
// STATS COUNTER ANIMATION
// ===================================

function animateCounters() {
    // This function can be used to animate any numeric counters
    // Example: years of experience, projects completed, etc.
    // Uncomment and use as needed
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// ===================================
// DARK MODE TOGGLE (OPTIONAL)
// ===================================

// Uncomment the following code to enable dark mode toggle functionality
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.title = 'Toggle Dark Mode';
document.body.appendChild(darkModeToggle);

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
});
*/

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%cWelcome to My Portfolio!', 'font-size: 20px; color: #0066cc; font-weight: bold;');
console.log('%cFeel free to explore my projects and get in touch!', 'font-size: 14px; color: #00d4ff;');
console.log('%cGitHub: https://github.com', 'font-size: 12px; color: #666;');
console.log('%cLinkedIn: https://linkedin.com', 'font-size: 12px; color: #666;');

// ===================================
// PAGE LOAD PERFORMANCE
// ===================================

window.addEventListener('load', () => {
    console.log('Page loaded in', window.performance.timing.loadEventEnd - window.performance.timing.navigationStart, 'ms');
});

// ===================================
// UTILITY FUNCTION: THROTTLE
// ===================================

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===================================
// UTILITY FUNCTION: DEBOUNCE
// ===================================

function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

// ===================================
// COPY TO CLIPBOARD FUNCTION
// ===================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
    // Add any initialization code here
    // For example, loading animations, data fetching, etc.
});
