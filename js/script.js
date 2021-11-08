// Get elements
const hamburger = document.querySelector("#hamburger-icon");
const navLinks = document.querySelector(".nav-links");

// Logo click for homepage
const goHome = function () {
  console.log("go home");
  window.location.href = "#";
};

// Open / close hamburger menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
});

// Toggle class for current nav link
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const active = document.querySelector(".current-page");
  if (active) active.classList.remove("current-page");
  e.target.classList.add("current-page");

  // Prevent click on parent
  if (!e.target.getAttribute("href")) return;

  // Travel to clicked navlink
  const slug = e.target.getAttribute("href");
  window.location.href = `${slug}`;
});
