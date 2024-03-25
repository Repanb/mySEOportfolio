/*============================================================================*/
// Navigation   
/* Responsive Toggle Navigation =============================================*/
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');
// let navColor = document.getElementById('navbar');

// navColor.addEventListener('scroll', () => {
//     if (window.scroll > 100) {
//         navColor.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
//     } else {
//         navColor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//     }
// })
menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});


//prevent right click======================================

// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });
