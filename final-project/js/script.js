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

function countUpAnimation(targetElement, endValue, duration) {
    const startValue = 0;
    const startTime = performance.now();

    function updateNumber() {
      const currentTime = performance.now();
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const animatedValue = Math.floor(progress * (endValue - startValue) + startValue);
      targetElement.textContent = animatedValue;

      if (timeElapsed < duration) {
        requestAnimationFrame(updateNumber);
      }
    }

    updateNumber();
  }

  // Set your target element and call the count-up function on window load
  window.onload = function () {
    const countContainer = document.getElementById('count-container');
    const endValue = 100; // Set your desired end value
    const duration = 3000; // Set the duration of the animation in milliseconds

    countUpAnimation(countContainer, endValue, duration);
  };


  
// let coll = document.getElementsByClassName("collapsible-info");
// let i;
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//      content = this.parentNode.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// var btn = document.getElementsByClassName("collapse"); 

// btn[0].addEventListener("click", function () { 
// this.classList.toggle("active"); 
// var content = this.nextElementSibling; 
// if (content.style.display === "block") { 
//     content.style.display = "none"; 
// } else { 
//     content.style.display = "block"; 
// } 
// }); 

