
function initMap() {
  var myLatLng = {lat: 2.8, -187.3};
var map;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng,
    mapTypeId: 'terrain'
  });
  var coor= {
    "41.8781": "-87.6298",
    "6.5244":"3.3792",
    "51.5074":"0.1278"
  };

for (var key in coor) {
    var latLng = new google.maps.LatLng(key,coor[key]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
  }
}
