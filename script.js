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
    }, 1000)
})