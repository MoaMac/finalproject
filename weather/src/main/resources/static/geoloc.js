var currentPosition = {
    lat: 1,
    lng: 1
};
/**
 * Gör demos för
 * Los Angeles:
 * Moscow:
 * ***/

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            currentPosition.lat = pos.lat;
            currentPosition.lng = pos.lng;
        }, function() {
            handleLocationError(true);
        });
    } else {
        handleLocationError(false);
    }
}

function handleLocationError(browserHasGeolocation) {
  var errormsg = browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.';
  alert(errormsg);
}


