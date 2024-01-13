document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
});
