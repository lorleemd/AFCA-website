window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth;
    const menuIcon = document.querySelector('.fusion-icon-bars');
    const mobileMenu = document.getElementById('mobile-menu-afc');
    const parentNav = mobileMenu.closest('.fusion-mobile-menu-text-align-left');
    const submenuButtons = document.querySelectorAll('.fusion-open-submenu');

    if (screenWidth >= 800) {
        menuIcon.setAttribute('aria-expanded', 'false');
        mobileMenu.style.display = 'none';
        parentNav.style.display = 'none';
        parentNav.setAttribute('aria-expanded', 'false');

        submenuButtons.forEach(button => {
            button.setAttribute('aria-expanded', 'false');
            const submenu = button.nextElementSibling;
            submenu.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.fusion-icon-bars');
    const mobileMenu = document.getElementById('mobile-menu-afc');
    
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor action
            const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
            
            const parentNav = mobileMenu.closest('.fusion-mobile-menu-text-align-left');

            // Toggle the menu
            menuIcon.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.style.display = isExpanded ? 'none' : 'contents';
            parentNav.setAttribute('aria-expanded', !isExpanded);
            parentNav.style.display = isExpanded ? 'none' : 'block';
        });
    } else {
        console.error('Menu icon or mobile menu not found in the DOM.');
    }

    const submenuButtons = document.querySelectorAll('.fusion-open-submenu');
    
    submenuButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor action
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Get the nearest submenu
            const submenu = button.nextElementSibling;
            
            // Toggle the submenu
            button.setAttribute('aria-expanded',!isExpanded);
            submenu.style.display = isExpanded ? 'none' : 'block';
        });
    });
});