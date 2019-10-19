document.getElementById("headder_mask").addEventListener("click", function() {
	if (navigator.userAgent.indexOf("Html5Plus") > -1) {
		var W = plus.webview.create('notfind.html', '404', {
			'titleNView': {
				'backgroundColor': '#262930',
				'titleText': '页面不见了！',
				'titleColor': '#FFFFFF',
				autoBackButton: true
			}
		});
		plus.webview.show(W, 'slide-in-right', '300ms');
	} else {
		alert('不在手机环境中');
	}
});

document.getElementById("headder_scaniconcontaier").addEventListener("click", function() {
	if (navigator.userAgent.indexOf("Html5Plus") > -1) {
		var W = plus.webview.create('Scanwindow.html', 'scan', {
			'titleNView': {
				'backgroundColor': '#262930',
				'titleText': '扫一扫',
				'titleColor': '#FFFFFF',
				autoBackButton: true
			}
		});
		plus.webview.show(W, 'slide-in-right', '300ms');
	} else {
		alert('请在APP中扫码');
	}
});