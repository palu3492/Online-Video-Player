document.addEventListener("DOMContentLoaded", function() { initialiseLoad(); }, false);

var srcInput;

function initialiseLoad() {
    srcInput = $("#src-input");
    var loadButton = $("#load-video");
    loadButton.click(loadClicked);
    $("#drop-down-button").click(dropButtonClick);
}

function loadClicked(){
    src = srcInput.val();
    // Check if can play
    // Load video
    // set src
}


function canPlayVideo(ext) {
    var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
    if (ableToPlay === '') return false;
    else return true;
}

function dropButtonClick(){
    var menu = $('#drop-down-menu');
    var button = $("#drop-down-button");
    var display = menu.css('display');
    if(display === 'none'){
        // change image
        menu.css('display', 'flex');
        button.css('background-image','url(images/pushUp.png)');
    } else {
        menu.css('display', 'none');
        button.css('background-image','url(images/dropDown.png)');
    }
}