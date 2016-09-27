
$(function() {

	var timelinePopup=false;
	var timelinePopup;
	var $imgLength=0;
	var $imgInterspace=532;
	var $imgTop=0;
	var $imgLength=0;
	var nextControl=true;
	var $company, $year, $city, $share, $desc;

	$(".references li").on("click", function(){
		if(timelinePopup!=true && $(this).attr("rel")!="year"){
			projectTimelinePopup(true,$(this).attr("id"),$(this).parent("ul").attr("rel"));
		}
	});

	function projectTimelinePopup(process,index,name){

		var $this=$(".references ul[rel="+ name +"] #"+ [index] +"");
		var $thisImgList=[$this.attr("img")];
		
		timelinePopup=process;

		$('#contentScreen').delay(0).fadeIn("slow");

		$company="";
		$year="";
		$desc="";
		$desc_en="";
		$city="";
		$share="";
		
		str=$this.attr("year");

		if($this.attr("lang")=="tr"){
			$company="Şirket"
			if($this.attr("year")!=""){
				$year="<span><strong>Proje Tarihi</strong>"+ $this.attr("year") +"</span>";
				if($this.attr("rel")=="Umed88"){
					$desc=""+ $this.attr("year") +" yılında "+ $this.attr("company") +" kurumsal kimliğini oluşturduk."
				}else if(str.indexOf("-") > 0){
					$desc="Bugüne kadar "+ $this.attr("year") +" yılları arasında "+ $this.attr("dealer") +" "+ $this.attr("company") +" bayii kurumsal kimliğini oluşturduk."
				}else{
					$desc=""+ $this.attr("year") +" yılında "+ $this.attr("dealer") +" "+ $this.attr("company") +" bayii kurumsal kimliğini oluşturduk."
				};
			}else{ $year=""; }
			if($this.attr("city")!=""){ $city="<span><strong>Ülke</strong>"+ $this.attr("city") +"</span>"; }else{ $city=""; }
			$share="PAYLAŞ"
		}else if($this.attr("lang")=="en"){
			$company="Company"
			if($this.attr("year")!=""){
				$year="<span><strong>Year of Completion</strong>"+ $this.attr("year") +"</span>";
				if($this.attr("rel")=="Umed88"){
					$desc=""+ $this.attr("year") +" "+ $this.attr("company") +" dealers so far have created the corporate identity."
				}else if (str.indexOf("-") > 0){
					$desc="Between the years "+ $this.attr("year") +" "+ $this.attr("dealer") +" "+ $this.attr("company") +" dealers so far have created the corporate identity."
				}else{
					$desc=""+ $this.attr("year") +" "+ $this.attr("dealer") +" "+ $this.attr("company") +" dealers so far have created the corporate identity."
				};
			}else{ $year=""; }
			if($this.attr("city")!=""){ $city="<strong>Country</strong>"+ $this.attr("city") +"</span>"; }else{ $city=""; }
			$share="SHARE"
		}else{
			$company="Компания"
			if($this.attr("year")!=""){
				$year="<span><strong>Период реализации проекта</strong>"+ $this.attr("year") +"</span>";
				if($this.attr("rel")=="Umed88"){
					$desc="В "+ $this.attr("year") +" году мы  реализовали проекта по изготовлению корпоративной идентики для дилеров "+ $this.attr("company") +""
				}else if (str.indexOf("-") > 0){
					$desc="С "+ $this.attr("year") +" гг. мы реализовали более "+ $this.attr("dealer") +" проектов по изготовлению корпоративной идентики для дилеров "+ $this.attr("company") +""
				}else{
					$desc="В "+ $this.attr("year") +" году мы  реализовали "+ $this.attr("dealer") +" проекта по изготовлению корпоративной идентики для дилеров "+ $this.attr("company") +""
				};
			}else{ $year=""; }
			if($this.attr("city")!=""){ $city="<strong>Страна</strong>"+ $this.attr("city") +"</span>"; }else{ $city=""; }
			$share="АКЦИОНЕР"
		}

		if($this.attr("type")=="totem"){
			$html="<div class='information' style='width:0px'><h4>"+ $this.attr("company") +"</h4><span><strong>"+ $company +"</strong>"+ $this.attr("company") +"</span>"+ $year +""+ $city +"<span class='share null'><strong>"+ $share +"</strong><a href='javascript:void(0);' onclick='javascript:openPop(1); return false;'><img src='/osmanli-new-av/files/images/icons/facebook.png' width='22' height='22'></a><a href='javascript:void(0);' onclick='javascript:openPop(2); return false;'><img src='/osmanli-new-av/files/images/icons/twitter.png' width='22' height='22'></a><a href='javascript:void(0);' onclick='javascript:openPop(4); return false;'><img src='/osmanli-new-av/files/images/icons/googleplus.png' width='22' height='22'></a></span></div><span class='close-button' onclick='javascript:projectTimelinePopupClose();'></span>"
		}else{
			$html="<div class='information' style='width:0px'><h4>"+ $this.attr("company") +"</h4><div class='description'>"+ $desc +"</div><span><strong>"+ $company +"</strong>"+ $this.attr("company") +"</span>"+ $year +""+ $city +"<span class='share'><strong>"+ $share +"</strong><a href='javascript:void(0);' onclick='javascript:openPop(1); return false;'><img src='/osmanli-new-av/files/images/icons/facebook.png' width='22' height='22'></a><a href='javascript:void(0);' onclick='javascript:openPop(2); return false;'><img src='/osmanli-new-av/files/images/icons/twitter.png' width='22' height='22'></a><a href='javascript:void(0);' onclick='javascript:openPop(4); return false;'><img src='/osmanli-new-av/files/images/icons/googleplus.png' width='22' height='22'></a></span></div><span class='close-button' onclick='javascript:projectTimelinePopupClose();'></span>"
		}

		$("body")
			.append($("<div>",{
				class:"popup",
				html:$html
			})
			.stop()
			.animate({
				height:"420px"
			}, 1000, function(){
				
				//$($this.find(".desc")).clone().appendTo($($this.find(".popup")));
				$(".popup").append($("<div>",{ class:"buttons", style:"width:0px", html:"<span class='bottom' onclick=javascript:projectImagesPosition('bottom');></span><span class='top' onclick=javascript:projectImagesPosition('top');></span>" }));
				
				jQuery.each($thisImgList, function(i) {
		
					var str = this;
					var substr = str.split(',');
					
					$(".popup").append($("<div>",{ class:"images-cont", style:"float:left; width:0px;", html:"<div class='images'></div>" }));
					
					for (var i=0; i < substr.length; i++) {
						
						$(".popup .images").append($("<div>",{ class:"g-image", style:"width:800px; position:absolute; top:"+[$imgInterspace*i]+"px", html:"<img src='http://www.osmanlireklam.com.tr/files/pictures/"+ substr[i] +"'>" }));
						
						var $img = $(".popup .images-cont img"), // images collection
						totalImg = $img.length,
						waitImgDone = function() {

							//alert(totalImg);
							totalImg--;
							if (!totalImg) {
								console.log($img.length+" completed!");
								
								if(substr.length==1){ $(".popup .buttons").hide(); nextControl=false; }else{ nextControl=true; };
								
								$(".popup .images-cont").stop().animate({ width:"800px" },function(){ $(".popup .buttons").stop().animate({ width:"58px" }); });
								
								$(".popup .information").stop().animate({ width:"242px" });
								$(".popup .desc").css({ "width":"0px" }).stop().animate({ width:"242px", "padding":"50px 30px" });
								$imgLength=substr.length;
							}
						};
						
						$img.each(function(){
							if (this.complete) waitImgDone(); // already here..
							else $(this).load(waitImgDone).error(waitImgDone); // completed...
						});
					}
					return;
				});
				
			}
		));
	}
	
	projectImagesPosition = function(process){
		var $thisImages=$(".popup .images");
		
		if(process=="bottom"){
			if($imgTop==0){
				$imgTop="-"+[$imgInterspace];
			}else{
				if(($imgTop*-1)==[$imgInterspace*($imgLength-1)]){
					$imgTop=0;
				}else{
					$imgTop="-"+[($imgTop*-1)+$imgInterspace];
				}
			}
		}else{
			if($imgTop==0){
				$imgTop="-"+[$imgInterspace*($imgLength-1)];
			}else{
				if($imgTop<0){
					$imgTop=Math.round($imgTop)+Math.round($imgInterspace);
				}
			}
		}
		$thisImages.stop().animate({ top:$imgTop+"px" });
	}

	projectTimelinePopupClose = function(){
		timelinePopup=false;
		$('#contentScreen').delay(450).fadeOut("slow");
		$(".popup").stop().animate({ opacity:0 }, 300, function(){
			$(this).remove();
			$imgTop=0;
		});
	}
	
	$("#contentScreen").click(function(){ projectTimelinePopupClose(); });
	$(document).keyup(function(e) {
    	if (e.which == 27){ projectTimelinePopupClose(); }
    	if (e.which == 37 && nextControl==true){ projectImagesPosition('top'); }
    	if (e.which == 39 && nextControl==true){ projectImagesPosition('bottom'); }
	});
		
	openPop = function(process){
		if(process==1){
			//facebook share
			window.open("https://www.facebook.com/sharer/sharer.php?app_id=798717100225818&u="+ $(".g-image img").attr("src") +"&sdk=joey&display=popup&ref=plugin&src=share_button", "popupWindow", "width=600,height=600,scrollbars=no");
		}else if(process==2){
			//twitter share
			window.open("https://twitter.com/intent/tweet?text=@osmanlireklam&url="+ $(".g-image img").attr("src") +"", "popupWindow", "width=600,height=600,scrollbars=no");
		}else if(process==3){
			//linkedin share
			window.open("https://www.linkedin.com/shareArticle?mini=true&url="+ $(".g-image img").attr("src") +"&title=&ro=false&summary=&source=", "popupWindow", "width=600,height=600,scrollbars=no");
		}else if(process==4){
			//google+ share
			window.open("https://plus.google.com/share?url="+ $(".g-image img").attr("src") +"&title=&ro=false&summary=&source=", "popupWindow", "width=600,height=600,scrollbars=no");
		}
	}
	
});
