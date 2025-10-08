document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked (for better UX on mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Form submission handling (basic example)
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple validation (already required in HTML)
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const company = form.company.value.trim();

        if (!name || !email || !company) {
            alert('Please fill in all required fields.');
            return;
        }

        // Here you would typically send data to a server
        alert('Thank you for registering, ' + name + '! We will get in touch soon.');

        form.reset();
    });

    // Services Carousel functionality
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;
    const totalImages = 12;
    let itemsPerView;
    let imageWidth;

    function updateSizes() {
        itemsPerView = window.innerWidth < 768 ? 1 : 3;
        imageWidth = carouselContainer.offsetWidth / itemsPerView;
        carousel.style.width = `${totalImages * imageWidth}px`;
        const images = carousel.querySelectorAll('img');
        images.forEach(img => img.style.width = `${imageWidth}px`);
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Initial setup
    updateSizes();

    window.addEventListener('resize', updateSizes);

    // Auto-scroll every 3 seconds, moving 1 image at a time, with 2-second initial delay
    setTimeout(() => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }, 3000);
    }, 2000);

    // Header hide/show on scroll for mobile
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                header.classList.add('hidden');
            } else {
                // Scrolling up
                header.classList.remove('hidden');
            }
        } else {
            // On desktop, ensure header is always visible
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});

