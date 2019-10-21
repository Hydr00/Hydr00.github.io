(function() {
	var listcontainer = document.createElement("div");
	listcontainer.id = "listcontainer";
	
	var h1 = document.getElementsByTagName("h1")[0];
	var listname = document.createElement("b");
	listname.innerText = h1.innerText;
	listcontainer.appendChild(listname);
//生成题目↑
//生成列表↓
	var list = document.createElement("ol");
	var h2s = document.getElementsByTagName("h2");
	
	for (i = 0; i < h2s.length; i++) {
		h2s[i].setAttribute("id","h2no"+i);
		var listitem = document.createElement("li");
		var listlink = document.createElement("a");
		listlink.innerText = h2s[i].innerText;
		listlink.setAttribute("href","#h2no"+i);
		listitem.appendChild(listlink);
		list.appendChild(listitem);
	}
	listcontainer.appendChild(list);
	document.getElementsByTagName("h2")[0].before(listcontainer);
})();
//一次生成优化
