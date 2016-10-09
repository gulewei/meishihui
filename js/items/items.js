/***
 * 作者：秦增福
 * 时间：2016年10月6日
 * 描述：这是做法简介的特效代码
 */
$(function(){
	var isleft=true;
	leftmove();
	setInterval(function(){
		if(isleft===true){
			leftmove()
		}else{
			rightmove()
		}
	},4000)
	function leftmove(){
		$(".items-banner-list").animate({left:'-100%'},1000);
		isleft=false;
	}
	function rightmove(){
		$(".items-banner-list").animate({left:0},1000);
		isleft=true;
	}

	
})
