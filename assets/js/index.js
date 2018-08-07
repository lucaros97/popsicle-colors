$(document).ready(function () {
    $(".color-item").click(function(e) {
      // myFunction( $(this).attr('value') )
    });
    var clipboard = new ClipboardJS('.color-item');
    clipboard.on('success', function(e) {
      popupCopied(e.text);
    });
    clipboard.on('error', function(e) {
      console.log(e);
    });
})

function popupCopied( _text ) {
  $(".message-flag").each(function(e){
    $(this).remove();
  })
  $("body").append('\
  <div class="message-flag"><div class="message"><i class="fas fa-check-circle text-success"></i> '+_text+' Successfully Copied</div></div>\
  ');

  setTimeout(function(){
    $(".message-flag").remove();
  }, 3000);
}
