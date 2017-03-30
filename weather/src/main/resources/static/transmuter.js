var img1;
var img2;
var img3;
var img4;
var img5;
var message;

function transmute(){
// if (rain === 0) {
// if really cold
    if (temp < -10) {
        img1 = "img/038-thermometer.svg"; //Termometerkall
        img2 = "img2/016-fashion-1.svg"; //Uggs
        img3 = "img/013-jacket-1.svg"; //Dunjacka
        img4 = "img3/003-sweater.svg"; //Tjocktröja
        img5 = "img2/019-fashion.svg"; //Sockor
        message = "Det är jättekallt du måste ha varma skor, uggs är att föredra med sockor i "
    }

// if below zero but not freeezing
    else if (-10 < temp < 0) {
        img1 = "img/042-snowflake.svg" //Snöflinga
        img2 = "img2/014-hat.svg"; //Mössa
        img3 = "img/010-boot.svg"; //Kängor
        img4 = "img2/015-christmas.svg"; //Halsduk
        img5 = "img2/024-mitten.svg"; //Vantar
        message = "Sooo Cold, wear something really warm!";
    }

// if just above zero and 5
    else if (0 < temp < 5) {
        img1 = "img/040-windy.svg"; //Windy
        img2 = "img3/004-boot.svg";  //Boots vid skask
        img3 = "img3/006-coat.svg"; //Kappa
        img4 = "img3/005-winter-hat.svg"; //Mössa
        img5 = "img3/002-clothes.svg"; //Handskar
        message = "Boring, cold weather. Wear something warm and colorful.";
    }

    else if (5 < temp < 10) {
        img1 =  "img/048-cloud.svg";//Cloud
        img2 = "static/img2/006-jacket.svg";//Jacka
        img3 = "img/028-fashion.svg"; //Keps
        img4 = "img3/008-jeans.svg"; //Jeans
        img5 = "img/017-vest.svg"; //Väst
        message = "Boring, cold weather. Wear something warm and colorful.";
    }
    else if (10 < temp < 17) {
        img1 = "img/045-rainbow.svg";
        img2 = "img3/010-skirt.svg";  //Kjol
        img3 = "img3/009-socks.svg"; //Strumpbyxor
        img4 = "img/024-shoe.svg";//Converse
        img5 = "img3/007-coat-1.svg"; //Trenchcoat
        message = "Boring, cold weather. Wear something warm and colorful.";
    }
    else if (17 < temp < 23) {
        img1 = "img/032-sea.svg"; //SOl
        img2 = "img2/011-dress.svg";  //Klänning
        img3 = "img2/007-denim-jacket.svg"; //denimjacket
        img4 = "img/015-fashion-2.svg"; //T-shirt
        img5 = "img/020-sunglasses.svg"; //Glasögon
        message = "Boring, cold weather. Wear something warm and colorful.";
    }
    else if (23 < temp < 40) {
        img1 = "img/032-sea.svg"; //Badväder
        img2 = "img/023-fashion-1.svg";  //Bikini
        img3 = "img/016-swimsuit.svg"; //Badshorts
        img4 = "img2/013-bride-dress.svg"; //Mössa
        img5 = "img/018-flip-flops.svg"; //Flipflopps
        message = "Boring, cold weather. Wear something warm and colorful.";
    }

// else{
//     img1 = "img/039-rain-1.svg"; //Regn
//     img2 = "img/011-raincoat.svg"; //Raincoat
//     img3 = "img/043-umbrella.svg"; //Umbrella
//     img4 = "img/030-rainy.svg"; // Gummistvölar
//     img5 = "img2/021-swimsuit.svg"; //Swimsuit
//     message = "Boring, cold weather. Wear something warm and colorful.";
// }
//     img1 = "img/048-cloud.svg";
//     img2 = "img/024-shoe.svg";
//     img3 = "img/017-vest.svg";
//     img4 = "img/005-jacket.svg";
//     img5 = "img/028-fashion.svg";
//     message = "Feels like spring today, but still pretty cold.";

// // if just above zero and partly sunny
// if (0 < temp < 5 && clouds < 75) {
//     img1 = "img/048-cloud.svg";
//     img2 = "img/024-shoe.svg";
//     img3 = "img/017-vest.svg";
//     img4 = "img/009-jacket-3.svg";
//     img5 = "img/019-gloves.svg";
//     message = "Boring, cold weather. Wear something warm and colorful.";
// }
//
// // if spring weather
// if (5 < temp < 10 && clouds < 75) {
//     img1 = "img/048-cloud.svg";
//     img2 = "img/024-shoe.svg";
//     img3 = "img/017-vest.svg";
//     img4 = "img/005-jacket.svg";
//     img5 = "img/028-fashion.svg";
//     message = "Feels like spring today, but still pretty cold.";
// }
// // if spring weather
// if (5 < temp < 10 && clouds < 50) {
//     img1 = "img/041-sun.svg";
//     img2 = "img/024-shoe.svg";
//     img3 = "img/017-vest.svg";
//     img4 = "img/005-jacket.svg";
//     img5 = "img/028-fashion.svg";
//     message = "Sun is shineing today. Bring your sun glasses!";
// }
//
// if (rain > 15) {
//     img1 = "img/048-cloud.svg";
//     img2 = "img/024-shoe.svg";
//     img3 = "img/017-vest.svg";
//     img4 = "img/005-jacket.svg";
//     img5 = "img/028-fashion.svg";
//     message = "Feels like spring today, but still pretty cold.";
// }
//
// // // if just above zero and raining
// // if (0 < temp < 5 && rain > 0) {
// //     img1 = "img/044-rain.svg";
// //     img2 = "img/011-raincoat.svg";
// //     img3 = "img/030-rainy.svg";
// //     img4 = "img/043-umbrella.svg";
// //     img5 = "img/022-christmas.svg";
// //     message = "It's cold and rainy today, bring an umbrella! ";
// // }

document.getElementById("img1").setAttribute("src", img1);
document.getElementById("img2").setAttribute("src", img2);
document.getElementById("img3").setAttribute("src", img3);
document.getElementById("img4").setAttribute("src", img4);
document.getElementById("img5").setAttribute("src", img5);
document.getElementById("message").innerHTML = message;
}