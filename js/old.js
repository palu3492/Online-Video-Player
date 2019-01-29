document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
var mediaPlayer;
var progressBar;
function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('media-video');
    mediaPlayer.controls = false;
    mediaPlayer.volume = 0.05;
    mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);

    mediaPlayer.addEventListener('play', function() {
        var btn = document.getElementById('play-pause-button');
        changeButtonType(btn, 'pause');
    }, false);
    mediaPlayer.addEventListener('pause', function() {
        var btn = document.getElementById('play-pause-button');
        changeButtonType(btn, play);
    }, false);

    mediaPlayer.addEventListener('volumechange', function(e) {
        var btn = document.getElementById('mute-button');
        if (mediaPlayer.muted) changeButtonType(btn, 'unmute');
        else changeButtonType(btn, 'mute');
    }, false);
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

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
}

function stopPlayer() {
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
}

function changeVolume(direction) {
    if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
    else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
    mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

function toggleMute() {
    var btn = document.getElementById('mute-button');
    if (mediaPlayer.muted) {
        changeButtonType(btn, 'mute');
        mediaPlayer.muted = false;
    }
    else {
        changeButtonType(btn, 'unmute');
        mediaPlayer.muted = true;
    }
}

function replayMedia() {
    resetPlayer();
    mediaPlayer.play();
}

function updateProgressBar() {
    progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
}

function resetPlayer() {
    progressBar.value = 0;
    mediaPlayer.currentTime = 0;
    changeButtonType(playPauseBtn, 'play');
}

function canPlayVideo(ext) {
    var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
    if (ableToPlay == '') return false;
    else return true;
}