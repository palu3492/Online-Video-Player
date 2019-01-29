
var iframeContainer = $("#iframe-container");
iframeContainer.resizable({
aspectRatio: 16 / 9,
maxHeight: 1080,
maxWidth: 1920,
minHeight: 230,
minWidth: 400,
handles: "se"
});

iframeContainer.hover(handlerIn);
$("#iframe22").hover(handlerIn);

function handlerIn(){
	if($("#iframe-container")[0].classList.value === 'ui-resizable ui-resizable-resizing'){
		$("#iframe22").addClass('iframe-resize');
	} else {
        $("#iframe22").removeClass('iframe-resize');
	}
}
