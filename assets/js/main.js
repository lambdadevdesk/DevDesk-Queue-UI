// Grab the hamburger icon
let hamburger = document.querySelector('header i');

// Get header nav
let headerNav = document.querySelector('header nav');


hamburger.addEventListener('click', function(e) {
    headerNav.classList.toggle('hidden');
    headerNav.classList.toggle('visible');
});