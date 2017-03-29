
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+ currentPosition.lat + "&lon=" + currentPosition.lng + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log(url);
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText)
    var temp = data.main.temp;
    var clouds = data.clouds.all;
    var wind = data.wind.speed;
    var Country = data.sys.country;
    var City = data.name;
    console.log(Country + City);
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/Log/" + Country + "/" + City, false);
    xhttp.send();

    console.log(temp);
    console.log(clouds);
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("clouds").innerHTML = clouds;
    document.getElementById("wind").innerHTML = wind;

    if (temp > 0){
        alert("DET ÄR FÖR VARMT FÖR VINTERJACKA NU, PÅ MED SHORTS");
    }
}

console.log("testing testing");
console.log(currentPosition);
console.log("testing testing");

























