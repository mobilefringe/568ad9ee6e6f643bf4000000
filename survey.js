$(document).ready(function(e){
    function renderStores(){
        var stores = getStoresList();
        renderStoreList('#store_list_container','#store_list_template', stores);
        $(".custom_checkbox").change(function() {
            updateCounter();
        });
        $('.show_all').click(function(){
            $('.alpha_list').fadeIn()
        });
        $('form[name="survey_form"]').validator().on('submit', function(e){
            if (e.isDefaultPrevented()) {
                alert("Please ensure that all marked fields are properly completed.");
            } else {
                e.preventDefault();
                var data = {};
                data['json'] = JSON.stringify($('form[name="survey_form"]').serializeArray());
                submitContest(data);
                return false;
            }
        });
    }
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},300);
                    
            }
            
        }); 
    
    });
    
   loadStores(renderStores);
});

function updateCounter(){
    var len = $('.custom_checkbox:checked').length;
    if(len>0){$("#number_stores").text(len);}else{$("#number_stores").text('0');}
}

function submitContest(data) {

        // $.ajax({
        //     url: "http://retailmaverick.mallmaverick.com/contests/retailmaverick-rm-store-list-survey y/json_entry",
        //     type: "POST",
        //     dataType: "json",
        //     data: data,
        //     success: function(data) {
        //         console.log(data);
        //     },
        //     error: function(data){
        //         alert("There was an issue with submitting the contest entry. Please try again at a later time.")
        //     }
        // });
    }







