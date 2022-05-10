const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.links_menu');
const navLogo = document.querySelector('#logo');


// Display Mobile Menu
const mobileMenu = () => {
    console.log(menuLinks);
    menu.classList.toggle('esta-ativo');
    menuLinks.classList.toggle('ativar');
};

menu.addEventListener('click', mobileMenu);