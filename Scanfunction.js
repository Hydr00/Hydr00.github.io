var scan;
if (window.plus) {
	plusready();
} else {
	document.addEventListener('plusready', plusready, false);
}
document.getElementById("headder_scaniconcontaier").addEventListener("click", function() {
	if (navigator.userAgent.indexOf("Html5Plus") > -1) {
		var w = plus.webview.create('B.html', 'carcode1', {
			'titleNView': {
				'backgroundColor': '#262930',
				'titleText': '扫一扫',
				'titleColor': '#FFFFFF',
				autoBackButton: false
			}
		});
		plus.webview.show(w, 'slide-in-right', '300ms');
	} else {
		alert('请在APP中扫码');
	}
});

function plusready() {
	setTimeout(function() {
		scan = new plus.barcode.Barcode('mask');
		scan.start();
		scan.onmarked = function(type, result) {
			if (result) {
				scan.close();
				mui.openWindow({
					url: result,
					id: 'info',
					extras: {
						result: result
					}
				});
			}
		};
	}, 1000);

	//处理返回事件
	plus.key.addEventListener('backbutton', function() {
		plus.webview.currentWebview().close();

	})
}
