const defaultAddress = "Mount Pulag";
const defaultLat = 16.5977263;
const defaultLng = 120.8987919;
var map = L.map("map").setView([defaultLat, defaultLng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

markerCoordinates = [defaultLat, defaultLng];
var marker = L.marker(markerCoordinates).addTo(map);
marker.bindPopup("<b>Address:</b> " + defaultAddress);

document.getElementById("addressForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var lat = parseFloat(document.getElementById("latitude").value);
  var lng = parseFloat(document.getElementById("longitude").value);

  marker.setLatLng([lat, lng]);

  map.setView([lat, lng], 13);

  //  API USING LAT NAD LNG!!!!!!!!!!
  var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.address) {
        var newAddress = data.display_name;
        var lat = parseFloat(document.getElementById("latitude").value);
        var lng = parseFloat(document.getElementById("longitude").value);

        marker.bindPopup(
          "<b>Address:</b> " +
            newAddress +
            "<br><b>Coordinates:</b>" +
            `${lat}, ${lng}`
        );
      } else {
        alert("Address not found");
      }
    })
    .catch((error) => {
      console.error("Error with reverse geocoding:", error);
    });
});

//////////////////////////////////////////////////////////////////////////
document
  .getElementById("findAddressButton")
  .addEventListener("click", function () {
    var inputAddress = document.getElementById("address").value;

    // API USING ADDRESS
    var url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
      inputAddress
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          var lat = parseFloat(data[0].lat);
          var lng = parseFloat(data[0].lon);
          var newAddress = data[0].display_name;

          marker.setLatLng([lat, lng]);
          marker.bindPopup(
            "<b>Address:</b> " +
              newAddress +
              "<br><b>Coordinates:</b>" +
              `${lat}, ${lng}`
          );

          map.setView([lat, lng], 13);
        } else {
          alert("Address not found");
        }
      })
      .catch((error) => {
        console.error("Error with geocoding:", error);
      });
  });
