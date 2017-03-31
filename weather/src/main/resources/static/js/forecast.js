/**
 * Created by Administrator on 2017-03-30.
 */

var forecastHours = ["00", "03", "06", "09", "12", "15", "18", "21"];
var forecastData = null;

// FUNCTIONS
function getSpecificForecastData(monthDay, hour) {
    console.log("LOGGING FROM forecast.js METHOD getSpecificForecastData() START");

    if (forecastData == null) {
        console.log("LOG forecast.js getSpecificForecastData(...): ERROR! No forecast data saved.");
        return;
    }

    monthDay = "MD" + monthDay;
    hour = "H" + hour;

    forecastData = JSON.parse(forecastData);

    var specificData = forecastData[monthDay][0][hour][0];
    var data = {
        "temp": specificData.temp,
        "clouds": specificData.clouds,
        "wind": specificData.wind,
        "weatherdesc": specificData.weatherdesc
    }

    console.log("DATA TEMP: ", data.temp);
    console.log("DATA CLOUDS: ", data.clouds);
    console.log("DATA WIND: ", data.wind);
    console.log("DATA WEATHER DESCRIPTION: ", data.weatherdesc);

    console.log("LOGGING FROM forecast.js METHOD getSpecificForecastData() STOP");
    return data;
}
/* TEMP SAVE
 function getSpecificForecastData(monthDay, hour) {
 console.log("LOGGING FROM forecast.js METHOD getSpecificForecastData() START");
 //if(forecastData == null) { console.log("LOG forecast.js getSpecificForecastData(...): ERROR! No forecast data saved."); }

 monthDay = 30;
 hour = 15;
 forecastData = {
 "30":[
 {
 "15": [
 {"temp": "1", "wind":"4.3"}
 ],
 "18": [
 {"temp": "5", "wind":"2.1"}
 ]
 }
 ]
 }
 var correctDate = forecastData[monthDay][0];
 console.log("correctDate: ", correctDate);

 var correctHour = correctDate[hour][0];
 console.log("correctHour: ", correctHour);

 var data = {
 "temp": correctHour.temp,
 "wind": correctHour.wind
 }

 console.log("DATA TEMP: ", data.temp);
 console.log("DATA WIND: ", data.wind);

 console.log("LOGGING FROM forecast.js METHOD getSpecificForecastData() STOP");
 return data;
 }
 */

function currentTimeForecast(coordinates) {
    console.log("LOGGING FROM forecast.js METHOD currentTimeForcast() START");

    var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log("url: ", url);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText);
    var cityCountry = data.city.country;
    var cityName = data.city.name;
    var listItemCurrentTime = data.list[0];
    var temp = listItemCurrentTime.main.temp;
    var clouds = listItemCurrentTime.clouds.all;
    var wind = listItemCurrentTime.wind.speed;
    var weatherMain = listItemCurrentTime.weather[0].main;
    var weatherDescription = listItemCurrentTime.weather[0].description;

    console.log("City, Country: ", cityName, ", ", cityCountry);
    console.log("Temp: ", temp, " C");
    console.log("Clouds: ", clouds, " %");
    console.log("Wind: ", wind, " m/s");
    console.log("Weather description: ", weatherMain, ", ", weatherDescription);

    console.log("LOGGING FROM forecast.js METHOD currentTimeForcast() STOP");
}

function testing5dayForecast(coordinates) {
    console.log("LOGGING FROM forecast.js METHOD testing5dayForecast() START");
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    console.log("url: ", url);
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText);
    console.log("data: ", data);

    // LOCATION INFORMATION
    var city = data.city;
    var cityCountry = city.country;
    var cityName = city.name;
    console.log("cityName: ", cityName, ", cityCountry: ", cityCountry);

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

        console.log("Month day: " + monthDay, " hour: ", hour, ": ", temp, "C ", clouds, "% ", wind, " m/s ", weather);

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
    }

    stringJson += "}]}";
    forecastData = stringJson;

    console.log("forecastData: ", forecastData);

    /*
     var utcSeconds = 1234567890;
     var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
     d.setUTCSeconds(utcSeconds);
     */

    console.log("LOGGING FROM forecast.js METHOD testing5dayForecast() STOP");
}