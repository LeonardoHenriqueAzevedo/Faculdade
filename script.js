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


// Mostra no menu onde o usuário está na tela
const marcadorMenu = () => {
    const el = document.querySelector('.marcador');
    const home = document.querySelector('#home-link');
    const cardapio = document.querySelector('#cardapio-link');
    const equipe = document.querySelector('#equipe-link');
    let scrollPosition = window.scrollY;

    if (window.innerWidth > 960 && scrollPosition < 600) {
        home.classList.add('marcador');
        cardapio.classList.remove('marcador');
        equipe.classList.remove('marcador');
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 1400) {
        cardapio.classList.add('marcador');
        home.classList.remove('marcador');
        equipe.classList.remove('marcador');
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2345) {
        equipe.classList.add('marcador');
        cardapio.classList.remove('marcador');
        home.classList.remove('marcador');
        return;
    };

    if ((el && window.innerWidth < 960 && scrollPosition < 600) || el) {
        el.classList.remove('marcador');
    }
};

window.addEventListener('scroll', marcadorMenu);
window.addEventListener('click', marcadorMenu);

// Cardápio


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