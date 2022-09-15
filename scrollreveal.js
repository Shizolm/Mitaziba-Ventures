// COMMON REVEAL OPTION OR SYNTAX TO CREATE REVEAL ANIMATION
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// TARGET ELEMENTS TO ANIMATE AND SPECIFY OPTIONS TO CREATE REVEAL ANIMATIONS
ScrollReveal().reveal('.home_social i', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home_img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.home_data', { delay: 500, origin: 'top' });