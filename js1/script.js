// Selecting elements



; //notice that there's no semicolon!





const body = document.querySelector("body"),
nav = document.querySelector("nav"),
navbar = document.querySelector(".nav-bar");
menu = document.querySelector(".menu")
navlinks=document.querySelector(".nav-links")
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
sidebarClose = document.querySelector(".siderbarClose"); // Corrected typo
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
body.classList.add("dark");
}

function hidemenu(){
    nav.classList.remove("active");
    document.querySelector(".menu").style.display = "none";
}


//   js code to toggle sidebar
function toggleMenu() {
    if (window.innerWidth > 720) {
        document.querySelector(".menu").style.display = "block";
        nav.classList.add("active");

        // Show menu on desktop screens
    } 
    else{
        document.querySelector(".menu").style.display = "none";
        nav.classList.remove("active");
    }
}
sidebarOpen.addEventListener("click", () => {
nav.classList.add("active");
document.querySelector(".menu").style.display = "block";

});
sidebarClose.addEventListener("click", () => { // Corrected typo
nav.classList.remove("active");
document.querySelector(".menu").style.display = "none";

});

toggleMenu();
