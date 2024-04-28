const seaCon = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("ser-btn-icon");

serShow.addEventListener("click", ()=>{
    seaCon.style.padding="5px 5%";
    seaCon.style.height="50px";
    seaCon.style.transition="all 0.5s";
});

serHide.addEventListener("click", ()=>{
    seaCon.style.height="0";
    seaCon.style.padding="0 5%";
})

// ===================Navbar Hide and Show=================

const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", ()=>{
    dropdown.classList.toggle("show");
})

// ========submenu=================

const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submenu");

for(let x = 0; x < droptog.length; x++){
    droptog[x].addEventListener("click", ()=>{
        submenu[x].classList.toggle("submenushow");
});
}

//=============sub-sub-dropdown================

const subsubtog = document.querySelectorAll(".sub-sub-drop");
const subSubMenu = document.getElementsByClassName("sub-sub-menu");

for(let x = 0; x < subsubtog.length; x++){
    subsubtog[x].addEventListener("click", ()=>{
        subSubMenu[x].classList.toggle("show-sub-sub-menu");
});
}