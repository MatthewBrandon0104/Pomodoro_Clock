let min = 9,
    sec = 0;

timerStart();

function draw() {
    let display = `${min} : ${sec}`;
    document.getElementById('test').textContent = display;
}

function timerStart() {
	if (sec < 10) {
  	 sec = "0" + sec;
  }
    if (min < 10) {
  	 min = "0" + min;
  }
    draw();
  
    setInterval(function() {
  	 sec--;
    if (sec < 0) {
    	sec = 59;
        min--;
    }
    if (sec < 10) {
    	sec = "0" + sec;
    }
    if (min < 10) {
    	min = "0" + min;
        min = min.toString();
        min = min.substring(min.length - 2);
    }
    draw();
    }, 1000);
}