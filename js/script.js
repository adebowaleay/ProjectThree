#map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;var map;
      }
<!--function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });
  var map;
map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: new google.maps.LatLng(2.8,-187.3),
mapTypeId: 'terrain'
});
<!--features-->

  var coor= {
"41.8781": "-87.6298",
"6.5244":"3.3792",
"51.5074":"0.1278"
};

for (var key in coor) {
    var latLng = new google.maps.LatLng(key,coor[key]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
}
