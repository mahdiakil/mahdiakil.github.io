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
document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the default anchor behavior
    window.scrollTo(0, 0); // Scrolls to the top of the page
});
