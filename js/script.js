function initMap() {
  var locationChicago = {lat: 41.8781, lng: -87.6298};
  var locationMilleniumPark = {lat: 41.8826, lng: -87.6226};
  var locationHiltonChicago = {lat: 41.8726, lng: -87.6247};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: locationChicago,
    gestureHandling: 'cooperative'
  });
  var marker = new google.maps.Marker({
    position: locationChicago,
    map: map,
    title: 'Hello World!'
  });
  var marker = new google.maps.Marker({
    position: locationMilleniumPark,
    map: map,
    title: 'Hello Milleniumpk!'
  });
  var marker = new google.maps.Marker({
    position: locationHiltonChicago,
    map: map,
    title: 'Hello Hilton!'
  });
  window.addEventListener('onload',initMap);
}
