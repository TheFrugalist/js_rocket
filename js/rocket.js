var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	
	countdownNumber = 10;
	clearInterval(timer);
	document.getElementById(
				'countdown').innerHTML = 
				countdownNumber;

	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber 
				- 1;
			document.getElementById(
				'countdown').innerHTML = 
				countdownNumber;
			
			if (countdownNumber <= -1) {
				changeState(3);
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random() * 10);

			console.log('randomNumber:', randomNumber)

			if (randomNumber > 5) {
				//rocket launch success
				changeState(4);

			} else {
				//rocket launch failure
				changeState(5);

			}
		}, 2000);
	};

}