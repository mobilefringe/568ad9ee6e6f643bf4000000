/*Created 2015-02-28 by CodeCloud Team*/


$(document).ready(function(){
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset(-85).top } , 2000);
    } );
});