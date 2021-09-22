let btnToggle =document.getElementById("menu-toggle-btn");
 btnToggle.addEventListener("click",()=>activarSideBar());
let btnClose =document.getElementById("close-menu");
btnClose.addEventListener("click",()=>activarSideBar());



function activarSideBar(){
    console.log("hola")
    document.getElementById("side-bar").classList.toggle("active");
    document.getElementsByClassName("menu-container")[0].classList.toggle("active");
}