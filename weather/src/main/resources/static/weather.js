setTimeout(function loadPage() {
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

    var Country = data.sys.country;
    var City = data.name;
    console.log(Country + City);
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/Log/" + Country + "/" + City, false);
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
}, 500);

























