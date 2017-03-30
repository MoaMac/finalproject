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

// if just above zero and no rain
if (0 < temp < 5) {
    img1 = "img/021-winter-hat.svg";
    img2 = "img/036-snowing.svg";
    img3 = "img/036-snowing.svg";
    img4 = "img/036-snowing.svg";
    img5 = "img/036-snowing.svg";
    message = "Boring, cold weather. Wear something warm and colorful.";
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
