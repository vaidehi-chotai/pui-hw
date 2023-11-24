let map = L.map("map").setView([37.6, -95.665], 4);
// L.tileLayer("https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=Z0gbnQRplAOLdqiKaqEh", {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a><a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
// 	ext: 'png'
// }).addTo(map);

L.tileLayer("https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=Z0gbnQRplAOLdqiKaqEh", {
	minZoom: 0,
	maxZoom: 20,
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a><a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	ext: 'png'
}).addTo(map);


let mapDiv = document.getElementById("map");
mapDiv.appendChild(map);


// import {L} from "@sfu-iat355/intro-to-leaflet-d3-interactivity";
// L = require('leaflet@1.2.0');
// import {d3} from "@sfu-iat355/intro-to-leaflet-d3-interactivity"
// var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// });

// FireflyLocations = {
//     let container = DOM.element('div', { style: `width:${width}px;height:${width/1.6}px` });
    
//      yield container;
  

//     let map = L.map(container).setView([53.2527, -123.1207], 5).fitBounds(L.geoJson(Wcities).getBounds());
//     let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map); 

//     //initialize svg to add to map
//     L.svg({clickable:true}).addTo(map)// we have to make the svg layer clickable
  
//     const overlay = d3.select(map.getPanes().overlayPane)
//     const svg = overlay.select('svg').attr("pointer-events", "auto")
    
    
//     const Dots = svg.selectAll('circle')
//                     .attr("class", "Dots")
//                     .data(Wcities.features) 
//                     .join('circle')
//                         .attr("id", "dotties")
//                         .attr("fill", "steelblue") 
//                         .attr("stroke", "black")
//                         //Leaflet has to take control of projecting points. Here we are feeding the latitude and longitude coordinates to
//                         //leaflet so that it can project them on the coordinates of the view. Notice, we have to reverse lat and lon.
//                         //Finally, the returned conversion produces an x and y point. We have to select the the desired one using .x or .y
//                         .attr("cx", d => map.latLngToLayerPoint([d.geometry.coordinates[1],d.geometry.coordinates[0]]).x)
//                         .attr("cy", d => map.latLngToLayerPoint([d.geometry.coordinates[1],d.geometry.coordinates[0]]).y) 
//                         .attr("r", 5)
//                         .on('mouseover', function() { //function to add mouseover event
//                             d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
//                               .duration('150') //how long we are transitioning between the two states (works like keyframes)
//                               .attr("fill", "red") //change the fill
//                               .attr('r', 10) //change radius
//                           })
//                           .on('mouseout', function() { //reverse the action based on when we mouse off the the circle
//                             d3.select(this).transition()
//                               .duration('150')
//                               .attr("fill", "steelblue")
//                               .attr('r', 5)
//                           });
        
 
//     const update = () => Dots
//               .attr("cx", d => map.latLngToLayerPoint([d.geometry.coordinates[1],d.geometry.coordinates[0]]).x)
//               .attr("cy", d => map.latLngToLayerPoint([d.geometry.coordinates[1],d.geometry.coordinates[0]]).y) 
  

//     map.on("zoomend", update)

// }

