// setTimeout(function timeOutFunction() { console.log("timeOutFunction()"); }, 50);

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

function loadLocation(coordinates) {
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric";
    xhttp.open("GET", url, false);
    xhttp.send();

    var data = JSON.parse(xhttp.responseText);

    // LOCATION INFORMATION
    var cityCountry = data.city.country;
    var cityName = data.city.name;

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
            
        //console.log("Month day: " + monthDay, " hour: ", hour, ": ", temp, "C ", clouds, "% ", wind, " m/s ", weather);
    }

    stringJson += "}]}";
    forecastData = JSON.parse(stringJson);
    setFiveDayForecast(forecastData);
}

function getRowNodes(rowNumber) {
    var nodesArray = [];
    var tempArray = document.getElementById("row" + rowNumber).childNodes;
    var index = 0;
    for(var j = 0; j < tempArray.length; j++) {
        node = tempArray[j];
        if(node.tagName == 'DIV') {
            nodesArray[index] = node;
            index++;
        }
    }
    return nodesArray;
}

function setMonthDays(forecastData) {
    var monthDays = [];
    var index = 0;
    for (var monthDay in forecastData) {
        monthDays[index] = monthDay;
        index++;
        //console.log("monthDay: " + monthDay);
        // console.log("Value: " + forecastData[monthDay]);
    }
    return monthDays;
}

function setFiveDayForecast(forecastData) {
    console.log("forecastData: ", forecastData);
    var monthDays = setMonthDays(forecastData);

    var monthDayData;
    var rowNodesAll = [getRowNodes(2), getRowNodes(3), getRowNodes(4), getRowNodes(5), getRowNodes(6)];
    for(var i = 0; i < rowNodesAll.length; i++) {
        rowNodesAll[i][0].innerHTML = monthDays[i];
        monthDayData = forecastData[monthDays[i]][0];

        var hours = [];
        var indexInner = 0;
        for (var hour in monthDayData) {
            hours[indexInner] = hour;
            indexInner++;
        }
        indexInner = 0;

/*
        var forLength = (hours.length < rowNodesAll[i].length) ? hours.length : rowNodesAll[i].length;

        for(var j = 0; j < forLength; j++) {
            var info = getSpecificForecastDataNumbers(monthDays[i], hours[j]);
            console.log("info: ", info);
            console.log("hours[j]: ", hours[j]);
            //console.log("%c info.temp: " + info.temp, 'background: #222; color: #bada55');
            if(j != 0) {
                rowNodesAll[i][j].innerHTML = info.temp;
            }  
        }
        */



        var forLength = (hours.length < rowNodesAll[i].length) ? hours.length : rowNodesAll[i].length;

        for(var j = 0; j < forLength; j++) {
            var info = getSpecificForecastDataNumbers(monthDays[i], hours[j]);
            //console.log("info: ", info);
            //console.log("hours[j]: ", hours[j]);
            //console.log("%c info.temp: " + info.temp, 'background: #222; color: #bada55');
            if(j != 0) {
                rowNodesAll[i][j].innerHTML = info.temp;
            }  
        }
    }

    averageTemp();
}

function setHours(forecastData, monthDay) {
    var hours = [];

    monthDayData = forecastData[monthDay][0];

    var indexInner = 0;
    for (var hour in monthDayData) {
        hours[indexInner] = hour;
        indexInner++;
    }

    return hours;
}

function averageTemp() {
    var monthDays = setMonthDays(forecastData);
    //var hours = setHours(forecastData, monthDays[0]);

    var data; 
    var hours;
    var arrayAll = [];
    var arrayTemp = [];
    for(var i = 0; i < monthDays.length; i++) {
        if(i == 0) {
            hours = setHours(forecastData, monthDays[i]);
            if(hours.length == 1) {
                arrayTemp[0] = forecastData[monthDays[i]][0][hours[0]][0];
                arrayAll[0] = arrayTemp;
            } else {
                for(var h = 0; h < hours.length; h++) {
                    if((h+1) < hours.length) {
                        data1 = forecastData[monthDays[i]][0][hours[h]][0];
                        data2 = forecastData[monthDays[i]][0][hours[h+1]][0];
                        avg = Math.round((Number(data1.temp) + Number(data2.temp))/2);
                        arrayTemp[h] = avg;
                    }
                }
                arrayAll[0] = arrayTemp;
                for(var g = 0; g < arrayTemp.length; g++) {
                    console.log("arrayTemp[g]: ", arrayTemp[g]);
                }
            }
        } else {
            arrayTemp = [];
            hours = setHours(forecastData, monthDays[i])
            for(var h = 0; h < hours.length; h++) {
                if(h > 1) {
                    // hours 06, 09, 12, 15, 18, 21
                    if((h+1) < hours.length) {
                        data1 = forecastData[monthDays[i]][0][hours[h]][0];
                        data2 = forecastData[monthDays[i]][0][hours[h+1]][0];
                        avg = Math.round((Number(data1.temp) + Number(data2.temp))/2);
                        arrayTemp[h] = avg;
                    }

                }
            }
            arrayAll[arrayAll.length-1] = arrayTemp;
            console.log("new array");
            for(var p = 0; p < arrayTemp.length; p++) {
                    console.log("arrayTemp[p]: ", arrayTemp[p]);
                }
        }
    }

    for(var i = 0; i < arrayAll.length; i++) {
        console.log("NEW arrayAll["+i+"]: ", arrayAll[i]);
        for(var j = 0; j < arrayAll[i].length; j++) {
            console.log("arrayAll["+i+"]["+j+"]: ", arrayAll[i][j]);
        }
    }
}