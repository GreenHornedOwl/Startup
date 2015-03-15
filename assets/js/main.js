$(document).ready(function(){
    

	$(".home-slider .owl-carousel").owlCarousel({
    loop:true,  
    nav:false,
    dots: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        480:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
   });
    $(".summerwear a").on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("checked");
    });
    mobileFilter()
    $(window).resize(function(){        
        mobileFilter();
    });
  
    function mobileFilter() { 
        var width = $(window).width();
        var open = false;
            if (width < 768) {  
                   $(".filter-vertical .filter-list").hide(); 
                   $(".filter-header").on("click",function(){    
                       if (!open ) {                             
                                $(".filter-vertical .filter-list").stop(true,true).slideDown("slow");
                                open = true;                                 
                            
                       } else {                           
                            $(".filter-vertical .filter-list").stop(true,true).slideUp("slow");
                            open = false;                           
                        } 
                    });                        
            } else {
                $(".filter-vertical .filter-list").show();
                open = false;                
            }
    }
    

});