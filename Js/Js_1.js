/**
 * Created by zzj on 2016/5/31.
 */
function aShow(li) {
    var showList=li.getElementsByTagName("ul")[0];
    showList.style.display="block";
}
function aHide(li){
    var hideList=li.getElementsByTagName("ul")[0];
    hideList.style.display="none"
}
window.onload=function() {
    var container=document.getElementById("container");
	var list=document.getElementById("list");
	var button=document.getElementById("buttons").getElementsByTagName("span");
	var next=document.getElementById("next");
	var prev=document.getElementById("prev");
	var index=1; 
	var animated=false;
	var timer1;
	
	function showButton(){
		for(var i=0;i<button.length;i++){
			if(button[i].className=="on"){
				button[i].className="";
				break;
			}
		}
		button[index-1].className="on";
	}
	function animate(offset){
		animated=true;
		var newleft=parseInt(list.style.left)+offset;
		console.log(newleft);
		var time=300;
		var interval=10;
		var speed=offset/(time/interval);
		var timer=null;
		function go(){
			if((speed<0&&parseInt(list.style.left)>newleft)||(speed>0&&parseInt(list.style.left)<newleft)){
				list.style.left=parseInt(list.style.left)+speed+"px";
				timer=setTimeout(go,interval);
			}else{
				animated=false;
				list.style.left=newleft+"px";
		           if(newleft<-7194){
		           	list.style.left=0+"px";
		             }
		           if(newleft>0){
		         	list.style.left=-7194+"px";
	          	}
			}
		}
		go();
		
	}
	function play(){
		timer1=setInterval(function(){
			next.onclick();
		},2000);
	}
	function stop(){
		clearInterval(timer1);
	}
	next.onclick=function(){
		if(index==6){
			index=1;
		}else{
			index+=1;
		}
		showButton();
		if(!animated){
				animate(-1199);
			}
		
	}
	prev.onclick=function(){
		if(index==1){
			index=6;
		}else{
			index-=1;
		}
		showButton();
		if(!animated){
				animate(1199);
			}
		
	}
	for( var i=0;i<button.length;i++){
		button[i].onclick=function(){
			var myIndex=parseInt(this.getAttribute("index"));
			var offset1=-1199*(myIndex-index);
			animate(offset1);
			index=myIndex;
			if(!animated){
				showButton();
			}
		}
	}
	container.onmouseover=stop;
	container.onmouseout=play;
	play();

//新闻页轮播
    var newList=document.getElementById('NewList');
    var leftButton=document.getElementById('aPrev');
    var rightButton=document.getElementById('aNext');
    leftButton.onclick=function () {
        newList.style.left=parseInt(newList.style.left)-1199+'px';
        if(parseInt(newList.style.left)<-1199){
            newList.style.left=0+'px';
        }
    };

    rightButton.onclick=function () {
        newList.style.left=parseInt(newList.style.left)+1199+'px';
        if(parseInt(newList.style.left)>0){
            newList.style.left=-1199+'px';
        }
    }
};