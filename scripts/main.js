let map = L.map('usmap').setView([38.545554, -97.403442], 4.4);

L.tileLayer('https://api.mapbox.com/styles/v1/h-herrera/cm3rtfssm001n01ql3evy69ba/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaC1oZXJyZXJhIiwiYSI6ImNtM3JpYm8zdjA2MmkyaXB6MHFwNGo0M20ifQ.vNipzmuYhA9IHgcNABTNcA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
    L.marker ( [ places [i].lat, places[i].long ] )
    .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
    .addTo(map);
}