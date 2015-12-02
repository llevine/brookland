$(document).ready(function(){
	if ($(".dot_divider").css("visibility") == "hidden" ){
       $('#white_circle_container').insertBefore('#book_cover');
       $('#color_divider').appendTo('#main_content');
       $('#social_media_container').insertAfter('#header');
       $('#contact').insertBefore('#color_divider');
       $('.dot_divider').css({"visibility": "hidden", "display": "block"});
       // alert("mobile");    
    }
 	else {
 		// alert('desktop');
 	}
}); 