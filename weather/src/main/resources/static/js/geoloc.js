var currentCoordinates = 0;

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentCoordinates = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };

            loadLocation(currentCoordinates);

            /* TESTING */
            /*
            //currentTimeForecast(currentCoordinates);
            testing5dayForecast(currentCoordinates);
            getSpecificForecastData(1, 18);
            */

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