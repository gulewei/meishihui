var com = (function () {
	// 检测依赖（zepto)
	if(!Zepto) {
		console.error("zepto not found!");
		return;
	}

	// 获取footer和header节点
	var
		root = "../module/header_com/html/";

	// 添加DOM结构
	function headerCom() {
		var
			nHeader = $("#headerCom");

		$.get(root + 'header.html', function(response){
		  	nHeader.append(response)
		});
	}

	function footerCom() {
		var
			nFooter = $("#footerCom");

		$.get(root + 'footer.html', function(response){
		  	nFooter.append(response)
		});
	}

	return {
		headerCom: headerCom,
		footerCom: footerCom
	}
})();
