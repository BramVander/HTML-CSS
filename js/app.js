const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("open");
  hamburgerMenu.classList.toggle("open-menu");
  console.log(hamburgerMenu);
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
