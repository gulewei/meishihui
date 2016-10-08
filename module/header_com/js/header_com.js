$(function () {
		// 检测依赖（zepto)
	if(!Zepto) {
		console.error("zepto not found!");
		return;
	}

	// 获取footer和header节点
	var
		nHeader = $("#headerCom"),
		nFooter = $("#footerCom");

	// 添加DOM结构
	$.get('../module/header_com/html/header.html', function(response){
	  	nHeader.append(response)
	});
	$.get('../module/header_com/html/footer.html', function(response){
	  	nFooter.append(response)
	});

})