// COMMON REVEAL OPTION OR SYNTAX TO CREATE REVEAL ANIMATION
ScrollReveal({
    reset: false,
    distance: '1000px',
    duration: 900,
    delay: 150
});

// TARGET ELEMENTS TO ANIMATE AND SPECIFY OPTIONS TO CREATE REVEAL ANIMATIONS
ScrollReveal().reveal('.home_social i', {origin: 'left', interval: 200});
ScrollReveal().reveal('.home_img', {origin: 'bottom', rotate: { y: 100, z: 100 } });
ScrollReveal().reveal('.home_data', {origin: 'top' });
ScrollReveal().reveal('.home_data a', {origin: 'bottom', rotate: { y: 100, z: 100 } });


ScrollReveal().reveal('.about_img', {origin: 'top' });
ScrollReveal().reveal('.about_description', {origin: 'bottom' });
ScrollReveal().reveal('.about_buttons', {origin: 'bottom' });

ScrollReveal().reveal('.skills_titles', {origin: 'left', interval: 200 });

ScrollReveal().reveal('.services_container', {origin: 'top',rotate: { y: 300, z: 300 } });

ScrollReveal().reveal('.portfolio_container', {origin: 'bottom' });

ScrollReveal().reveal('.project_description', {origin: 'top' });
ScrollReveal().reveal('.project_data a', {origin: 'bottom' });


ScrollReveal().reveal('.contact_info', {origin: 'top'});
ScrollReveal().reveal('.contact_form', {origin: 'bottom'});






