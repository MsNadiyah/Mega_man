var start = document.getElementById("start");
	start.addEventListener("click", function(){
		// alert("button Works!");
	// this.disabled = true;
	var megaMan = function(){

		var img = document.getElementById('img');
		var spaces = document.getElementsByClassName('spaces');
			spaces[0].innerHTML = '<img src="images/mega_man_test.png">';

	};

	var moveMegaMan = function(){
		megaMan.update = function() {
		  if (Key.isDown(Key.UP)) this.moveUp();
		  if (Key.isDown(Key.LEFT)) this.moveLeft();
		  if (Key.isDown(Key.DOWN)) this.moveDown();
		  if (Key.isDown(Key.RIGHT)) this.moveRight();
};
	}

	megaMan();

});

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
