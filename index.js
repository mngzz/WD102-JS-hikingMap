const defaultAddress =
  "Mount Pulag Kayapa, Nueva Vizcaya, Cagayan Valley, Philippines";
const defaultLat = 16.5977263;
const defaultLng = 120.8987919;
var map = L.map("map").setView([defaultLat, defaultLng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

markerCoordinates = [defaultLat, defaultLng];
var marker = L.marker(markerCoordinates).addTo(map);
marker.bindPopup(
  "<b>Address:</b> " +
    defaultAddress +
    "<br><b>Coordinates:</b>" +
    `${defaultLat}, ${defaultLng}`
);

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

///////////////// IMAGE ONLCICK /////////////////////////
function showAddressOnMapPulag() {
  var address =
      "Mount Pulag, Kayapa, Nueva Vizcaya, Cagayan Valley, Philippines",
    lat = 16.5977263,
    lng = 120.8987919;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapBatulao() {
  var address =
      "Mount Batulao, Calaca, Batangas, Calabarzon, 4212, Philippines",
    lat = 14.0399434,
    lng = 120.8023782;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapTapyas() {
  var address = " Mount Tapyas, Coron, Palawan, Mimaropa, 5316, Philippines",
    lat = 12.004846,
    lng = 120.2047511;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapUlap() {
  var address =
      "Mount Ulap, Benguet, Cordillera Administrative Region, Philippines",
    lat = 16.2870681,
    lng = 120.6322888;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapPinatubo() {
  var address = "Mount Pinatubo, Zambales, Central Luzon, Philippines",
    lat = 15.1445564,
    lng = 120.3490617;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapDaraitan() {
  var address = "Mount Daraitan, General Nakar, Calabarzon, 4338, Philippines",
    lat = 14.6161523,
    lng = 121.4379731;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapTarak() {
  var address = "Tarak Peak, Mariveles, Bataan, Central Luzon, Philippines",
    lat = 14.5060828,
    lng = 120.490637;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}

function showAddressOnMapPico() {
  var address =
      "Mount Pico de Loro, Pagudpud, Ilocos Norte, Ilocos Region, 2919, Philippines",
    lat = 18.5139062,
    lng = 120.8868109;

  if (!marker) marker = L.marker([lat, lng]).addTo(map);
  else marker.setLatLng([lat, lng]);

  marker
    .bindPopup(
      `<b>Coordinates:</b> ${address}` +
        `<br><b>Coordinates:</b> ${lat}, ${lng}`
    )
    .openPopup();
  map.setView([lat, lng], 13);
}
