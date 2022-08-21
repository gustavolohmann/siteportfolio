/*
    menu mobile 
*/
const btnMenu = document.getElementById("open-menu");
const hiddenMenu = document.getElementById("hiddenMenu");
let menu = document.querySelector(".lista-menu-mobile");

function openMenu() {
    menu.classList.add("animationOpen");
}
btnMenu.addEventListener("click", openMenu);

function menuClose(){
    menu.classList.remove("animationOpen");
}
hiddenMenu.addEventListener("click", menuClose);
/*
    fim menu mobile
*/