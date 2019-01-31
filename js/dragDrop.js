
$(document).ready(initialiseDnd);

var dndContainer;
var flexContainer;
function initialiseDnd() {
    var html = $('body');
    html.on('drop', function(){dropHandler(event)});
    html.on('dragover', function(){dragOverHandler(event)});
    html.on('dragleave', function(){dragLeaveHandler(event)});
    dndContainer = $('#drag-drop-container');
    flexContainer = $('#flex-container');

}

function dropHandler(event) {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
    event.stopPropagation();
    dndContainer.css('display', 'none');
    // console.log('File(s) dropped');
    //
    // if (event.dataTransfer.items) {
    //     // Use DataTransferItemList interface to access the file(s)
    //     for (var i = 0; i < event.dataTransfer.items.length; i++) {
    //         // If dropped items aren't files, reject them
    //         if (event.dataTransfer.items[i].kind === 'file') {
    //             var file = event.dataTransfer.items[i].getAsFile();
    //             console.log('... file[' + i + '].name = ' + file.name);
    //         }
    //     }
    // } else {
    //     // Use DataTransfer interface to access the file(s)
    //     for (var i = 0; i < event.dataTransfer.files.length; i++) {
    //         console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
    //     }
    // }
}

function dragOverHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('File(s) in drop zone');
    dndContainer.css('display', 'block');
}

function dragLeaveHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('File left drop zone');
    dndContainer.css('display', 'none');
}