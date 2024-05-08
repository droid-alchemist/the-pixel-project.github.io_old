document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bodyContent = document.querySelector('.body-content');

    // Function to toggle the small view sliding navbar
    function toggleNavbar() {
        if (navLinks.style.right === "0px") {
            closeNavbar();
            bodyContent.style.transition = 'transform 0.3s ease';
            bodyContent.style.transform = 'translateX(0)';
        } else {
            openNavbar();
            bodyContent.style.transition = 'transform 0.3s ease';
            bodyContent.style.transform = 'translateX(250px)'; // Adjust the value as needed
        }
    }

    // Toggle the small view sliding navbar when the menu toggle button is clicked
    menuToggle.addEventListener('click', () => {
        toggleNavbar();
    });

    // Close the small view sliding navbar when anywhere on the document is clicked outside of it
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!navLinks.contains(target) && !menuToggle.contains(target)) {
            closeNavbar();
            bodyContent.style.transition = 'transform 0.3s ease';
            bodyContent.style.transform = 'translateX(0)';
        }
    });

    // Function to open the small view sliding navbar
    function openNavbar() {
        navLinks.style.right = "0px";
        // Toggle the 'menu-open' class on the menu toggle button
        menuToggle.classList.add('menu-open');
    }

    // Function to close the small view sliding navbar
    function closeNavbar() {
        navLinks.style.right = "-300px";
        // Toggle the 'menu-open' class on the menu toggle button
        menuToggle.classList.remove('menu-open');
    }

    // Update current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Add a small offset (e.g., 3 pixels) to ensure separation
    const offset = 3;

    navLinks.style.top = (navbarHeight + offset) + 'px';
});
