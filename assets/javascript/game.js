$(document).ready(function() {
	var targetNumber;
	var counter = 0;
	var values = [];

	function readyNumber() {
		targetNumber = Math.floor((Math.random() * 50) + 19);
		$(".target-score").html(targetNumber);
		setValues();
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

})	
