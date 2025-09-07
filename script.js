// Burger menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

// Fixed header on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Gallery function
function changeImage(element) {
  const mainImg = document.getElementById("main-img");
  mainImg.src = element.src;
}
