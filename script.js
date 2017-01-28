	var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
	var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?) - aka find out the loop count
	var loopCount = 5;

// Keep track of which band we're on in the loop

	for (i = 0; i < bands.length; i++) {
	var currentBand = bands[i];
	console.log("Current Band:", currentBand);
	}

// Keep track of which veggie we're on in the loop
// var currentVeggie = "";

	for (j = 0; j < vegetables.length; j++) {
	var currentVeg = vegetables[j];
	console.log("Current Vegetable:", currentVeg);
	}

// Get a reference to the appropriate DOM element for bands

	var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables

	var veggieElement = document.getElementById("vegetables");

// Start looping
// Add the band names into the correct <div>
	for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	  currentBand = bands[loopTracker];
	  bandElement.innerHTML += "<div>" + currentBand + "</div>";
	  console.log("Current Band:", currentBand);
	}

// currentVeggie = ???;
// Add the vegetable names into the correct <div>
	for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	  currentVegetable = vegetables[loopTracker];
	  veggieElement.innerHTML += "<div>" + currentVegetable + "</div>";
	  console.log("Current Vegetable", currentVegetable);
	} 