
document.addEventListener("DOMContentLoaded", function() { initialiseResize(); }, false);
var innerContainer;
var mediaControls;
function initialiseResize() {
    innerContainer = $("#inner-container");
    mediaControls = $("#media-controls");
    setupResizable ();
}
function setupResizable () {
    // aspectRatio: 16 / 9
    innerContainer.resizable({
        aspectRatio: 16 / 9,
        maxHeight: 1080,
        maxWidth: 1920,
        minHeight: 230,
        minWidth: 400,
        handles: "se"
    });
    // innerContainer.hover(changeResizeClasses);
    // mediaControls.hover(changeResizeClasses);
}

function changeResizeClasses(){
    // Use moouse up down variable
    if(innerContainer[0].classList.value === 'ui-resizable ui-resizable-resizing'){
        mediaControls.addClass('iframe-resize');
    } else {
        mediaControls.removeClass('iframe-resize');
    }
}