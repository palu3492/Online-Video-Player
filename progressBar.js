document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var progressBar;
var progressBarContainer;
var progressBarHover;
var mouseDown = false;
var innerContainer;
var timeStamp;
function initialiseMediaPlayer() {
    innerContainer = $("#inner-container");
    timeStamp = $("#hover-time-stamp");
    progressBar = $("#progress-bar");
    progressBarHover = $("#hover-progress-bar");
    progressBarContainer = $("#progress-bar-container");
    progressBarContainer.on( "mousemove", function(e){ mouseMoveProgress(e) });
    progressBarContainer.on( "mouseleave", mouseLeaveProgress);
    progressBarContainer.on( "mousedown", function(e){ mouseDownProgress(); mouseMoveProgress(e); });

    innerContainer.on( "mousemove", function(e){ mouseMoveContainer(e) });
    $('body').on( "mouseup", mouseUpProgress);

    // mediaPlayer.addEventListener('play', function() {
    //     var btn = document.getElementById('play-pause-button');
    //     changeButtonType(btn, 'pause');
    // }, false);
    // mediaPlayer.addEventListener('pause', function() {
    //     var btn = document.getElementById('play-pause-button');
    //     changeButtonType(btn, play);
    // }, false);
    //
    // mediaPlayer.addEventListener('volumechange', function(e) {
    //     var btn = document.getElementById('mute-button');
    //     if (mediaPlayer.muted) changeButtonType(btn, 'unmute');
    //     else changeButtonType(btn, 'mute');
    // }, false);
}

function mouseMoveProgress(e){
    var offset = progressBarContainer.offset();
    var x = e.pageX - offset.left;
    progressBarHover.css('width', x);
    if (mouseDown){
        progressBar.css('width', x);
    }
    timeStamp.css('display', 'initial');
    timeStamp.css('left', x-15);

}
function mouseLeaveProgress(){
    progressBarHover.css('width', 0);
    timeStamp.css('display', 'none');
}

function mouseDownProgress(){
    mouseDown = true;
}

function mouseUpProgress(){
    mouseDown = false;
    timeStamp.css('display', 'none');
}

function mouseMoveContainer(e){
    if (mouseDown){
        mouseMoveProgress(e)
    }
}

function togglePlayPause() {
    var btn = document.getElementById('play-pause-button');
    if (mediaPlayer.paused || mediaPlayer.ended) {
        changeButtonType(btn, 'pause');
        mediaPlayer.play();
    }
    else {
        changeButtonType(btn, 'play');
        mediaPlayer.pause();
    }
}

function updateProgressBar() {
    progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
}