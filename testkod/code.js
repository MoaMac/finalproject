
var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=30ae9cbe5da2955545ae212e144318e2&units=metric', true);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.responseText);
