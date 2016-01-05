/*Created 2015-02-28 by CodeCloud Team*/


$(document).ready(function(){
    $('#read_privacy').click(function(e){
        e.preventDefault();
        $(".modal").modal();
    });
    
    $(".scroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top-85 } , 500);
    });
    
    $('#open_menu').click(function(){
        $('#menu').slideDown();
    })
});