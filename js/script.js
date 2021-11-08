// Get elements
const hamburger = document.querySelector("#hamburger-icon");
const navLinks = document.querySelector(".nav-links");

// Open / close hamburger menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
});

// Logo click for homepage
const goHome = function () {
  window.location.href = "#";
};

// Toggle class for current nav link
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  let active = document.querySelector(".current-page");
  if (active) active.classList.remove("current-page");
  e.target.classList.add("current-page");
});
