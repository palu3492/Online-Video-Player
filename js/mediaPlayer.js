document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;
var innerContainer;
function initialiseMediaPlayer() {
    mediaPlayer = $('#media-video');
    mediaPlayer[0].controls = false;
    mediaPlayer[0].volume = 0.05;
    innerContainer = $("#inner-container");
    containerResize();
    innerContainer.on('resize', containerResize);
    innerContainer.hover(mouseInContainer, mouseOutContainer);

    // space should trigger pause/play
    $('#play-pause-button').click(togglePlayPause);
    // arrow keys back and forward should also do this
    $('#skip-back-button').click(function(){skipTen(true)});
    $('#skip-forward-button').click(function(){skipTen(false)});

    $('#mute-button').click(toggleMute);
    $('#full-screen-button').click(toggleFullScreen);

}

function mouseInContainer(){
    $('#media-controls').css('display', 'initial');
    $('.ui-icon').css('display', 'initial');
}

function mouseOutContainer(){
    $('#media-controls').css('display', 'none');
    $('.ui-icon').css('display', 'none');
}

function containerResize(){
    mediaPlayer.attr({
        width: innerContainer.width(),
        height: innerContainer.height()
    });
}

function togglePlayPause() {
    var playButton = $('#play-pause-button');
    if (mediaPlayer[0].paused || mediaPlayer[0].ended) {
        playButton.css('background', 'url(images/buttons/pause.svg)');
        mediaPlayer[0].play();
    }
    else {
        playButton.css('background', 'url(images/buttons/play.svg)');
        mediaPlayer[0].pause();
    }
}

function skipTen(back){
    var currentTime = mediaPlayer[0].currentTime;
    if(back){
        mediaPlayer[0].currentTime = currentTime - 10;
    } else {
        mediaPlayer[0].currentTime = currentTime + 10;
    }
}

function toggleMute() {
    var muteButton = $('#mute-button');
    if (mediaPlayer[0].muted) {
        muteButton.css('background', 'url(images/buttons/unmute.svg)');
        mediaPlayer[0].muted = false;
    }
    else {
        muteButton.css('background', 'url(images/buttons/mute.svg)');
        mediaPlayer[0].muted = true;
    }
}

function toggleFullScreen(){
    if(mediaPlayer[0].requestFullScreen){
        mediaPlayer[0].requestFullScreen();
    } else if(mediaPlayer[0].webkitRequestFullScreen){
        mediaPlayer[0].webkitRequestFullScreen();
    } else if(mediaPlayer[0].mozRequestFullScreen){
        mediaPlayer[0].mozRequestFullScreen();
    }
}


