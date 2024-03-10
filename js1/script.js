// S// Selecting elements
let menu = document.querySelector(".menu"),
sidebarOpen = document.querySelector(".sidebarOpen"),
sidebarClose = document.querySelector(".sidebarClose");

// Function to hide the menu
function hideMenu() {
menu.style.display = "none";
}

// Toggle sidebar functionality
sidebarOpen.addEventListener("click", () => {
menu.style.display = "block";
});

sidebarClose.addEventListener("click", () => {
hideMenu();
});

// Event listener to hide the menu when navigating to a new page
window.addEventListener("unload", () => {
hideMenu();
});
