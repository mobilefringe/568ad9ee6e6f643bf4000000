/*Created 2015-02-28 by CodeCloud Team*/

function init(){
    
    $('#subForm').submit(function(e){
        e.preventDefault();
        if($("#agree_terms").is(':checked')){
            $.getJSON(
                this.action + "?callback=?",
                $(this).serialize(),
                function (data) {
                    if (data.Status === 400) {
                        alert("An error occured while processing your request. Please try again later.");
                    } else { // 200
                        $("#subscription_confirmed").fadeIn();
                        // $('#subscription_confirmed').delay(2000).fadeOut();
                        $('#subForm').trigger('reset');
                    }
            });
        }
        else{
            $("#agree_terms").focus();
            alert("Please agree to receive newsletter before continuing.")
        }
    });
    
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fade_in').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight()-300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window >= bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
    if($(window.location.hash).length >0){
        if(window.screen.width > 768){
            $("html, body").animate({scrollTop:$(window.location.hash).offset().top-85 }, 500);
        }else{
            $("html, body").animate({scrollTop:$(window.location.hash).offset().top }, 500);
        }
    }
    
    $('#read_privacy').click(function(e){
        e.preventDefault();
        bootbox.dialog({
            title: 'Privacy Policy',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem econum fugiat quo voluptas nulla pariatur?'
        }); 
    });
    
   
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu').slideToggle();
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