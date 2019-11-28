var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });
  //coor-ft
  //location coordinates
  var features = [
    {position: new google.maps.Latlng(41.8781, -87.6298),
     type: 'Chicago'},
    {position: new google.maps.Latlng(6.5244, 3.3792),
     type: 'Lagos'},
    {position: new google.maps.Latlng(51.5074, 0.1278),
     type: 'London'}
    ];

  //function for each marker feature, make visible
   features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });
  
for (var key in coor) {
    var latLng = new google.maps.LatLng(key,coor[key]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
