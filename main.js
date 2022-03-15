const menu = document.querySelector(".menu1");
const menuItems = document.querySelectorAll(".menu1Item");
const burger = document.querySelector(".burger1");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menu1Item) {
  menu1Item.addEventListener("click", toggleMenu);
});

/*
$("button").click(function () {
  $("ul").toggleClass("showMenu");
});
*/
