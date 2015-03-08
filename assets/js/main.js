$(document).ready(function(){
	$(".home-slider .owl-carousel").owlCarousel({
    loop:true,  
    nav:true,
    dots: true,
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

});