// JavaScript Document
$(window).load(function() { 
	$('#status').fadeOut();
	$('#preloader').delay(450).fadeOut('slow');

	//sub menu controller and window scrollTop
	/*$(".sub-menu").ready(function(){
		var strLink = window.location.hash;
		var res = strLink.split("#");
		$("html, body").stop().animate({
			scrollTop: [$("."+ res[1] +"").offset().top-180]
		}, 1800, "swing");
		
		$(".sub-menu li").removeAttr("class");
		for(var i=0; i<[$(".sub-menu li[rel="+ res[1] +"]").index()+1]; i++){
			$(".sub-menu li:nth-child("+ i +")").addClass("before");
			$(".sub-menu li[rel="+ res[1] +"]").addClass("active");
		}
	});*/
	//------------------
	
});
window.onbeforeunload = confirmExit;
function confirmExit() { 
	$('#status').fadeIn( "slow" );
	$('#preloader').delay(0).fadeIn('slow');
}
