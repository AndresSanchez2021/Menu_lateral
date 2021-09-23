//variables
let ruta;
let aux;



//-------------------Activadores---------------
//menu
document.getElementById("menu-toggle-btn").addEventListener("click",()=>activarSideBar());
document.getElementById("close-menu").addEventListener("click",()=>{
    activarSideBar();
    ocultarMenu();
});
document.getElementsByClassName("close-sub-menu")[0].addEventListener("click",()=>ocultarMenu());

//sub-menu
let ul = document.getElementById("menu-0").getElementsByTagName("li");
for(i=1; i<ul.length; i++) {
    ruta="-0-1";
   ul[i].addEventListener("click",()=>mostrarMenu(ruta))
}






//Funciones
function activarSideBar(){
    document.getElementById("side-bar").classList.toggle("active");
    document.getElementsByClassName("menu-container")[0].classList.toggle("active");
    let ul_menu=document.getElementById("menu-0");
    if(ul_menu.classList.toggle("hidden-left")){
        ul_menu.classList.toggle("hidden-left");
        console.log("si la tiene")
    }
}
function mostrarMenu(e){
    aux= "menu"+e;
    document.getElementById("menu-0").classList.toggle("hidden-left");
    document.getElementById(aux).classList.toggle("menuActive");
    
}
function ocultarMenu(e){
    document.getElementById("menu-0").classList.toggle("hidden-left");
    let to_show = document.getElementById(aux)
    if(to_show!=null){
        to_show.classList.toggle("menuActive")
        console.log("entro")
    }
}