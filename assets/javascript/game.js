document.getElementById("number-to-guess").innerHTML = [Math.floor(Math.random() * 121)+19];

// need a function that will pick and display the random number on clicking each shape
// var crystal = [Math.floor(Math.random() * 13)];
    // $("#blue-hexagon").on("click", 
    // the above code is needed, however, need to determine what function should happen when this shape is clicked
    // the code below is needed for our buttons, this is the math needed for random numbers
    // [Math.floor(Math.random() * 13)];
$(".crystal").on("click", function () {
    (Math.floor(Math.random() * 13));


console.log($(this));

});



// $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
