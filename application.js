/*Created 2015-02-28 by CodeCloud Team*/

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("scroll").click(function() {
   scrollToAnchor('id3');
});