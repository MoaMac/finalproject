/*
 setTimeout(function loadPage() {
 console.log("################## RUNNING: setTimeout(function loadPage() { [...] ");
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentPosition.lat + "&lon=" + currentPosition.lng + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp; // Temperature in Celsius
 var clouds = data.clouds.all; // Cloudiness in %
 var wind = data.wind.speed; // wind speed in m/s
 var desc = data.weather[0].description;
 var rain = 0; // Rain volume for last 3 hours
 var h = "3h"; // a small hack to get around the '3h' key in the data
 if (data.rain)
 rain = data.rain.h;
 var snow = 0; // snow volume for last 3 hours
 if (data.snow)
 snow = data.snow.h;
 var humidity = data.main.humidity; // Humidity in %

 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);

 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }, 50);
 */

function loadStaticDestiniation(city) {
    console.log("*** City: " + city);
    switch (city) {
        case "Tokyo":
            loadLocation(35.703129, 139.729015);
            break;
        case "Svalbard":
            loadLocation(77.553604, 23.670272);
            break;
        case "Alaska":
            loadLocation(61.2180556, 149.9002778);
            break;
        case "London":
            loadLocation(51.5073509, -0.1277583);
            break;
        case "Barcelona":
            loadLocation(41.3850639, 2.1734035);
            break;
        case "California":
            loadLocation(36.778261, -119.4179324);
            break;
        default:
            alert("The city \"" + city + "\" is not pre-set.");
            break;
    }
}

/*
function loadLocation(lat, lon) {
    console.log("lat: ", lat, ", lon: ", lon);
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log("url: ", url);
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText);
    var temp = data.main.temp;
    var clouds = data.clouds.all;
    var wind = data.wind.speed;
    var country = data.sys.country;
    var city = data.name;

    console.log("country / city: ", country + " / " + city);
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/Log/" + country + "/" + city, false);
    xhttp.send();

    console.log("temp: ", temp);
    console.log("clouds: ", clouds);
    console.log("data: ", data);
  
    document.getElementById("temp").innerHTML = "Temp: " + temp + "° C";
    document.getElementById("clouds").innerHTML = "Cloudiness: " + clouds + " %";
    document.getElementById("wind").innerHTML = "Wind speed: " + wind + " m/s";
    transmute(temp);

    //console.log("testing testing");
    console.log("currentCoordinates: ", currentCoordinates);
    //console.log("testing testing");
}
*/

function loadLocation(coordinates) {
    console.log("LOGGING FROM forecast.js METHOD testing5dayForecast() START");
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log("url: ", url);
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText);

    // LOCATION INFORMATION
    var city = data.city;
    var cityCountry = city.country;
    var cityName = city.name;

    // WEATHER INFORMATION
    var list = data.list;
    var now = new Date(0); // The 0 there is the key, which sets the date to the epoch
    var monthDay = -1;
    var hour;
    var temp;
    var clouds;
    var wind;
    var weather;

    var stringJson = null;
    var newMonthDay = false;
    var firstDay = true;
    for (var i = 0; i < list.length; i++) {
        now = new Date(0);
        now.setUTCSeconds(list[i].dt);
        if (monthDay != -1) {
            if (monthDay != now.getUTCDate()) {
                newMonthDay = true;
            } else {
                newMonthDay = false;
            }
        }
        monthDay = now.getUTCDate();
        hour = now.getUTCHours();

        temp = list[i].main.temp;
        clouds = list[i].clouds.all;
        wind = list[i].wind.speed;
        weather = list[i].weather[0].main + ", " + list[i].weather[0].description;

        if (newMonthDay || firstDay) {
            firstDay = false;
            if (stringJson != null) {
                stringJson += "}],";
            } else {
                stringJson = "{";
            }

            stringJson += "\"MD" + monthDay + "\":[{\"H" + hour
                + "\":[{\"temp\":\"" + temp
                + "\",\"clouds\":\"" + clouds
                + "\",\"wind\":\"" + wind
                + "\",\"weatherdesc\":\"" + weather + "\"}]";
        } else {
            stringJson += ", \"H" + hour
                + "\":[{\"temp\":\"" + temp
                + "\",\"clouds\":\"" + clouds
                + "\",\"wind\":\"" + wind
                + "\",\"weatherdesc\":\"" + weather + "\"}]";
        }

        if(i == 0) {
            document.getElementById("city").innerHTML = "City: " + cityName + ", " + cityCountry;
            document.getElementById("temp").innerHTML = "Temp: " + temp + "° C";
            document.getElementById("clouds").innerHTML = "Cloudiness: " + clouds + " %";
            document.getElementById("wind").innerHTML = "Wind speed: " + wind + " m/s";
            transmute(temp);
        }
    }

    stringJson += "}]}";
    forecastData = stringJson;

    console.log("LOGGING FROM forecast.js METHOD testing5dayForecast() STOP");
}



/*
 function loadTokyo() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 35.703129 + "&lon=" + 139.729015 + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 console.log(desc);
 console.log(rain);
 console.log(snow);
 console.log(humidity);

 document.getElementById("temp").innerHTML = temp + "° C";
 document.getElementById("clouds").innerHTML = clouds + "% clouds";
 document.getElementById("wind").innerHTML = wind + " m/s";
 document.getElementById("desc").innerHTML = desc;
 if (rain > 0)
 document.getElementById("rain").innerHTML = rain;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }

 function loadSvalbard() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 77.553604 + "&lon=" + 23.670272 + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }

 function loadAlaska() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 61.2180556 + "&lon=" + 149.9002778 + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }

 function loadLondon() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + "51.5073509" + "&lon=" + "-0.1277583" + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }

 function loadBarcelona() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 41.3850639 + "&lon=" + 2.1734035 + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }

 function loadCalifornia() {
 var xhttp = new XMLHttpRequest();
 var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 36.778261 + "&lon=" + "-119.4179324" + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
 console.log(url);
 xhttp.open("GET", url, false);
 xhttp.send();

 var data = JSON.parse(xhttp.responseText)
 var temp = data.main.temp;
 var clouds = data.clouds.all;
 var wind = data.wind.speed;
 var country = data.sys.country;
 var city = data.name;

 console.log(country + city);
 xhttp = new XMLHttpRequest();
 xhttp.open("GET", "/Log/" + country + "/" + city, false);
 xhttp.send();

 console.log(temp);
 console.log(clouds);
 console.log(data);
 document.getElementById("temp").innerHTML = temp;
 document.getElementById("clouds").innerHTML = clouds;
 document.getElementById("wind").innerHTML = wind;

 console.log("testing testing");
 console.log(currentPosition);
 console.log("testing testing");
 }
 */