// Store elements
const hamburger = document.querySelector("#hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const body = document.querySelector(".body");

// Logo click for homepage
const goHome = function () {
  window.location.href = "#";
};

// Toggle hamburger menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("open");
  body.classList.toggle("no-scroll");
});

// Toggle class for current nav link
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const active = document.querySelector(".current-page");
  if (active) active.classList.remove("current-page");
  e.target.classList.add("current-page");

  // Prevent click on parent
  if (!e.target.getAttribute("href")) return;

  // Travel to navlink
  const slug = e.target.getAttribute("href");
  window.location.href = `${slug}`;
});
