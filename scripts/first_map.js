let map = L.map('E_map').setView([33.149763, -80.062542], 5.4);

L.tileLayer('https://api.mapbox.com/styles/v1/h-herrera/cm3rtfssm001n01ql3evy69ba/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaC1oZXJyZXJhIiwiYSI6ImNtM3JpYm8zdjA2MmkyaXB6MHFwNGo0M20ifQ.vNipzmuYhA9IHgcNABTNcA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([26.158490, -80.325520]).addTo(map);
let marker2 = L.marker([39.969320, -83.006172]).addTo(map);
let marker3 = L.marker([27.942716, -82.451794]).addTo(map);
let marker4 = L.marker([35.803318, -78.721772]).addTo(map);

marker1.bindPopup("This is the first arena I've been to.").openPopup();
marker2.bindPopup("My first time attending a Fla. Panthers away game.")
marker3.bindPopup("I went to this arena for an NHL all-star game.");
marker4.bindPopup("I went to a game here after I attended a wedding.");
