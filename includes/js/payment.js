// Function to close the banner
function closeBanner(event) {
    // Stop the event from propagating to the parent element
    //event.stopPropagation();

    // Get the banner element
    const banner = document.querySelector('.payment-banner');
    // Add the 'close' class to trigger fade-out animation
    banner.onclick = null;
    
    banner.classList.add('closeout');
    
    // Hide the banner completely after the animation delay
    setTimeout(() => {
        banner.style.display = 'none';
    }, 500);
}

// Function to close the banner
function closeSteloBanner(event) {
    // Stop the event from propagating to the parent element
    //event.stopPropagation();

    // Get the banner element
    const banner = document.querySelector('.stelo-banner');
    // Add the 'close' class to trigger fade-out animation
    banner.onclick = null;
    
    banner.classList.add('closeout');
    
    // Hide the banner completely after the animation delay
    setTimeout(() => {
        banner.style.display = 'none';

        
        const payBanner = document.querySelector('.payment-banner');
        // Check if the stelo banner is visible
        if (payBanner && payBanner.style.display!== 'none') {
            // Reposition the stelo banner
            payBanner.style.bottom = '20px'; // Update the bottom property to 20px
        }
    }, 500);
}

// Attach the click event listener to the close button
const closeButton = document.querySelector('.close-btn');
if (closeButton) {
    closeButton.addEventListener('click', closeBanner);
}
const closeSteloButton = document.querySelector('.close-stelo-btn');
if (closeSteloButton) {
    closeSteloButton.addEventListener('click', closeSteloBanner);
}