const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenlButton = document.querySelector("#menu-open-button");
const menuCloselButton = document.querySelector("#menu-close-button");


menuOpenlButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloselButton.addEventListener("click", () => menuOpenlButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenlButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});