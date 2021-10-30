// collect elements
const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const btnContact = document.querySelector(".btn--contact");
const subNavContent = document.querySelector(".subnav--content");

// open overlay and hamburger on click
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("open");
  hamburgerMenu.classList.toggle("open-menu");
  // hide map for menu
  const gMap = document.querySelector("#map");
  if (!gMap) return;
  gMap.style.display === "none"
    ? (gMap.style.display = "block")
    : (gMap.style.display = "none");
});

// open sub nav menu on click
btnContact.addEventListener("click", function (e) {
  e.preventDefault();
  subNavContent.classList.toggle("open-sub-nav");
});

// Contact page
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

// JS for naving to homepage
const goHome = function () {
  window.location.assign(
    "file:///C:/Users/bram1/Documents/GitHub/HTML-CSS/index.html"
  );
};
