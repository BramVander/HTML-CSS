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

const hamburger = document.querySelector(".header__menu");
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  hamburger.classList.toggle("open"); // open/close menu
});
