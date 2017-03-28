
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric", false);
    xhttp.send();

    var tempdata = xhttp.responseText;
    var potato = JSON.parse(tempdata)
    var lucas = potato.main.temp;
    var jesus = potato.main.temp_max;
    var hades = potato.main.temp_min;

    console.log(jesus);
    console.log(potato);
    document.getElementById("kartoffel").innerHTML = lucas;
    document.getElementById("jesus").innerHTML = jesus;
    document.getElementById("hades").innerHTML = hades;

    if (jesus > 0){
        alert("DET ÄR FÖR VARMT FÖR VINTERJACKA NU, PÅ MED SHORTS");
    }
}


























