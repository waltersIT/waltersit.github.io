
// Initialize the map
let map = L.map('map').setView([39.39554, -76.63133], 9);
// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var circle = L.circle([39.39554, -76.63133], { // Circle center
  color: 'blue',       // Circle outline color
  fillColor: '#f03',   // Fill color
  fillOpacity: 0.2,    // Opacity of the fill
  radius: 25000          // Radius in meters
}).addTo(map);

// Add a popup to the circle
circle.bindPopup("I am a circle.");