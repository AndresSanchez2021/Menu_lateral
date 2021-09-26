//variables
const origen="menu-pr";
let actual=origen;

const mantenimiento ="menu-pr-#";



//-------------------Activadores---------------
//menu
document.getElementById("menu-toggle-btn").addEventListener("click",()=>activarSideBar(true));
document.getElementById("close-menu").addEventListener("click",()=>activarSideBar(false));


//sub-menu
let ul = document.getElementsByClassName("item");
for (let i =0; i<ul.length; i++) {
    ul[i].addEventListener("click",()=>mostrarMenu(actual+"-"+ul[i].value));
}
let close_arrow=document.getElementsByClassName("close-sub-menu");
    for(let i=0; i<close_arrow.length; i++){
        close_arrow[i].addEventListener("click",()=>mostrarMenu(origen));
    }

   


//Funciones
function activarSideBar(p){
    document.getElementById("side-bar").classList.toggle("active");
    document.getElementsByClassName("side-bar-container")[0].classList.toggle("active");
    if(p)
        document.getElementById(actual).classList.toggle("active"); 
    else{
        ocultarMenu();
    }
}
function mostrarMenu(dir){
    let aux =document.getElementById(dir);
    if(aux!=null && dir!=actual){
        document.getElementById(actual).classList.toggle("active"); 
        aux.classList.toggle("active"); 
        actual=dir;
    }else{
        mostrarMenu(mantenimiento);
    }
}
function ocultarMenu(){
    document.getElementById(actual).classList.toggle("active");
    actual=origen;
}





