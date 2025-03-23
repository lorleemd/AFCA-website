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

// Attach the click event listener to the close button
const closeButton = document.querySelector('.close-btn');
if (closeButton) {
    closeButton.addEventListener('click', closeBanner);
}