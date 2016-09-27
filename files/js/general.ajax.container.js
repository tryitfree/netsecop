
var req;
function Initialize(){
	try{req=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){try{req=new ActiveXObject("Microsoft.XMLHTTP");}
	catch(oc) {req=null;}
	}
	if(!req&&typeof XMLHttpRequest!="undefined") {
		req= new
		XMLHttpRequest();
	}
} 

// xml page general
function xmlpage(url,containerid,param){

		if(param){
				url=url+'?l='+param
		}
		document.getElementById(containerid).innerHTML="<img src=/osmanli-new-av/files/images/ajax.loading.gif>";


			var page_request = false
			if (window.XMLHttpRequest) 
					page_request = new XMLHttpRequest()
			else if (window.ActiveXObject){
				try {
						page_request = new ActiveXObject("Msxml2.XMLHTTP")
					} 
				catch (e){
					try{
					page_request = new ActiveXObject("Microsoft.XMLHTTP")
					}
					catch (e){}
				}
			}
			else
				return false
				page_request.onreadystatechange=function(){
						loadpage(page_request, containerid)
					}
				page_request.open('POST', url, true)
				page_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=65001")
				page_request.send(null)
}

function loadpage(page_request, containerid){
if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
	document.getElementById(containerid).innerHTML=(page_request.responseText)
}











