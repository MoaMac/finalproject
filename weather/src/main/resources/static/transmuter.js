var img1;
var img2;
var img3;
var img4;
var img5;

var message;

// if really cold
if (temp < -10) {
    img1 = "img/049-kitchen.svg";
    img2 = "img/036-snowing.svg";
    img3 = "img/036-snowing.svg";
    img4 = "img/036-snowing.svg";
    img5 = "img/036-snowing.svg";
    message = "omg omg omg Winter is HERE!!!"
}

// if below zero but not freeezing
if (-10 < temp < 0) {
    img1 = "img/022-christmas.svg";
    img2 = "img/036-snowing.svg";
    img3 = "img/036-snowing.svg";
    img4 = "img/036-snowing.svg";
    img5 = "img/036-snowing.svg";
    message = "Sooo Cold, wear something really warm!";
}

// if just above zero and grey
if (0 < temp < 5) {
    img1 = "img/048-cloud.svg";
    img2 = "img/014-christmas-1.svg";
    img3 = "img/017-vest.svg";
    img4 = "img/009-jacket-3.svg";
    img5 = "img/019-gloves.svg";
    message = "Boring, cold weather. Wear something warm and colorful.";
}

// if just above zero and partly sunny
if (0 < temp < 5 && cloud < 75) {
    img1 = "img/048-cloud.svg";
    img2 = "img/024-shoe.svg";
    img3 = "img/017-vest.svg";
    img4 = "img/009-jacket-3.svg";
    img5 = "img/019-gloves.svg";
    message = "Boring, cold weather. Wear something warm and colorful.";
}

// if spring weather
if (5 < temp < 10 && cloud < 75) {
    img1 = "img/048-cloud.svg";
    img2 = "img/024-shoe.svg";
    img3 = "img/017-vest.svg";
    img4 = "img/005-jacket.svg";
    img5 = "img/028-fashion.svg";
    message = "Feels like spring today, but still pretty cold.";
}
// if spring weather
if (5 < temp < 10 && cloud < 50) {
    img1 = "img/041-sun.svg";
    img2 = "img/024-shoe.svg";
    img3 = "img/017-vest.svg";
    img4 = "img/005-jacket.svg";
    img5 = "img/028-fashion.svg";
    message = "Sun is shineing today. Bring your sun glasses!";
}

if (rain > 15) {
    img1 = "img/048-cloud.svg";
    img2 = "img/024-shoe.svg";
    img3 = "img/017-vest.svg";
    img4 = "img/005-jacket.svg";
    img5 = "img/028-fashion.svg";
    message = "Feels like spring today, but still pretty cold.";
}

// // if just above zero and raining
// if (0 < temp < 5 && rain > 0) {
//     img1 = "img/044-rain.svg";
//     img2 = "img/011-raincoat.svg";
//     img3 = "img/030-rainy.svg";
//     img4 = "img/043-umbrella.svg";
//     img5 = "img/022-christmas.svg";
//     message = "It's cold and rainy today, bring an umbrella! ";
// }


document.getElementById("img1").setAttribute("src", img1);
document.getElementById("img2").setAttribute("src", img2);
document.getElementById("img3").setAttribute("src", img3);
document.getElementById("img4").setAttribute("src", img4);
document.getElementById("img5").setAttribute("src", img5);
document.getElementById("message").innerHTML = message;
