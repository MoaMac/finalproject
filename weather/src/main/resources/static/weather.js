
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            saveLatLng()
            console.log("pos: ", pos);
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

function pushPosition(position){


}



var xhttplink = "http://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon" + lng + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric", false);

    xhttp.open("GET", xhttplink, false);
    xhttp.send();

    var tempdata = xhttp.responseText;
    var data = JSON.parse(tempdata)
    var temp_max = data.main.temp_max;
    var temp = data.main.temp;
    var description = data.weather[0].description;
    var clouds = data.clouds.all;
    var wind = data.wind.speed;
    var city = data.name;

    console.log(" Maximum temperature today is " + temp_max);
    console.log("The current temperature is " + temp);
    console.log("Description: " + description);
    console.log(clouds   + " % clouds today");
    console.log("Wind is " + wind + " m/s");
    console.log("City is " + city);

    document.getElementById("kartoffel").innerHTML = temp_max;

    if (temp > 0){
        alert("DET ÄR FÖR VARMT FÖR VINTERJACKA NU, PÅ MED SHORTS");
    }
}

// Vi behöver skapa metoder för att välja ut vissa specifika objekt
// ur det stora JSON-objektet. Tex vill vi kunna välja ut "temp", "description",
//"clouds", "wind", för ett specifikt mättillfälle.
//xhttp.open("GET", "http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1", false);

