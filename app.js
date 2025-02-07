const menuImage = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelectorAll(".navbar-nav");
const mainNavbar = navbarNav[0];
const listItem = document.querySelectorAll(".list-item");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const mainProductThumbnail = document.querySelector(".main-product-thumbnail");
const mainProductThumbnailCarousel = document.querySelector(
  ".main-product-thumbnail-carousel"
);
const mainSection = document.querySelector(".main-section:first-child");
const productThumbnail = document.querySelectorAll(".product-thumbnail");
const carouselThumbnail = document.querySelectorAll(".carousel-thumbnail");
const carousel = document.querySelector(".main-carousel");
const bodyOverlay = document.querySelector(".bodyOverlay");
const carouselClose = document.querySelector(".carousel-close");
const nextButton = document.querySelector(".next");
const backButton = document.querySelector(".back");
const mobileNextButton = document.querySelector(".mobile-next");
const mobileBackButton = document.querySelector(".mobile-back");
const counterIncrease = document.querySelector(".increaseNumber");
const counterDecrease = document.querySelector(".decreaseNumber");
const counterAmount = document.querySelector(".amount");
const cartIcon = document.querySelector(".cart");
const btnAddToCart = document.querySelector(".btnCart");
const amount = document.querySelector(".amount");
const cartPrice = document.querySelector(".cartPrice");
const cartNumber = document.querySelector(".cartNumber");
const cartTotal = document.querySelector(".cartTotal");
const deleteCart = document.querySelector(".deleteCart");
const cartWrapper = document.querySelector(".cartWrapper");
const emptyCart = document.querySelector(".emptyWrapper");
const count = document.querySelector(".count");
const body = document.querySelector("body");

let number = 0; // used to change main image on mobile view

menuImage.addEventListener("click", () => {
  let mainList = document.querySelectorAll(".list-item a");
  let listItemMain = document.querySelectorAll(".list-item-main");

  if (mainNavbar.style.display === "" || mainNavbar.style.display === "none") {
    mainNavbar.style.display = "flex";
    menuImage.src = "./images/icon-close.svg";
    mainNavbar.classList.add("activeMenu");
    overlay.style.display = "block";
    logo.style.display = "none";
    mainList.forEach((e) => {
      e.style.paddingBottom = "1rem";
    });
  } else {
    menuImage.src = "./images/icon-menu.svg";
    mainNavbar.style.display = "none";
    overlay.style.display = "none";
    logo.style.display = "block";
    mainNavbar.classList.remove("activeMenu");
  }
});

// addEventListener("resize", () => {
//   let windowWidth = window.innerWidth;
//   if (windowWidth > 800) {
//     mainNavbar.classList.remove("activeMenu");
//     overlay.style.display = "none";
//     logo.style.display = "block";
//     mainNavbar.style.display = "flex";
//     navbarNav.forEach((e) => {
//       navbarNav.style.display = "flex";
//     });
//   }
//   if (windowWidth <= 799) {
//     mainNavbar.classList.remove("activeMenu");
//     mainNavbar.style.display = "none";
//     navbarNav.forEach((e) => {
//       navbarNav.style.display = "none";
//     });
//   }
// });

mainProductThumbnail.addEventListener("click", () => {
  let screenSize = window.innerWidth;
  if (screenSize > 500) {
    carousel.style.display = "block";
    bodyOverlay.style.display = "block";
    mainSection.style.zIndex = "-1";
    navbar.style.zIndex = "-1";
    for (let i = 0; i < productThumbnail.length; i++) {
      if (productThumbnail[i].classList.contains("active")) {
        clearActiveThumbnail("carousel");
        clearActiveThumbnail("normal");
        findImage("carousel", i);
      }
    }
  }
});

//product thumbnail
productThumbnail.forEach((e) => {
  e.addEventListener("click", () => {
    clearActiveThumbnail("normal");
    e.classList.add("active");
    for (let i = 0; i < productThumbnail.length; i++) {
      if (productThumbnail[i].classList.contains("active")) {
        findImage("normal", i);
      }
    }
  });
});
//carouselThumbnail
carouselThumbnail.forEach((e) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < carouselThumbnail.length; i++) {
      carouselThumbnail[i].classList.remove("active");
    }

    e.classList.add("active");
    for (let i = 0; i < carouselThumbnail.length; i++) {
      if (carouselThumbnail[i].classList.contains("active")) {
        findImage("carousel", i);
      }
    }
  });
});

carouselClose.addEventListener("click", () => {
  carousel.style.display = "none";
  bodyOverlay.style.display = "none";
  mainSection.style.zIndex = "auto";
  navbar.style.zIndex = "auto";
});
//next button for carousel

nextButton.addEventListener("click", () => {
  for (let i = 0; i < carouselThumbnail.length; i++) {
    if (carouselThumbnail[i].classList.contains("active")) {
      i++;
      if (i < 4) {
        findImage("carousel", i);
      } else {
        findImage("carousel", 0);
      }
    }
  }
});

//back button for carousel
backButton.addEventListener("click", () => {
  for (let i = 0; i < carouselThumbnail.length; i++) {
    if (carouselThumbnail[i].classList.contains("active")) {
      i--;
      if (i >= 0) {
        findImage("carousel", i);
        console.log(i);
      } else {
        i = 3;
        findImage("carousel", i);
      }
    }
  }
});
//mobile next button
mobileNextButton.addEventListener("click", () => {
  number++;
  if (number < 4) {
    findImage("normal", number);
  } else {
    number = 0;
    findImage("normal", number);
  }
});

//mobile back button
mobileBackButton.addEventListener("click", () => {
  number--;
  if (number >= 0) {
    findImage("normal", number);
  } else {
    number = 3;
    findImage("normal", number);
  }
});
//locate images
function findImage(location, x) {
  let imageLookUp = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];
  if (location === "carousel") {
    mainProductThumbnailCarousel.src = imageLookUp[x];
    clearActiveThumbnail("carousel");
    carouselThumbnail[x].classList.add("active");
  }
  if (location === "normal") {
    mainProductThumbnail.src = imageLookUp[x];
    clearActiveThumbnail("carousel");
    productThumbnail[x].classList.add("active");
  }
}

//clear active thumbnail
function clearActiveThumbnail(location) {
  if (location === "carousel") {
    carouselThumbnail.forEach((e) => {
      e.classList.remove("active");
    });
  }
  if (location === "normal") {
    productThumbnail.forEach((e) => {
      e.classList.remove("active");
    });
  }
}

//product counter increase
counterIncrease.addEventListener("click", () => {
  let counterNumber = counterAmount.textContent;
  counterNumber++;
  counterAmount.textContent = counterNumber;
});
//product counter decrease

counterDecrease.addEventListener("click", () => {
  let counterNumber = counterAmount.textContent;
  if (counterNumber > 0) {
    counterNumber--;
    counterAmount.textContent = counterNumber;
  }
});

cartIcon.addEventListener("click", () => {
  let cartDisplay = document.querySelector(".cartDisplay");

  if (
    cartDisplay.style.display === "none" ||
    cartDisplay.style.display === ""
  ) {
    cartDisplay.style.display = "flex";
    if (
      parseInt(cartNumber.textContent) === 0 ||
      cartNumber.textContent === ""
    ) {
      emptyCart.style.display = "flex";
      cartWrapper.style.display = "none";
    } else {
      cartWrapper.style.display = "flex";
    }
  } else {
    cartDisplay.style.display = "none";
    emptyCart.style.display = "none";
  }
});

btnAddToCart.addEventListener("click", () => {
  let productPrice = document.querySelector(".productPrice");
  let newPrice = parseInt(productPrice.textContent);
  let newAmount = parseInt(amount.textContent);
  let total = newPrice * newAmount;

  cartPrice.textContent = "$" + productPrice.textContent;
  cartNumber.textContent = amount.textContent;
  cartTotal.textContent = "$" + total;
  count.textContent = cartNumber.textContent;
  if (count.textContent !== "0") {
    count.style.display = "block";
  } else {
    count.style.display = "none";
  }
});

deleteCart.addEventListener("click", () => {
  amount.textContent = 0;
  cartWrapper.style.display = "none";
  emptyCart.style.display = "flex";
});
