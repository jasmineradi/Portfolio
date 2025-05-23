let hamburger = document.getElementById("hamburger-icon");
let mobileNav = document.getElementById("mobile-menu");

hamburger.onclick = function() {
    mobileNav.classList.toggle("active")
};