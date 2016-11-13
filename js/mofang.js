/*$(function(){
	var $top=$('.origin').attr('data-top');
        var downx=0;
		var downy=0;
	
	$('.origin').on("mousedown",".litbox",function(e){
	console.log(e.target);
	
		 downx=e.clientX;
		 downy=e.clientY;
		 var  flag=true;
		 	$('.litbox').on('mouseup',function(e){
			//console.log(1, e.clientX);
			flag
			
			var upx=e.clientX;
			var upy=e.clientY;
			//区分滑块的方向
			var direction=Math.abs(upx-downx)-Math.abs(upy-downy)?((upx-downx)>0?"right":"left"):((upy-downy)>0?"down":"up");
			//区分辅助方向和判断条件的值
			var helpdirection=(direction=="left"||direction=="right")?"top":"0";
			
			
			$('.origin').each(function(index,item){
				//var i=0;i++;if(i==7){i=0;return}
				if($(item).attr('data-top')==0||$(item).attr('data-top')==90)
				{
					var leftDeg=parseInt($(item).attr('data-left'))-90;
					var topDeg=parseInt($(item).attr('data-top'));
					leftDeg%=360;
					topDeg%=360;
		//			console.log($(item).attr('data-top'));
		//			console.log($(item).css('transform'));
					$(item).attr({'data-top':topDeg,'data-left':leftDeg});
					console.log(item,topDeg,leftDeg)
					$(item).css('transform',"rotateX("+topDeg+"deg)rotateY("+leftDeg+"deg)");
				}
			return;
			})
	
		
	
	
		})
		
	})
	

})*/
$(function(){
	var flag=true;
	//点击事件触发魔方运动
	$(document).click(function(){
		var box=".box",x=5;
		//给个旗子判断当前动画已经发生完成
		if(flag)
		setInterval(function(){
			
		var box1=box+x;
		var leftDeg=parseInt($(box1).attr('data-left'));
		var topDeg=parseInt($(box1).attr('data-top'))-90;
		//var zDeg=parseInt($(box1).attr('data-z'));
		if(x>4)
		leftDeg+=180;
		if(leftDeg>360||topDeg>360){
			leftDeg%=360;
			topDeg%=360;
		}
		//console.log(box1);
		$(box1).attr({'data-top':topDeg,'data-left':leftDeg});
		console.log( topDeg,leftDeg)
		$(box1).css('transform',"rotateX("+topDeg+"deg)rotateY("+leftDeg+"deg)");
		x++;
		if(x>8)
		x=4;
		flag=true
		},500)
		flag=false;
	})
	
	
})
