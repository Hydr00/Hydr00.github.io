document.getElementById("headder_scaniconcontaier").addEventListener("click", function() {
	if (navigator.userAgent.indexOf("Html5Plus") > -1) {
		var W = plus.webview.create('Scanwindow.html', 'carcode1', {
			'titleNView': {
				'backgroundColor': '#262930',
				'titleText': '扫一扫',
				'titleColor': '#FFFFFF'
			}
		});
		plus.webview.show(W, 'slide-in-right', '300ms');
	} else {
		alert('请在APP中扫码');
	}
});
