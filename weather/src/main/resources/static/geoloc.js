var currentCoordinates = 0;

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentCoordinates = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };

            loadLocation(currentCoordinates.lat, currentCoordinates.lon);

            /* TESTING */
            //currentTimeForecast(currentCoordinates);
            testing5dayForecast(currentCoordinates);
            getSpecificForecastData(1, 18);

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

/*

//Den här funktionen fungerar, om vi vill ha att man sätter ut pins på kartan.

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

//Simple map. Hade velat skriva ut uluru={lat: position.coords.latitude,lng: position.coords.longitude} men det fungerar ej.
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    //Eventlistener för att få ut
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);

    });

    // Add a marker at the center of the map.
    addMarker(uluru, map);
}

function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);




//Det här ska användas för att få ut koordinaterna?
var map;
function init_map() {
    var opts = { 'center': new google.maps.LatLng(35.567980458012094,51.4599609375), 'zoom': 5, 'mapTypeId': google.maps.MapTypeId.ROADMAP }
    map = new google.maps.Map(document.getElementById('map'), opts);

    google.maps.event.addListener(map,'click',function(event) {
        document.getElementById('latlongclicked').value = event.latLng.lat()
        document.getElementById('lotlongclicked').value =  event.latLng.lng()
    });

    google.maps.event.addListener(map,'mousemove',function(event) {
        document.getElementById('latspan').innerHTML = event.latLng.lat()
        document.getElementById('lngspan').innerHTML = event.latLng.lng()
    });

}
google.maps.event.addDomListener(window, 'load', init_map);
console.log ();
*/



//Ett annat sätt för att få ut koordinaterna, men vet inte riktigt hur den ska användas.

//function initMap() {
//    var chicago = new google.maps.LatLng(41.850, -87.650);
//    var chicago = new google.maps.LatLng(41.850, -87.650);
//    var map = new google.maps.Map(document.getElementById('map'), {
//        center: chicago,
//        zoom: 3
//    });
//    });
//    var coordInfoWindow = new google.maps.InfoWindow();
//    coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
//    coordInfoWindow.setPosition(chicago);
//    coordInfoWindow.open(map);
//    coordInfoWindow.open(map);
//    map.addListener('zoom_changed', function() {
//        coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
//        coordInfoWindow.open(map);
//    });
//}
//}
//var TILE_SIZE = 256;
//var TILE_SIZE = 256;
//function createInfoWindowContent(latLng, zoom) {
//    var scale = 1 << zoom;
//    var scale = 1 << zoom;
//    var worldCoordinate = project(latLng);
//    var worldCoordinate = project(latLng);
//    var pixelCoordinate = new google.maps.Point(
//        Math.floor(worldCoordinate.x * scale),
//        Math.floor(worldCoordinate.y * scale));
//        Math.floor(worldCoordinate.y * scale));
//    var tileCoordinate = new google.maps.Point(
//        Math.floor(worldCoordinate.x * scale / TILE_SIZE),
//        Math.floor(worldCoordinate.y * scale / TILE_SIZE));
//        Math.floor(worldCoordinate.y * scale / TILE_SIZE));
//    return [
//        'Chicago, IL',
//        'LatLng: ' + latLng,
//        'Zoom level: ' + zoom,
//        'World Coordinate: ' + worldCoordinate,
//        'Pixel Coordinate: ' + pixelCoordinate,
//        'Tile Coordinate: ' + tileCoordinate
//    ].join('<br>');
//}
//}
//function project(latLng) {
//    var siny = Math.sin(latLng.lat() * Math.PI / 180);
//    var siny = Math.sin(latLng.lat() * Math.PI / 180);
//    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
//    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
//    return new google.maps.Point(
//        TILE_SIZE * (0.5 + latLng.lng() / 360),
//        TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
//}



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}