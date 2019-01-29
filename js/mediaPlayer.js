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
}

function containerResize(){
    mediaPlayer.attr({
        width: innerContainer.width(),
        height: innerContainer.height()
    });
}