// Create MegaMan

// Creating the timer

	// Initializing the timer

	document.addEventListener("onKeyPress", function() {
		var elapsedTime;
		var startTime;
		var endTime;
		var date = new Date();

		startTime = Date.getHours() + ":" + Date.getMinutes() + ":" + Date.getSeconds();
		endTime = {

		}
		
		elapsedTime = endTime - startTime;

		// Displays the elapsed time in the input box

		var timer = getDocumentById("timer"); {
			timer.value = elapsedTime;
		}
	});
