setTimeout(function loadPage() {
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentPosition.lat + "&lon=" + currentPosition.lng + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
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
}, 50);

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
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("clouds").innerHTML = clouds;
    document.getElementById("wind").innerHTML = wind;

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
