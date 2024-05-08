document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bodyContent = document.querySelector('.content'); // Update selector to target the body content

    // Function to toggle the small view sliding navbar and push body content
    function toggleNavbar() {
        if (navLinks.style.left === "0px" || navLinks.style.left === "") {
            closeNavbar();
            bodyContent.style.transition = 'transform 0.3s ease';
            bodyContent.style.transform = 'translateX(0)';
        } else {
            openNavbar();
            bodyContent.style.transition = 'transform 0.3s ease';
            bodyContent.style.transform = 'translateX(250px)'; // Adjust the value as needed to match the width of the navbar
        }
    }

    // Toggle the small view sliding navbar and push body content when the menu toggle button is clicked
    menuToggle.addEventListener('click', () => {
        toggleNavbar();
    });

    // Close the small view sliding navbar and reset body content position when anywhere on the document is clicked outside of it
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
    navLinks.style.left = "0"; // Set left to 0 to slide in from the left side
    // Toggle the 'menu-open' class on the menu toggle button
    menuToggle.classList.add('menu-open');
    
    console.log("Body content before:", bodyContent.style.marginLeft); // Check the current marginLeft value
    
    // Push body content to the right by the width of the navbar
    bodyContent.style.marginLeft = '250px'; // Adjust the value as needed to match the width of the navbar
    
    console.log("Body content after:", bodyContent.style.marginLeft); // Check the new marginLeft value
}
    // Function to close the small view sliding navbar
    function closeNavbar() {
        navLinks.style.left = "-100%"; // Hide navbar completely
        // Toggle the 'menu-open' class on the menu toggle button
        menuToggle.classList.remove('menu-open');
        // Reset body content position
        bodyContent.style.marginLeft = '0';
    }

    // Update current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Add a small offset (e.g., 3 pixels) to ensure separation
    const offset = 0;

    navLinks.style.top = (navbarHeight + offset) + 'px';
});
