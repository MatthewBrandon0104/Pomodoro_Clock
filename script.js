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

let btnPlay = document.getElementById('play'),
    btnPause = document.getElementById('pause'),
    btnPlus = document.getElementById('plus'),
    btnMinus = document.getElementById('minus'),
    btnReset = document.getElementById('reset');


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

btnPlus.addEventListener('click', () => {workSession++;});
btnMinus.addEventListener('click', () => {workSession--;});

btnReset.addEventListener('click', function() {
    min = workSession;
    sec = "0" + "0";
    if(isPlaying === true) {
        clearInterval(play);
        isPlaying = false;
        draw();
    } else { draw(); }
});

let sideNav = document.getElementById('side-nav'),
    main = document.getElementById('main');

function menuOpen() {
    sideNav.style.width = "250px";
    main.style.marginLeft = "250px";
}

function menuClose() {
    sideNav.style.width = "0";
    main.style.marginLeft = "0";
}

document.getElementById('close').addEventListener('click', () => { menuClose(); });
document.getElementById('open').addEventListener('click', () => { menuOpen(); });