/***
 * 作者：秦增福
 * 时间：2016年10月4日
 * 描述：这是厨师页面的js操作代码
 */

$(function(){
	function name(num){
		$.get('../json/friends.json', function(response){
			alert(1);
			for(var j=0;j<response[0].length;j++){
				$(".friends-name").eq(j).html(response[num][j].name)
				$(".friends-p").eq(j).css("background-image",'url('+response[num][j].url+')')
			}
		})
	}
	$(".friends-prev").on("tap",function(){
		var num=parseInt($(".friends-num").html());
			$(".friends-next").removeClass("friends-current").addClass("friends-current");	
		if(num>2){
			$(".friends-num").html(num-1);
			name(num-2);
		}else if(num===2){
			$(".friends-num").html(num-1);
			name(num-2);
			$(".friends-prev").removeClass("friends-current");
		}else{
			alert("已经是第一页了");
		}
	})
	
	$(".friends-next").on("tap",function(){
		var num=parseInt($(".friends-num").html());
		$(".friends-prev").addClass("friends-current");
		if(num<5){
			$(".friends-num").html(num+1);
			name(num);
		}else if(num===5){
			$(".friends-num").html(num+1);
			name(num);
			$(".friends-next").removeClass("friends-current");
		}else{
			alert("已经是最后页了");			
		}
	})
	
})