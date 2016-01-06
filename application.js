/*Created 2015-02-28 by CodeCloud Team*/

$(document).ready(function(){
    init();
    $(".scroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top-85 } , 500);
    });
});

function inti(){
    $('#read_privacy').click(function(e){
        e.preventDefault();
        $(".modal").modal();
    });
    
    
    $('#open_menu').click(function(){
        $('#menu').slideDown();
        $(this).hide();
        $('#close_menu').show();
    });
    
    $('#close_menu').click(function(){
        $('#menu').slideUp();
        $(this).hide();
        $('#open_menu').show();
    });
}