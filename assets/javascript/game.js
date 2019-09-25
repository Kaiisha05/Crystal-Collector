var counter;
var wins = 0;
var losses = 0;
var targetNumber;
var numberChoices = [];
// var crystalNumber;
//  make the images part of an array that we can reference later
var shapes = ["assets/images/blue hexagon.jpg", "assets/images/clear square.jpeg", "assets/images/green heart.jpg", "assets/images/pink diamond.jpeg"]
console.log(shapes);

targetNumber = Math.floor(Math.random() * 121) + 19;
    //test that a random number is chosen 
    console.log(targetNumber);
    // display random number within html
    $("#number-to-guess").text(targetNumber);

// function to run the actual game
function startGame() {

    counter = 0;

    // iterate through 4 numbers that are randomly selected between 1-12. Then assign those random numbers to the var numbers that will hold them as an array. Established the var numbers as an array by setting it equal to empty brackets
    for (var s = 0; s < 4; s++) {

        var shapeNumbers = Math.floor(Math.random() * 13) + 1;
        // test that random numbers do show
        console.log(shapeNumbers);
        numberChoices.push(shapeNumbers);

        console.log(numberChoices);
    }
}

function determineResults() {

    if (counter === targetNumber) {
        // $("#results").text('You Win!')
        // try the 1st version, but if not go with the 2nd version
        // alert("You Win!");
        wins++;
        document.getElementById("wins-text").textContent = wins;
        // $("#wins-text").text(wins)

        counter = 0;
        $("#user-total").text(counter);

        startGame();
    }

    else if (counter > targetNumber) {
        alert("You lose!")
        // $("#results").text('You Lose!')
        // try the 1st version, but if not go with the 2nd version
        losses++;
        document.getElementById("losses-text").textContent = losses;

        counter = 0;
        $("#user-total").text(counter);

        startGame();
    }
}
$(document).ready(function () {
    startGame();
    for (var i = 0; i < 4; i++) {
        var crystalCol = $("<div>")
        crystalCol.addClass("col-sm-3");

        var crystalImage = $("<img>");
        crystalImage.addClass("crystal");

        crystalImage.attr("src", shapes[i]);

        crystalImage.attr("data-crystalnumber", numberChoices[i]);

        $(".row").append(crystalImage);
    }

    $(".crystals").on("click", function () {
        var crystalNumber = ($(this).attr("data-crsytalnumber"));

        crystalNumber = parseInt(crsytalnumber);

        counter += crystalNumber;
        console.log(crystalNumber);

        $("#user-total").text(counter);

        determineResults();
    });
})
     // still need to images to be displayed on the screen
    // need a function that will pick and display the random number on clicking each shape

    // $(".crystal").on("click", function () {
    //     (Math.floor(Math.random() * 13));


    // my work above






    // this should append the images


    // why do i have this variable twice?
    //    var imageCrystal = $("<div>");
    // imageCrystal.addClass("col-sm-3 A");

    //     var imageCrystal = $("<img>");
    //     imageCrystal.addClass("crystal-image");


    //     imageCrystal.attr("src", shapes[i]);

    //     imageCrystal.attr("data-blue", numbers[i]);




// }

// $(".col").append(shapes);
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

// $("data-blue").on("click", function () {
//     var crystalValue = $((this).attr("data-blue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;

//     document.getElementById("#game-tally").innerHTML = counter;
// });


