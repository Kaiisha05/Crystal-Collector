var counter;
var wins = 0;
var losses = 0;
var targetNumber;
var numbers = [];
//  make the images part of an array that we can reference later
var shapes = ["assets/images/blue hexagon.jpg", "assets/images/clear square.jpeg", "assets/images/green heart.jpg", "assets/images/pink diamond.jpeg"]
console.log(shapes);
// still need to images to be displayed on the screen
// need a function that will pick and display the random number on clicking each shape

// $(".crystal").on("click", function () {
//     (Math.floor(Math.random() * 13));


// my work above


targetNumber = Math.floor(Math.random() * 121) + 19;
console.log(targetNumber)
$("#number-to-guess").text(targetNumber);

// document.getElementById("number-to-guess").innerHTML = [Math.floor(Math.random() * 121) + 19];







// // Now for the hard part. Creating multiple crystals each with their own unique number value.
// var blue = 1
// var clear = 2
// var green = 3
// var pink = 4



// for (var i = 0; i < 4; i++) {
    // why do i have this variable twice?
    //    var imageCrystal = $("<div>");
    // imageCrystal.addClass("col-sm-3 A");

//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");


//     imageCrystal.attr("src", shapes[i]);

//     imageCrystal.attr("data-blue", numbers[i]);

//     $(".col").append(imageCrystal);


// }
// iterate through 4 numbers that are randomly selected between 1-12. Then assign those random numbers to the var numbers that will hold them as an array. Established the var numbers as an array by setting it equal to empty brackets
for (var s = 0; s < 4; s++) {
    var shapeNumbers = (Math.floor(Math.random() * 13) + 1);
    console.log(shapeNumbers);

    numbers.push(shapeNumbers);
    console.log(numbers);
}

// var imageCrystal1 = $("<img>");
// imageCrystal1.addClass("crystal-image");
// imageCrystal1.attr("src", "assets/images/clear square.jpeg");
// imageCrystal1.attr("data-crystalvalue", shapes);
// $("#crystals").append(imageCrystal1);

// var imageCrystal2 = $("<img>");
// imageCrystal2.addClass("crystal-image");
// imageCrystal2.attr("src", "assets/images/green heart.jpg");
// imageCrystal2.attr("data-crystalvalue", shapes);
// $("#crystals").append(imageCrystal2);

// var imageCrystal3 = $("<img>");
// imageCrystal3.addClass("crystal-image");
// imageCrystal3.attr("src", "assets/images/pink diamond.jpeg");
// imageCrystal3.attr("data-crystalvalue", shapes);
// $("#crystals").append(imageCrystal3);

$("data-blue").on("click", function () {
    var crystalValue = $((this).attr("data-blue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    document.getElementById("#game-tally").innerHTML = counter;
});


