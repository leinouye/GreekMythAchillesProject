window.onscroll = function() {sticky()};
var navbar = document.getElementById("navbar");
function sticky() {
    navbar.classList.add("sticky");
}