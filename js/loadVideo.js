document.addEventListener("DOMContentLoaded", function() { initialiseLoad(); }, false);

var srcInput;

function initialiseLoad() {
    srcInput = $("#src-input");
    var loadButton = $("#load-video");
    loadButton.click(loadClicked);
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