/***
 * 作者：秦增福
 * 时间：2016年10月5日
 * 描述：这是食谱分类的后台模拟数据
 */
$(function(){
	function name(num){
		$.get('../json/categories.json', function(response){
			for(var j=0;j<response[0].length;j++){
				$(".categories-span-left").eq(j).html(response[num][j].left)
				$(".categories-span-right").eq(j).html(response[num][j].right)
			}
		})
	}
	$(".categories-prev").on("tap",function(){
		var num=parseInt($(".categories-num").html());
		$(".categories-prev").removeClass("categories-current").addClass("categories-current");
		if(num>2){
			$(".categories-num").html(num-1);
			name(num-2);
			
		}else if(num===2){
			$(".categories-num").html(num-1);
			name(num-2);
			$(".categories-prev").removeClass("categories-current");
		}else{
			alert("已经是第一页了")	
		}
	})
	
	$(".categories-next").on("tap",function(){
		var num=parseInt($(".categories-num").html());
		$(".categories-prev").addClass("categories-current");
		if(num<5){
			$(".categories-num").html(num+1);
			name(num);
		}else if(num===5){
			$(".categories-num").html(num+1);
			name(num);
			$(".categories-next").removeClass("categories-current");
		}else{
			alert("已经是最后页了");			
		}
	})
	$(".categories-span-left-wrap").on("tap",function(){
		window.open("../html/menus.html");
	})
	$(".categories-span-right-wrap").on("tap",function(){
		window.open("../html/menus.html");
	})
})