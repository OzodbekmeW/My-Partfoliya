// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

function initializePortfolio() {
    // Initialize all components
    initCustomCursor();
    initNavigation();
    initTypingEffect();
    initCounterAnimation();
    initSkillTabs();
    initProjectFilter();
    initScrollAnimations();
    initFormHandler();
    initBackToTop();
    initParallaxShapes();
    initCertificateModal();
}


function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    
    if (!cursor || !follower) return;
    
    // Check if device supports hover (not touch)
    if (window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor animation
        function animateCursor() {
            // Cursor follows immediately
            cursorX += (mouseX - cursorX) * 1;
            cursorY += (mouseY - cursorY) * 1;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            // Follower has more delay
            followerX += (mouseX - followerX) * 0.3;
            followerY += (mouseY - followerY) * 0.3;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            });
        });
    }
}

function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for header
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}


   //Typing Effect

function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const roles = [
        'Python Software Developer',
        'Backend Engineer',
        'AI/ML Developer',
        'Data Engineer',
        'API Architect'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before typing new word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing
    setTimeout(type, 1000);
}

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function initSkillTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillsGrids = document.querySelectorAll('.skills-grid');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            // Update button states
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding grid
            skillsGrids.forEach(grid => {
                grid.classList.remove('active');
                if (grid.id === `${tab}-skills`) {
                    grid.classList.add('active');
                    // Animate skill bars
                    animateSkillBars(grid);
                }
            });
        });
    });
    
    // Animate first tab on load
    const firstActiveGrid = document.querySelector('.skills-grid.active');
    if (firstActiveGrid) {
        setTimeout(() => animateSkillBars(firstActiveGrid), 500);
    }
}

function animateSkillBars(container) {
    const progressBars = container.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-progress');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, index * 100);
    });
}


   //Project Filter

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update button states
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}


   //Scroll Animations

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}

   //Form Handler

function initFormHandler() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const submitBtn = form.querySelector('.btn-submit');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // validatsiya
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        
        if (!name || !email || !message) {
            showNotification('Iltimos, barcha maydonlarni to\'ldiring.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Iltimos, to\'g\'ri email kiriting.', 'error');
            return;
        }
        
        // yuborilayotganini ko'rsatish
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                // muvaffaqiyatli yuborildi
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('success');
                
                showNotification('Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.', 'success');
                form.reset();
                
                setTimeout(() => {
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error(data.message || 'Xatolik yuz berdi');
            }
            
        } catch (error) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            console.error('Error:', error);
            showNotification('Xatolik yuz berdi. Qaytadan urinib ko\'ring.', 'error');
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '!'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    const styles = `
        .notification {
            position: fixed;
            bottom: 24px;
            right: 24px;
            padding: 16px 24px;
            background: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        }
        .notification-success { border-color: rgba(0, 240, 255, 0.5); }
        .notification-error { border-color: rgba(255, 46, 151, 0.5); }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .notification-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
        }
        .notification-success .notification-icon {
            background: rgba(0, 240, 255, 0.2);
            color: #00f0ff;
        }
        .notification-error .notification-icon {
            background: rgba(255, 46, 151, 0.2);
            color: #ff2e97;
        }
        .notification-message {
            color: #ffffff;
            font-size: 0.9rem;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/* ===================
   Back to Top
=================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===================
   Parallax Shapes
=================== */
function initParallaxShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.pageYOffset;
                    
                    shapes.forEach((shape, index) => {
                        const speed = 0.1 + (index * 0.05);
                        const yPos = scrollY * speed;
                        shape.style.transform = `translateY(${yPos}px)`;
                    });
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
}


   //Smooth Scroll for Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Certificate Modal
function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalIssuer = document.getElementById('modalIssuer');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!modal) return;
    
    // sertifikat kartochkalariga bosilganda
    document.querySelectorAll('.certificate-view-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.certificate-card');
            const img = card.querySelector('.certificate-image');
            const title = card.querySelector('.certificate-title');
            const issuer = card.querySelector('.certificate-issuer');
            
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalTitle.textContent = title.textContent;
            modalIssuer.textContent = issuer.textContent;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // modalni yopish
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // ESC tugmasi bilan yopish
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}


   //Preloader (Optional)

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

/* ===================
   Console Easter Egg
=================== */
console.log('%c👋 Salom, Developer!', 'font-size: 24px; font-weight: bold; color: #00f0ff;');
console.log('%cBu portfolio Ozodbek tomonidan yaratilgan.', 'font-size: 14px; color: #b537f2;');
console.log('%c🚀 Hamkorlik uchun bog\'laning!', 'font-size: 14px; color: #ff2e97;');
