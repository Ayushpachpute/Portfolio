// Mobile Menu Toggle - Robust Implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up mobile menu');
    
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    
    console.log('Menu elements found:', {
        menuIcon: !!menuIcon,
        navbar: !!navbar,
        menuBtn: !!menuBtn
    });
    
    if (menuIcon && navbar) {
        // Menu click handler
        menuIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu icon clicked');
            
            // Toggle classes
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('open');
            
            console.log('Classes toggled:', {
                'bx-x': menuIcon.classList.contains('bx-x'),
                'open': navbar.classList.contains('open')
            });
        });
        
        // Close menu when clicking on navigation links
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Nav link clicked, closing menu');
                navbar.classList.remove('open');
                menuIcon.classList.remove('bx-x');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navbar.classList.contains('open') && 
                !navbar.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                console.log('Clicked outside, closing menu');
                navbar.classList.remove('open');
                menuIcon.classList.remove('bx-x');
            }
        });
        
        // Also handle menu button click (backup)
        if (menuBtn) {
            menuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Menu button clicked');
                menuIcon.click();
            });
        }
    } else {
        console.error('Menu elements not found');
    }
});

// ScrollReveal Animations
const sr = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: true,
});

sr.reveal('.logo', {delay: 200, origin: 'left'});
sr.reveal('.home-text span', {delay: 300, origin: 'top'});
sr.reveal('.home-text h1', {delay: 400, origin: 'left'});
sr.reveal('.home-text p', {delay: 500, origin: 'right'});
sr.reveal('.main-btn', {delay: 600, origin: 'bottom'});
sr.reveal('.home-img', {delay: 700, origin: 'right'});