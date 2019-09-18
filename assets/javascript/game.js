// document.getElementById("number-to-guess").innerHTML = [Math.floor(Math.random() * 121) + 19];

// need a function that will pick and display the random number on clicking each shape


// $(".crystal").on("click", function () {
//     (Math.floor(Math.random() * 13));


// my work above

var targetNumber = Math.floor(Math.random() * 121) + 19;

  $("#number-to-guess").text(targetNumber);

// //   var counter = 0;

// // Now for the hard part. Creating multiple crystals each with their own unique number value.

// // We begin by expanding our array to include four options.
var numberOptions = Math.floor(Math.random() * 13)
    console.log(numberOptions);
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "assets/images/blue hexagon.jpg");
imageCrystal.attr("data-crystalvalue", numberOptions);
$("#crystals").append(imageCrystal);

var imageCrystal1 = $("<img>");
imageCrystal1.addClass("crystal-image");
imageCrystal1.attr("src", "assets/images/clear square.jpeg");
imageCrystal1.attr("data-crystalvalue", numberOptions);
$("#crystals").append(imageCrystal1);

var imageCrystal2 = $("<img>");
imageCrystal2.addClass("crystal-image");
imageCrystal2.attr("src", "assets/images/green heart.jpg");
imageCrystal2.attr("data-crystalvalue", numberOptions);
$("#crystals").append(imageCrystal2);

var imageCrystal3 = $("<img>");
imageCrystal3.addClass("crystal-image");
imageCrystal3.attr("src", "assets/images/pink diamond.jpeg");
imageCrystal3.attr("data-crystalvalue", numberOptions);
$("#crystals").append(imageCrystal3);