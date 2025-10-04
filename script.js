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
});
