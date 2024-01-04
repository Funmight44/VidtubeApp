var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

// var for container
var container = document.querySelector(".container");



menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


