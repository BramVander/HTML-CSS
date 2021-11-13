// Store elements
const hamburger = document.querySelector("#hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const body = document.querySelector(".body");
const photoGrid = document.querySelector(".photo-grid");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");

// Initialize and add the map
function initMap() {
  // The location of Eindhoven
  const eindhoven = { lat: 51.43210725650786, lng: 5.463081326808157 };
  // The map, centered at Eindhoven
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: eindhoven,
  });
  // The marker, positioned at Eindhoven
  const marker = new google.maps.Marker({
    position: eindhoven,
    map: map,
  });

  // initiate marker
  marker.setMap(map);
}

// Logo click for homepage
const goHome = function () {
  window.location.href = "/";
};

// Button back to top
const goTop = function () {
  document.documentElement.scrollTop = 300;
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

// Modal toggle
if (photoGrid) {
  photoGrid.addEventListener("click", function (e) {
    e.preventDefault();
    let src = "";
    // Check if clicked element is img or close btn with class x
    if (!e.target.classList.contains("x")) return;
    // Get correct modal img and toggle modal
    if (e.target.getAttribute("src")) src = e.target.getAttribute("src");
    modalImg.src = src;
    modal.style.display === "block"
      ? (modal.style.display = "none")
      : (modal.style.display = "block");
  });
}

// Highlight clicked story
const clickedStory = function (article_id) {
  console.log("click", article_id);
  const article = document.getElementById(article_id);
  console.log(article);
  article.classList.toggle("highlight");
  setTimeout(function () {
    article.classList.toggle("highlight");
  }, 4000);
};
