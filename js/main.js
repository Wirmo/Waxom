$(document).ready(function(){
    /* Видео */
    var button = $('#presentationButton');
    var block  = $('#block');
    var inner = $('#inner');
    button.click(function(){
        document.getElementById('presentationVideo').play();
        block.fadeOut(300);
        inner.css('background', 'none');
    });
});