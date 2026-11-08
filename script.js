
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Reveal sections while scrolling

const revealElements = document.querySelectorAll(
    '.about-section, .skills-section, .projects-section, .achievements-section, .contact-section'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});
