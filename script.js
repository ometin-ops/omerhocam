document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Logic
    const header = document.getElementById('header');

    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Initial check on load
    checkScroll();

    // Listen to scroll events
    window.addEventListener('scroll', checkScroll);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navList = document.getElementById('nav-list');

    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    });

    // 3. Accordion Logic for SSS (FAQ)
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');

            // If there's an active item and it's not the one clicked, close it
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
            }

            // Toggle the clicked item
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 4. Scroll Animation fade-in detection
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 5. Counter Animation Logic
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const startCounters = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        startCounters.observe(counter);
    });

    // 6. Testimonials Carousel & Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const track = document.getElementById('testimonials-track');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    const dotsContainer = document.getElementById('carousel-dots');

    let currentIndex = 0;

    if (track) {
        let visibleCards = Array.from(testimonialCards);
        let cardsPerPage = getCardsPerPage();

        function getCardsPerPage() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 992) return 2;
            return 3; // Desktop
        }

        function updateCarousel() {
            cardsPerPage = getCardsPerPage();
            const totalCards = visibleCards.length;
            const maxIndex = Math.max(0, totalCards - cardsPerPage);

            // Ensure currentIndex is within bounds
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            // Calculate slide distance
            if (visibleCards.length > 0) {
                // Get the width of the first visible card + gap (32px)
                const cardWidth = visibleCards[0].offsetWidth;
                const gap = 32;
                const moveX = currentIndex * (cardWidth + gap);
                track.style.transform = `translateX(-${moveX}px)`;
            } else {
                track.style.transform = `translateX(0px)`;
            }

            // Update Dots
            const totalDots = Math.max(0, totalCards - cardsPerPage + 1);
            dotsContainer.innerHTML = '';

            if (totalCards > cardsPerPage) {
                for (let i = 0; i < totalDots; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === currentIndex) dot.classList.add('active');
                    dot.addEventListener('click', () => {
                        currentIndex = i;
                        updateCarousel();
                    });
                    dotsContainer.appendChild(dot);
                }
            }

            // Update Arrow states
            if (prevBtn && nextBtn) {
                prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
                prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";

                nextBtn.style.opacity = currentIndex >= maxIndex || maxIndex === 0 ? "0.3" : "1";
                nextBtn.style.pointerEvents = currentIndex >= maxIndex || maxIndex === 0 ? "none" : "auto";
            }
        }

        // Arrow Event Listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const maxIndex = Math.max(0, visibleCards.length - cardsPerPage);
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }

        // Listen to resize to recalculate widths
        window.addEventListener('resize', () => {
            updateCarousel();
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                visibleCards = [];
                testimonialCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.classList.remove('hide');
                        visibleCards.push(card);
                    } else if (card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hide');
                        visibleCards.push(card);
                    } else {
                        card.classList.add('hide');
                    }
                });

                currentIndex = 0; // Reset parameter

                // Allow DOM to update display:none, then recalculate
                setTimeout(updateCarousel, 50);
            });
        });

        // Initial setup
        setTimeout(updateCarousel, 100);
    }
});
