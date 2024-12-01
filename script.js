// Description: This is the main script file for the website
window.addEventListener('DOMContentLoaded', () => {
    // VANTA.HALO({
    //   el: "#vanta",
    //   mouseControls: false,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   amplitudeFactor: 5.10,
    //   yOffset: 0.29,
    //   size: 0.30
    // })
    setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1
        main.style.filter = 'blur(0px)'
    }, 600)

    // Add this to your existing script.js
    function updateFavicon() {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const favicon = document.querySelector('link[rel="icon"]');

        if (isDarkMode) {
            favicon.href = './images/link2-dark.png';
        } else {
            favicon.href = './images/link2.png';
        }
    }

    // Update favicon when theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

    // Initial favicon update
    updateFavicon();
})