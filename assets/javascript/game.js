$(document).ready(function() {
	var targetNumber;
	var counter;
	var values = [];
	var wins = 0;
	var losses = 0;
	

	function readyNumber() {
		targetNumber = Math.floor((Math.random() * 50) + 19);
		$(".target-score").html(targetNumber);
		setValues();
		counter = 0;
		$(".score-space").html(counter);
		$("#wins").html(wins);
		$("#losses").html(losses);
	};

	function setValues() {
		$(".crystal-space").empty();
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

	$(document).on("click",".crystal",function() {
		var crystalValue = ($(this).attr("value"));
		crystalValue = parseInt(crystalValue);
		counter += crystalValue;
		$(".score-space").html(counter);

		if (counter === targetNumber) {
			wins++;
			readyNumber();
		} 
		else if (counter > targetNumber) {
			losses++;			
			readyNumber();			
		}
	});

})	
