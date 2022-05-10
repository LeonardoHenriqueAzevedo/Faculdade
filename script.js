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