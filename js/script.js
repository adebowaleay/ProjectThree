function initMap() {
        var locationChicago = {lat: 41.8781, lng:-87.6298};
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
      }
// chicago "41.8781": "-87.6298",
//london "6.5244":"3.3792",
// lagos "51.5074":"0.1278"
