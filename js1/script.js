// Selecting elements
let menu = document.querySelector(".menu"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

// Function to hide the menu
function hideMenu() {
    menu.style.display = "none";
}

// Function to show the menu
function showMenu() {
    menu.style.display = "block";
}

// Function to toggle menu based on screen width
function toggleMenu() {
    if (window.innerWidth > 720) {
        showMenu(); // Show menu on desktop screens
    } else {
        hideMenu(); // Hide menu on mobile screens
    }
}

// Initial toggle based on screen width
toggleMenu();

// Toggle sidebar functionality
sidebarOpen.addEventListener("click", () => {
    showMenu();
});

sidebarClose.addEventListener("click", () => {
    hideMenu();
});

// Event listener to hide the menu when navigating to a new page
window.addEventListener("beforeunload", () => {
    hideMenu();
});

// Event listener for window resize to toggle menu
window.addEventListener("resize", toggleMenu);
