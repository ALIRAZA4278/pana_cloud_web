const navLinks = document.querySelectorAll('#Navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});


