$(window).on('scroll',function(){
	if($(window).scrollTop() > 100){
		$('nav').addClass('black');
	}else{
		$('nav').removeClass('black');
	}
});

$(document).ready(function(){
  $("#hovere").mouseenter(function(){
    $(".fa").hide("slow");
  });
});

/*$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});*/
