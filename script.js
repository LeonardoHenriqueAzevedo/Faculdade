const menu = document.querySelector('#mobile-menu');
const linksMenu = document.querySelector('.links_menu');
const logo = document.querySelector('#logo');


// Menu Para celular
const mobileMenu = () => {
    console.log(linksMenu);
    menu.classList.toggle('esta-ativo');
    linksMenu.classList.toggle('ativar');
};

menu.addEventListener('click', mobileMenu);

// Swiper
var swiper = new Swiper(".home_slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});