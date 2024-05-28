// Function to initialize animations
function initAnimations() {
    // Initialize GSAP animations or CSS animations here
    setupSurfingAnimation();
}

// Function to setup surfing animation
function setupSurfingAnimation() {
    // Get the surf animation element
    const surfAnimationElement = document.getElementById('surf-animation');

    // Check if GSAP is available
    if (typeof gsap !== 'undefined') {
        // Use GSAP for animation
        gsap.to(surfAnimationElement, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    } else {
        // Fallback to CSS animations if GSAP is not available
        surfAnimationElement.style.animation = 'wave 2s infinite alternate ease-in-out';
    }
}

// Function to update the surfing animation based on wave height
function updateSurfingAnimation(waveHeight) {
    // Get the surf animation element
    const surfAnimationElement = document.getElementById('surf-animation');

    // Adjust the animation speed based on the wave height
    const animationSpeed = 1 + (waveHeight / 10);
    if (typeof gsap !== 'undefined') {
        // Update GSAP animation duration
        gsap.to(surfAnimationElement, { duration: animationSpeed });
    } else {
        // Update CSS animation duration
        surfAnimationElement.style.animationDuration = `${animationSpeed}s`;
    }
}

// Call the initAnimations function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAnimations);
