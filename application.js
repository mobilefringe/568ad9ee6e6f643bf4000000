/*Created 2015-02-28 by CodeCloud Team*/

function init(){
    var offsetSize = 0;
    $("html, body").animate({scrollTop:$(window.location.hash).offset().top-offsetSize }, 500);
    
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

function scroll(){
    $(".scroll").click(function(e) {
        e.preventDefault();
        if(window.screen.width > 768){
            $('html,body').animate( { scrollTop:$(this.hash).offset().top-85 } , 500);
        }
        else{
            $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 500);
        }
    });
}