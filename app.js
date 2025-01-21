const menuImage = document.querySelector(".menu");
const navbarNav = document.querySelectorAll(".navbar-nav");
const mainNavbar = navbarNav[0];
const listItem = document.querySelectorAll(".list-item");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");

menuImage.addEventListener("click", () => {
  let mainList = document.querySelectorAll(".list-item a");
  let listItemMain = document.querySelectorAll(".list-item-main");
  console.log(listItemMain);
  console.log(mainList);
  if (mainNavbar.style.display === "" || mainNavbar.style.display === "none") {
    mainNavbar.style.display = "flex";
    menuImage.src = "./images/icon-close.svg";
    mainNavbar.classList.add("activeMenu");
    overlay.style.display = "block";
    logo.style.display = "none";
    mainList.forEach((e) => {
      e.style.paddingBottom = "1rem";
    });
    // listItemMain.forEach((e) => {
    //   e.style.paddingBottom = "0";
    // });
  } else {
    menuImage.src = "./images/icon-menu.svg";
    mainNavbar.style.display = "none";
    overlay.style.display = "none";
    logo.style.display = "block";
    mainNavbar.classList.remove("activeMenu");
    // mainList.forEach((e) => {
    //   e.style.paddingBottom = "2.81rem";
    // });
    // listItemMain.forEach((e) => {
    //   e.style.paddingBottom = "2.81rem";
    // });
  }
});

addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 800) {
    mainNavbar.classList.remove("activeMenu");
    overlay.style.display = "none";
    logo.style.display = "block";
    mainNavbar.style.display = "flex";
    navbarNav.forEach((e) => {
      navbarNav.style.display = "flex";
    });
  }
  if (windowWidth <= 799) {
    mainNavbar.classList.remove("activeMenu");
    mainNavbar.style.display = "none";
    navbarNav.forEach((e) => {
      navbarNav.style.display = "none";
    });
  }
});
