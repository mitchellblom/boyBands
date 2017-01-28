	var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
	var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?) - aka find out the loop count
	var loopCount = 5;

	if (bands.length > vegetables.length) {
		loopcount = bands.length;
	} else {
		loopcount = vegetables.length;
	}

// Keep track of which band we're on in the loop

	var currentBand = bands.loopcount;
	console.log("Current Band", currentBand);

// Keep track of which veggie we're on in the loop
// var currentVeggie = "";

	var currentVegetable = vegetables.loopcount;
	console.log("Current Vegetable", currentVegetable);

// Get a reference to the appropriate DOM element for bands

	var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables

	var veggieElement = document.getElementById("vegetables");

// Start looping
	for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

// Add the band names into the correct <div>
	  currentBand = bands[loopTracker];
	  bandElement.innerHTML += "<div>" + currentBand + "</div>";
	  console.log("Current Band", currentBand);
	}

// currentVeggie = ???;

	for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

// Add the vegetable names into the correct <div>
	  currentVegetable = vegetables[loopTracker];
	  veggieElement.innerHTML += "<div>" + currentVegetable + "</div>";
	  console.log("Current Vegetable", currentVegetable);
	}