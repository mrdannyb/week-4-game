$(document).ready(function() {
	var targetNumber;
	var counter;
	var values = [];
	var wins;
	var losses;
	

	function readyNumber() {
		targetNumber = Math.floor((Math.random() * 50) + 19);
		$(".target-score").html(targetNumber);
		setValues();
		counter = 0;
		$(".score-space").html(counter);
	};

	function setValues() {
		for (i = 0; i < 4; i++) {
			var imageCrystal = $("<img>");
			values[i] = Math.floor((Math.random() * 12) + 1);
			imageCrystal.addClass("crystal");
			imageCrystal.attr("src", "assets/images/crystal" + i + ".jpg");
			imageCrystal.attr("value", values[i]);
			$(".crystal-space").append(imageCrystal);
		}
	};

	readyNumber();

	$(".crystal").on("click", function() {
		var crystalValue = ($(this).attr("value"));
		crystalValue = parseInt(crystalValue);
		console.log(crystalValue);
		console.log(counter);
		counter += crystalValue;
		$(".score-space").html(counter);
	});

})	
