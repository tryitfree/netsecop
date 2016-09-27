$(function() {

	var sliderItemNum=1; //start project number
	var projectTotalNum=$("#project-slider li").length; //total project number
	var s=1;
	var str;
	var i;
	var r;
	var pos;
	var p;

	/*var loaderAnimation = $("#loader").LoaderAnimation();
	$.html5Loader({
			getFilesToLoadJSON: '/mrtajans//osmanli-new-av/files/js/files.js',
			onComplete			: function () { urlWatch(); },
			onUpdate				: loaderAnimation.update
	});	*/
	
	function urlWatch(){
		$("#project-slider li").each(function(i,d) {
			/*$(this).append($("<div>",{ class:"item-bg", style:"background:url("+ $(this).attr("rel") +") no-repeat center top; position:absolute;" }));
			$(this).children(".item-bg").css({ opacity:0 });*/
			
			
			$(".slider-item-point ul").append($("<li>").click(function(){
					clearTimeout(p);
					runIt($(this).index());
				})
			);

		});
		//$("#project-slider li:nth-child("+sliderItemNum+") .item-bg").css({ opacity:1 });
	}

	//slider process
	function mdSlider(w,h,n,p) {
		if(sliderItemNum!=n){
			//close
			$("#project-slider li:nth-child("+sliderItemNum+") .screen div").each(function(i,d) {
				$(this).stop().animate({
					//"top":""+300+"px",
					"opacity":0
					//rotate:"30"
				},{
                    duration: 500*(i+1),
					//duration: "slow",
                    easing: "easeOutQuad"
                }, function(){
					$(this).hide();
				});
			});
			//$("#project-slider li:nth-child("+sliderItemNum+") .item-bg").stop().animate({ opacity:0 },500);
			//alert(sliderItemNum);
			
			sliderItemNum=n;
			mdSlider($(window).width(),$(window).height(),sliderItemNum,"open");
			
		}else if(p!="close"){
			
			$("#project-slider li").each(function(i,d) { $("#project-slider li").css({ "z-index":"0" }); });
			$("#project-slider li:nth-child("+sliderItemNum+")").css({ "z-index":"9999" });
			
			//open
			//$("#project-slider li:nth-child("+sliderItemNum+") .item-bg").stop().animate({ opacity:1 },800);
																			
			$("#project-slider li:nth-child("+sliderItemNum+")").show();
			$("#project-slider li:nth-child("+sliderItemNum+") div").show();
	
			boxControl(sliderItemNum);
			
			$("#project-slider li:nth-child("+sliderItemNum+") .screen div").each(function(i,d) {
				var str = $("#project-slider li:nth-child("+sliderItemNum+") .screen div:nth-child("+[i+1]+")").attr("rel");
				var substr = str.split(",");
				for (var r=1; r<substr.length; r++) {

					if(substr[3]=="top"){
						$("#project-slider li:nth-child("+sliderItemNum+") .screen div:nth-child("+[i+1]+")").css({
							"z-index":9999*-[i+1],
							"top":"1000px",
							"left":""+substr[1]+"px"
						}).stop().animate({
							"left":substr[1]+"px",
							"top":substr[2]+"px",
							"opacity":1
						},{
							duration: 500*[i+1],
							//duration: "slow",
							easing: "easeOutQuad"
						},function(){
							if([i]==substr.length){
								//finish
							}
							return false;
						});
					}else{
						$("#project-slider li:nth-child("+sliderItemNum+") .screen div:nth-child("+[i+1]+")").css({
							"z-index":9999*-[i+1],
							"top":"auto",
							"bottom":"-2000px",
							"left":""+substr[1]+"px"
						}).stop().animate({
							"left":substr[1]+"px",
							"top":"auto",
							"bottom":"-"+substr[2]+"px",
							"opacity":1
						},{
							duration: 500*[i+1],
							//duration: "slow",
							easing: "easeOutQuad"
						},function(){
							if([i]==substr.length){
								//finish
							}
							return false;
						});
					}
				}
			});
			
		}
	}
	
	function boxControl(process){
		$(".shelf").animate({ top:"-"+($(".shelf").height()-250)+"px" },{
				duration: 500,
				easing: "easeInSine",
				complete:function(){
					$(".shelf").stop().animate({ top:"0px" },{
							duration: 1400,
							easing: "easeOutSine"
						}
					);
				}
			}
		);
	}
	
	$("#project-slider .left-button").click(function(){
		clearTimeout(p);
		if(s==0){
			runIt(projectTotalNum-1);
		}else{
			runIt(s-1);
		}
	});
	
	$("#project-slider .right-button").click(function(){
		clearTimeout(p);
		if(s==projectTotalNum-1){
			runIt(0);
		}else{
			runIt(s+1);
		}
	});

	function runIt(process){
		s=process;
		/*$(".slider-item-point ul li").removeClass("active");
		$(".slider-item-point ul li:nth-child("+[process+1]+")").addClass("active");*/
		mdSlider($(window).width(),$(window).height(),process+1,"open");
		totalSlideItem=$("#project-slider ul li").length;
		if(process==(totalSlideItem-1)){ process=0; }else{ process=process+1; }
		p=setTimeout(function(){ runIt(process) },10000);
	}
	urlWatch();
	runIt(0);
	//slider process

});
















