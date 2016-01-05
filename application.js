/*Created 2015-02-28 by CodeCloud Team*/


$(document).ready(function(){
    $(".modal").modal()
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top-85 } , 500);
    } );
});