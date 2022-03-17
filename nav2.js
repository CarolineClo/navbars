const hamb = document.querySelector("#hamb");
const list = document.querySelector("#navDesk");
const links = document.querySelector(".linkItem");
const icon = document.querySelector(".icon");

function toggleMenu() {
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    hamb.innerHTML = "close";
  } else {
    list.classList.add("hidden");
    hamb.innerHTML = "menu";
  }
}
icon.addEventListener("click", toggleMenu);
