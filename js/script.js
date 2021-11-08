// Get elements
const hamburger = document.querySelector("#hamburger-icon");

// Open / close hamburger menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
});

// Logo click for homepage
const goHome = function () {
  window.location.href = "#";
};
