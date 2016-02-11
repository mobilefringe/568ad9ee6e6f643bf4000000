/*Created 2015-02-28 by CodeCloud Team*/

function init(){
    
    $('#subForm').submit(function(e){
        e.preventDefault();
        if($("#agree_terms").is(':checked')){
            $.getJSON(
                this.action + "?callback=?",
                $(this).serialize()
            );
            var post_data = {}
            post_data.mailto = "rajbir@mobilefringe.com";
            post_data.subject = "RM Sign up";
            custom = {};
            custom.name = $('#full_name').val();
            custom.email = $('#email').val()
            custom.phone = $('#phone').val();
            custom.retailer = $('#retailer').val();
            post_data.custom = custom;
            console.log(post_data)
            $.post("http://home.mallmaverick.com/custom_email", post_data, function(data, status, xhr){
                if(status == "success"){
                    $("#subscription_confirmed").fadeIn();
                    $('#subForm').trigger('reset');
                }
                else{
                    alert("Unable to process your request. Please try again later.")
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
            if( bottom_of_window > bottom_of_object ){
                
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