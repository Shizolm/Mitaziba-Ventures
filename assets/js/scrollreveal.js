// COMMON REVEAL OPTION OR SYNTAX TO CREATE REVEAL ANIMATION
ScrollReveal({
    reset: false,
    distance: '300px',
    duration: 1000,
    delay: 400
});

// TARGET ELEMENTS TO ANIMATE AND SPECIFY OPTIONS TO CREATE REVEAL ANIMATIONS
ScrollReveal().reveal('.home_social i', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home_img', { delay: 500, origin: 'bottom', rotate: { y: 100, z: 100 } });
ScrollReveal().reveal('.home_data', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.home_data a', { delay: 1000, origin: 'bottom', rotate: { y: 100, z: 100 } });

ScrollReveal().reveal('.section_title', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.section_subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about_img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about_description', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about_buttons', { delay: 500, origin: 'bottom' });

ScrollReveal().reveal('.skills_titles', { delay: 500, origin: 'left', interval: 200 });

//ScrollReveal().reveal('.services_container', { delay: 500, origin: 'right', interval: 200, rotate: { y: 100, z: 100 } });
ScrollReveal().reveal('.services_container span', { delay: 500, origin: 'right' });

ScrollReveal().reveal('.portfolio_container', { delay: 500, origin: 'bottom' });

ScrollReveal().reveal('.project_title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.project_description', { delay: 500, origin: 'right' });

ScrollReveal().reveal('.project_data a', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.project_img', { delay: 500, origin: 'right' });

ScrollReveal().reveal('.contact_info', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.contact_form', { delay: 500, origin: 'right'});


ScrollReveal().reveal('.footer_bg div, .footer_bg p', { delay: 500, origin: 'bottom'});






