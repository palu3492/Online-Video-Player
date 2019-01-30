document.addEventListener("DOMContentLoaded", function() { initialiseProgress(); }, false);

var progressBar;
var progressBarContainer;
var progressBarHover;
var mouseDown = false;
var timeStamp;
var mediaTime;

function initialiseProgress() {
    var innerContainer = $("#inner-container");
    timeStamp = $("#hover-time-stamp");
    mediaTime = $("#media-time");
    progressBar = $("#progress-bar");
    progressBarHover = $("#hover-progress-bar");
    progressBarContainer = $("#progress-bar-container");
    progressBarContainer.on( "mousemove", function(e){ mouseMoveProgress(e) });
    progressBarContainer.on( "mouseleave", mouseLeaveProgress);
    progressBarContainer.on( "mousedown", function(e){ mouseDownProgress(); mouseMoveProgress(e); });
    innerContainer.on( "mousemove", function(e){ mouseMoveContainer(e) });
    $('body').on( "mouseup", mouseUpProgress);
    mediaPlayer[0].addEventListener('timeupdate', updateProgressBar, false);
}

function mouseMoveProgress(e){
    var offset = progressBarContainer.offset();
    var x = e.pageX - offset.left;
    progressBarHover.css('width', x);
    if (mouseDown){
        progressBar.css('width', x);
    }

    var duration = mediaPlayer[0].duration;
    var width = progressBarContainer.width();
    var seconds = (duration/width)*x;
    mediaTime.html(secondsToString(seconds));

    timeStamp.css('display', 'initial');
    timeStamp.css('left', x-15);
}

function secondsToString(seconds){
    seconds = parseInt(seconds);
    if(seconds > 60){
        var minutes = parseInt(seconds/60);
        seconds = seconds % 60;
        if (seconds < 10){
            return minutes.toString() +":0"+ seconds.toString()
        }
        return minutes.toString() +":"+ seconds.toString()
    } else {
        if (seconds < 10){
            return "0:0"+ seconds.toString()
        }
        return "0:"+ seconds.toString()
    }
}

function mouseLeaveProgress(){
    progressBarHover.css('width', 0);
    timeStamp.css('display', 'none');
}

function mouseDownProgress(){
    mouseDown = true;
    // go to that time
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

function updateProgressBar(){
    if(!mouseDown) {
        var currentTime = mediaPlayer[0].currentTime;
        var width = progressBarContainer.width();
        var multiply = width / mediaPlayer[0].duration;
        var newTime = currentTime * multiply;
        progressBar.css('width', newTime);
    }
}
