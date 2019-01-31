document.addEventListener("DOMContentLoaded", function() { initialiseLoad(); }, false);

var srcInput;

function initialiseLoad() {
    srcInput = $("#src-input");
    var loadButton = $("#load-video");
    loadButton.click(loadClicked);
    $("#drop-down-button").click(dropButtonClick);
}

function loadClicked(){
    // mov plays as mp4
    var src = srcInput.val();
    var split = src.split('.');
    var videoExtension = split[split.length-1];
    if (canPlayVideo(videoExtension)){
        var source = mediaPlayer.find($('source'));
        source.attr("src", src);
        source.attr("type", 'video/' + videoExtension);
        mediaPlayer[0].load();
    } else {
        alert('Cannot play .' + videoExtension + " videos \n Next update will allow many more video files to be played")
    }
}


function canPlayVideo(ext) {
    var ableToPlay = mediaPlayer[0].canPlayType('video/' + ext);
    if (ableToPlay === '') return false;
    else return true;
}

function dropButtonClick(){
    var menu = $('#drop-down-menu');
    var button = $("#drop-down-button");
    var display = menu.css('display');
    if(display === 'none'){
        // change image
        menu.css('display', 'initial');
        button.css('background-image','url(images/pushUp.png)');
    } else {
        menu.css('display', 'none');
        button.css('background-image','url(images/dropDown.png)');
    }
}