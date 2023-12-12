
let counter = setInterval(countingUp,40);
let extinct = 0;
function countingUp() {
    let count = document.getElementById("firefly-counter");
    count.innerHTML = ++extinct;
    if (extinct === 44) {
        clearInterval(counter);
    }
}

let map = L.map("map").setView([37.6, -95.665], 4);

L.tileLayer("https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=Z0gbnQRplAOLdqiKaqEh", {
	minZoom: 0,
	maxZoom: 20,
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a><a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	ext: 'png'
}).addTo(map);

let allegheny = L.circle([41.66, -79.03], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

allegheny.bindPopup('<a href="../location/allegheny.html">Allegheny National Forest, PA</a>');

let congaree = L.circle([33.79, -80.77], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

congaree.bindPopup('<a href="../location/congaree.html">Congaree National Park, SC</a>');

let grandfatherMount = L.circle([36.11, -81.81], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

grandfatherMount.bindPopup('<a href="../location/grandfather.html">Grandfather Mountain, NC</a>');

let drumlinFarms = L.circle([42.43, -71.30], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

drumlinFarms.bindPopup('<a href="../location/drumlin.html">Drumlin Farms, Lincoln, MA</a>');

let smokyMount = L.circle([35.61, -83.49], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

smokyMount.bindPopup('<a href="../location/smokymount.html">Great Smoky Mountains National Park, TN</a>');

let mapDiv = document.getElementById("map");
mapDiv.appendChild(map);

