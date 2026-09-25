document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '90px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    sr.reveal('.text', { delay: 200, origin: 'top' });
    sr.reveal('.header-btn', { delay: 300, origin: 'right' });
    sr.reveal('.Home', { delay: 400, origin: 'bottom' });
    sr.reveal('.links img', { delay: 500, origin: 'left', interval: 200 });
    sr.reveal('.form-container', { delay: 600, origin: 'right' });
    sr.reveal('.service', { delay: 700, origin: 'top' });
    sr.reveal('.box', { delay: 800, origin: 'bottom', interval: 300 });
    sr.reveal('.boxes', { delay: 800, origin: 'bottom', interval: 300 });
    sr.reveal('.about', { delay: 800, origin: 'bottom', interval: 300 });
    sr.reveal('.about-me img', { delay: 900, origin: 'left' });
    sr.reveal('.customer', { delay: 1000, origin: 'right' });
    sr.reveal('.Review h1', { delay: 1100, origin: 'top' });
    sr.reveal('.review', { delay: 1200, origin: 'bottom', interval: 300 });
    sr.reveal('.Subscribe', { delay: 1300, origin: 'bottom' });
    
    sr.reveal('.rights', { delay: 1400, origin: 'left' });
});