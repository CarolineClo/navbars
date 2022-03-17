function toggleMobileMenu() {
  var x = document.getElementById("burgerIcon3");
  if (x.className === "nav3") {
    x.className += "open";
  } else {
    x.className = "nav3";
  }
}

/*function toggleMobileMenu(menu) {
  menu.classlist.toggle("open");
}
*/
