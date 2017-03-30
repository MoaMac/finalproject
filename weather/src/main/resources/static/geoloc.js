var currentCoordinates = 0;
/**
 * Gör demos för
 * Los Angeles:
 * Moscow:
 * ***/

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentCoordinates = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };

            loadLocation(currentCoordinates.lat, currentCoordinates.lon);

            /* TESTING */
            //currentTimeForcast(currentCoordinates);
            testing5dayForcast(currentCoordinates);
            getSpecificForcastData(30, 18);

        }, function () {
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