let workSession = 25,
    shortBreak = 5,
    longBreak = 30,
    
    min = 9,
    sec = 5;

function draw() {
    let display = `${min} : ${sec}`;
    document.getElementById('test').textContent = display;
}

function countDown() {
    sec--;
    if (sec < 0) {
        sec = 59;
        min--;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    draw()
}

let play,
    isPlaying = false;

let btnPlay = document.getElementById('play');
let btnPause = document.getElementById('pause');

btnPlay.addEventListener('click', function() {
    if (isPlaying === true) {
        return;
    } 
    play = setInterval(countDown, 1000);
    isPlaying = true;
});

btnPause.addEventListener('click', function() {
    clearInterval(play);
    isPlaying = false;
});