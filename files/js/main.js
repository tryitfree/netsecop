$(function() {
	
	//----- form control
	$("input, textarea").each(function(a,d) {
									   
		if(($(d).val() == "") || ($(d).val() == undefined)) {
			if($(d).attr("auto") != "") {
				$(d).val($(d).attr("auto"));
			}
		}
		
	}).focus(function() {
		
		if($(this).val() == $(this).attr("auto")) {
			$(this).val("");
		}
		
	}).blur(function() {
		
		if($(this).val() == "") {
			$(this).val($(this).attr("auto"));
		}
		
	});					
	$("#signup, #login").click(function(){
																	   
		if(this.id=="signup"){
			var cont="controlto";
		}else{
			var cont="controllog";
		}
		
		retur=true;
		$("*").each(function() {
			if($(this).attr(cont) != undefined) {
				if($(this).val() == "") {
					retur = false;
					//$($(this).attr("controlto")).show();
					$(this).attr("class","r_n");
					//alert(this);
				} else {
					$(this).attr("class","r");
					//$($(this).attr("controlto")).hide();
				}
			}
		});
	
		if(this.id=="signup"){
		if($('#formCheck:checkbox:checked').val()){ retur = true; }else{
			retur = false;
			$(".check").attr("style","color:#FF0000");
		}
		}
		
		if(retur == false) {

		}else{
			if(this.id=="signup"){
				document.signupForm.submit();
			}else{
				document.loginForm.submit();
			}
		}
		
		return retur;
	});
	//----- form control

	//----- resize
	function resizeProcess(w,h) {
		$(".week-prev, .week-next").css({ "left":$(".calendar-main .col-sm-2").width()-50 +"px"});
	};
	resizeProcess($(window).width(),$(window).height());
	$(window).resize(function() {
		resizeProcess($(window).width(),$(window).height());
	});
	//----- resize
	
	//----- search active control
	var $searchControl=-1;
	$("li.search a").click(function () {
		if($searchControl!=1){
			var $this = $(this).parent(".search");
			$this.addClass("active");
			$searchControl=-1;
		}
	});
	$(".main, #myCarousel").click(function(){
		$("li.search").removeClass("active");
		$searchControl=-1;
	});
	//----- search active control
	
	//----- news
	var s=1;
	var newsContLiWidth=($(".news-cont").width()/3)+5;

	$(".news-slide").ready(function() {
		
		var q=0;

		$(".news-counter em").html($(".news-cont ul li").length);
		$(".news-cont ul").css({ width:($(".news-cont ul li").length+1)*newsContLiWidth });
		$(".news-cont ul li").css({ width:newsContLiWidth });

		$(".news .prev").click(function(){
			if(s==1){
				sliderControl($(".news-cont ul li").length-2);
			}else{
				sliderControl(Number(s-1));
			}
		});

		$(".news .next").click(function(){
			if(s==$(".news-cont ul li").length-2){
				sliderControl(1);
			}else{
				sliderControl(Number(s+1));
			}
		});
	});

	function sliderControl(process){
		
		$(".news-counter strong").html(process+"&nbsp;-&nbsp;"+(process+2)+"/");
		
		s=process;
		totalSlideWidth=(newsContLiWidth*(process-1));
		$(".news-cont").stop().animate({ left:"-"+totalSlideWidth+"px" }, 1000);
	}
	//----- news
	
	//----- installers timeline
	var p=1;
	var installersContLiWidth=($(".installers .row").width()/6);

	$(".installers").ready(function() {
		
		$(".installers .row ul").css({ width:($(".installers .row ul li").length+1)*installersContLiWidth });
		$(".installers .row ul li").css({ width:installersContLiWidth });

		$(".installers .prev").click(function(){
			if(p==1){
				installersControl($(".installers .row ul li").length-5);
			}else{
				installersControl(Number(p-1));
			}
		});

		$(".installers .next").click(function(){
			if(p==$(".installers .row ul li").length-5){
				installersControl(1);
			}else{
				installersControl(Number(p+1));
			}
		});
	});

	function installersControl(process){
		p=process;
		totalInstallersSlideWidth=(installersContLiWidth*(process-1));
		$(".installers .row ul").stop().animate({ left:"-"+totalInstallersSlideWidth+"px" }, 1000);
	}
	//----- installers timeline
	
	//----- history timeline
	var k=1;
	var historyContLiWidth=($(".since .row").width()/12);

	$(".since").ready(function() {
		
		$(".since .row ul").css({ width:($(".since .row ul li").length+1)*historyContLiWidth, left:"80px", right:"80px" });
		$(".since .row ul li").css({ width:historyContLiWidth });

		$(".since .prev").click(function(){
			if(k==1){
				historyControl($(".since .row ul li").length-10);
			}else{
				historyControl(Number(k-1));
			}
		});

		$(".since .next").click(function(){
			if(k==$(".since .row ul li").length-10){
				historyControl(1);
			}else{
				historyControl(Number(k+1));
			}
		});
	});

	function historyControl(process){
		k=process;
		totalHistorySlideWidth=(historyContLiWidth*(process-1));
		
		if(process==1){
			$(".since .row ul").stop().animate({ left:"80px" }, 1000);
		}else{
			$(".since .row ul").stop().animate({ left:"-"+totalHistorySlideWidth+"px" }, 1000);
		}
	}
	
	$(".since .row ul li").click(function () {
		$(".since .row ul li").removeClass("active");
		$(".since .history-text-box").remove();
		
		var $this = $(this);
		$this.addClass("active");
		//$(".since").append($("<div>",{ class:"history-text-box", html:""+$this.find("p").html()+"<div class='hb-close'></div>" }));
		console.log($this.find("p").html());
		$(".since").prepend($("<div>", { class:"history-text-box", html:""+$this.find("p").html()+"<div class='hb-close'></div>" }));
		$(".since .hb-close").click(function () {  $(".since .history-text-box").remove(); $(".since .row ul li").removeClass("active");  });
	});
	$(".since .row ul li:nth-child(2)").trigger('click');
	//----- history timeline
	
	//----- events timeline
	var k=1;
	var eventsContLiWidth=($(".events .row").width()/5);

	$(".events").ready(function() {
		
		$(".events .row ul").css({ width:($(".events .row ul li").length+1)*eventsContLiWidth, left:"80px", right:"80px" });
		$(".events .row ul li").css({ width:eventsContLiWidth });

		$(".events .prev").click(function(){
			if(k==1){
				eventsControl($(".events .row ul li").length-4);
			}else{
				eventsControl(Number(k-1));
			}
			eventsClose();
		});

		$(".events .next").click(function(){
			if(k==$(".events .row ul li").length-4){
				eventsControl(1);
			}else{
				eventsControl(Number(k+1));
			}
			eventsClose();
		});
	});

	function eventsControl(process){
		k=process;
		totalEventsSlideWidth=(eventsContLiWidth*(process-1));
		
		if(process==1){
			$(".events .row ul").stop().animate({ left:"80px" }, 1000);
		}else{
			$(".events .row ul").stop().animate({ left:"-"+totalEventsSlideWidth+"px" }, 1000);
		}
	}
	
	$(".events .row ul li").click(function () {
		$(".events .row ul li").removeClass("active");
		$(".events .events-text-box").remove();
		
		var $this = $(this);
		$this.addClass("active");
		$(".events").prepend($("<div>", { class:"events-text-box", html:"<h4>"+$this.find("h4").html()+"</h4><h5>"+$this.find("h5").html()+"</h5><p>"+$this.find("p").html()+"</p><div class='hb-close'></div>", style:"left:"+$this.offset().left+"px" }));
		$(".events .hb-close").click(function () {  eventsClose();  });
	});
	//$(".events .row ul li:nth-child(2)").trigger('click');
	
	function eventsClose(){
		$(".events .events-text-box").remove();
		$(".events .row ul li").removeClass("active");
	}
	//----- since timeline
	
	//----- general
	//----- general
	
	//----- scroll down
	$(window).scroll(function(){
		// Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
		if($(window).scrollTop() > 0){
			// If it's more than or equal to 0, show the toTop button.
			//console.log("is more");
		}else{
			// If it's less than 0 (at the top), hide the toTop button.
			//console.log("is less");
		}
	});
	//----- scroll down
	
	//----- timeline active control
	//----- timeline active control

	
});







