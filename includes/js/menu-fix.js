document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.fusion-icon-bars');
    const mobileMenu = document.getElementById('mobile-menu-afc');
    
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor action
            const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
            
            // Toggle the menu
            menuIcon.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.style.display = isExpanded ? 'none' : 'block';
        });
    } else {
        console.error('Menu icon or mobile menu not found in the DOM.');
    }
});