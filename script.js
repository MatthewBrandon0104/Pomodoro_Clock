let min = 9,
    sec = 0;

function draw() {
    let display = `${min} : ${sec}`;
    document.getElementById('test').textContent = display;
}

let btnPlay = document.getElementById('play');
let btnPause = document.getElementById('pause');

function countDown() {
    sec--;
    draw()
}

let play;
btnPlay.addEventListener('click', function() {
    play = setInterval(countDown, 1000);
});

btnPause.addEventListener('click', function() {
    clearInterval(play); 
});