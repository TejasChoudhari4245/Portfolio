// Form submission feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      alert('There was a problem sending your message. Please try again later.');
      console.error('Error:', error);
    });
  });
  // Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active service in dropdown
    const currentPage = window.location.pathname.split('/').pop();
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
    
    // If on a service page, highlight the Services dropdown
    if (currentPage === 'it-services.html' || currentPage === 'life-insurance.html') {
        document.querySelector('.nav-link.dropdown-toggle').classList.add('active');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Keep your existing form submission code
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      alert('There was a problem sending your message. Please try again later.');
      console.error('Error:', error);
    });
  });
}
}


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(20, 20, 20, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .card, .contact-option, .tech-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.project-card, .card, .contact-option, .tech-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }

    // Form validation and animation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            [name, email, message].forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff4444';
                    isValid = false;
                    
                    // Shake animation
                    field.style.animation = 'shake 0.5s ease';
                    setTimeout(() => {
                        field.style.animation = '';
                    }, 500);
                } else {
                    field.style.borderColor = '#00ff88';
                }
            });
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value && !emailRegex.test(email.value)) {
                email.style.borderColor = '#ff4444';
                email.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    email.style.animation = '';
                }, 500);
                isValid = false;
            }
            
            if (isValid) {
                // Success animation
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.textContent = '✓ Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.submit();
                }, 1500);
            }
        });
        
        // Remove red border on input
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.style.borderColor = '';
                this.style.animation = '';
            });
        });
    }

    // Add shake animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            hero.style.transform = `perspective(1000px) rotateY(${mouseX * 2}deg) rotateX(${mouseY * -2}deg)`;
        });
        
        hero.addEventListener('mouseleave', function() {
            hero.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    }

    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Add cursor trail styles
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .cursor-trail {
            width: 10px;
            height: 10px;
            background: linear-gradient(135deg, #ff7f11, #00d4ff);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            transition: transform 0.1s;
            box-shadow: 0 0 20px #ff7f11;
        }
    `;
    document.head.appendChild(cursorStyle);

    // Image lazy loading with blur effect
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Preloader fade out
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Add preloader if not exists
    if (!document.querySelector('.preloader')) {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="loader"></div>
        `;
        document.body.appendChild(preloader);
        
        const preloaderStyle = document.createElement('style');
        preloaderStyle.textContent = `
            .preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--primary-bg);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 99999;
                transition: opacity 0.5s ease;
            }
            
            .loader {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255, 127, 17, 0.3);
                border-top-color: var(--primary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(preloaderStyle);
    }

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add particle effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = 10 + Math.random() * 10 + 's';
            heroSection.appendChild(particle);
        }
        
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            .particle {
                position: absolute;
                width: 2px;
                height: 2px;
                background: linear-gradient(135deg, #ff7f11, #00d4ff);
                border-radius: 50%;
                pointer-events: none;
                animation: floatParticle linear infinite;
            }
            
            @keyframes floatParticle {
                from {
                    transform: translateY(100vh) rotate(0deg);
                }
                to {
                    transform: translateY(-100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(particleStyle);
    }
});