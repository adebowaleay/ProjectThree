
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });
  var coor= {
    "41.8781": "-87.6298",
    "6.5244":"3.3792",
    "51.5074":"0.1278"
  };
  // Create a <script> tag and set the USGS URL as the source.
  //var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  //script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//  document.getElementsByTagName('head')[0].appendChild(script);
for (var key in coor) {
    var latLng = new google.maps.LatLng(key,coor[key]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
// Loop through the results array and place a marker for each
// set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }
