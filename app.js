const menuImage = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelectorAll(".navbar-nav");
const navMenuDiv = document.querySelector(".navbar div");
const listItem = document.querySelectorAll(".list-item");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");

menuImage.addEventListener("click", () => {
  let mainNavbar = navbarNav[0];
  if (mainNavbar.style.display === "" || mainNavbar.style.display === "none") {
    mainNavbar.style.display = "flex";
    menuImage.src = "./images/icon-close.svg";
    mainNavbar.classList.add("activeMenu");
    overlay.style.display = "block";
    // logo.style.display = "none";
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].style.paddingBottom = "1rem";
      listItem[i].style.maxWidth = "10%";
    }
  } else {
    menuImage.src = "./images/icon-menu.svg";
    mainNavbar.style.display = "none";
    overlay.style.display = "none";
    // logo.style.display = "block";
  }
});

// function windowSize(){
//   let windowWidth =
// }

addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    navbarNav.classList.remove("activeMenu");
    overlay.style.display = "none";
  }
});
