



    document.getElementById("img1").setAttribute("src",images. WeatherDemo.rainbow);
    document.getElementById("clothes1").setAttribute("src",images. WeatherDemo.fashion);


    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentPosition.lat + "&lon=" + currentPosition.lng + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log(url);
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText)
    var temp = data.main.temp;
    var clouds = data.clouds.all;
    var wind = data.wind.speed;

    console.log(temp);
    console.log(clouds);
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("clouds").innerHTML = clouds;
    document.getElementById("wind").innerHTML = wind;



console.log("testing testing");
console.log(currentPosition);
console.log("testing testing");

























