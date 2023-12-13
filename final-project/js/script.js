// Map:
// Using the leaflet library to create a map object, and setting the view of the map to latitude and longitude of the US
let map = L.map("map").setView([37.6, -95.665], 4);

// Adding a predesigned darkmode map as the "tile layer" to the map object
L.tileLayer("https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=Z0gbnQRplAOLdqiKaqEh", {
	minZoom: 0,
	maxZoom: 20,
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a><a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	ext: 'png'
}).addTo(map);

// adding a circular marker to the map object, setting its position to allegheny national park, pa
let allegheny = L.circle([41.66, -79.03], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

// binding/linking the circular marker to the page for that location 
allegheny.bindPopup('<a href="./location/allegheny.html">Allegheny National Forest, PA</a>');

// adding a circular marker to the map object, setting its position to congaree national park
let congaree = L.circle([33.79, -80.77], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

// binding/linking the circular marker to the page for that location 
congaree.bindPopup('<a href="./location/congaree.html">Congaree National Park, SC</a>');

// adding a circular marker to the map object, setting its position to grandfather mountain
let grandfatherMount = L.circle([36.11, -81.81], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

grandfatherMount.bindPopup('<a href="./location/grandfather.html">Grandfather Mountain, NC</a>');

// adding a circular marker to the map object, setting its position to drumlin farms
let drumlinFarms = L.circle([42.43, -71.30], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

// binding/linking the circular marker to the page for that location 
drumlinFarms.bindPopup('<a href="./location/drumlin.html">Drumlin Farms, Lincoln, MA</a>');

// adding a circular marker to the map object, setting its position to smoky mountains
let smokyMount = L.circle([35.61, -83.49], {
    color:'#A0FF73',
    fillColor:'#A0FF73',
    fillOpacity: 1,
    blur: 100,
    radius: 30000
}).addTo(map);

// binding/linking the circular marker to the page for that location 
smokyMount.bindPopup('<a href="./location/smokymount.html">Great Smoky Mountains National Park, TN</a>');

