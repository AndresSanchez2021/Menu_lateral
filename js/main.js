//variables
let ruta="menu-pr";



//-------------------Activadores---------------
//menu
document.getElementById("menu-toggle-btn").addEventListener("click",()=>activarSideBar());
document.getElementById("close-menu").addEventListener("click",()=>{
    ocultarMenu();
    activarSideBar();
});
let close_arrow=document.getElementsByClassName("close-sub-menu");
    for(let i=0; i<close_arrow.length; i++){
        close_arrow[i].addEventListener("click",ocultarMenu);
    }

//sub-menu
let ul = document.getElementsByClassName("item");
for (let i =0; i<ul.length; i++) {
    ul[i].addEventListener("click",()=>mostrarMenu(ruta+"-"+ul[i].value));
}

   






//Funciones
function activarSideBar(){
    ruta="menu-pr"
    document.getElementById("side-bar").classList.toggle("active");
    document.getElementsByClassName("side-bar-container")[0].classList.toggle("active");
    document.getElementsByClassName("menu-pr")[0].classList.toggle("active");
    
}

function mostrarMenu(e){
    ruta=e;
    console.log(ruta);
    if(ruta.substring(0, ruta.length-2)=="menu-pr")
        document.getElementById("menu-pr").classList.toggle("active"); 
    
    if(ruta.length>9)
        ruta=ruta.substring(0, ruta.length-2)
    else
        document.getElementById(ruta).classList.toggle("active");
    
    
}
function ocultarMenu(){
    console.log(ruta.length)
    if(ruta.length>7){
        document.getElementById(ruta).classList.toggle("active");
        ruta=ruta.substring(0, ruta.length-2)
        console.log(ruta);
        document.getElementById(ruta).classList.toggle("active");
    }
}