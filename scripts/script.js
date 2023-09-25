let menu_hamburguer = document.querySelector("#menu-hamburguer");
let menu_open = document.querySelector('.presentation_header_menu-hamburguer_open');

menu_hamburguer.addEventListener('click', () => {
    menu_open.classList.toggle('display-flex');
})