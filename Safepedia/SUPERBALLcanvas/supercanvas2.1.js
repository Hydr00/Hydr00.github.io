function animate(time) {
	context.fillStyle = "rgba(0, 0, 0, 0.5)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	// =================清理画布=================
	selfplane.paint()
	selfplane.move()
	handleEdgeCollisions(selfplane)
	selfplane.changecolor()
	//===============绘制主机运动路径===============
	// 	box.timepass()
	// 	box.paint()
	// 	box.getboxcheck()
	//===============绘制盒子======================
	Badbox_Animation()
	Bullet_Animation()
	if(Hyper_Muteki){Hyper_Muteki--;}
	if (BadboxContainer.length == 0 && !(RoomRest)) {
		console.log("休息时间！当前难度" + harddata);
		RoomRest = 1;
		setTimeout(Regenerate, 5000);
	}
	if (RoomRest) {
		context.drawImage(restimg, 0, 0);
	}
	//===============绘制坏盒子与子弹====================
	requestAnimationFrame(animate)
}

requestAnimationFrame(animate)


setInterval(function changedatazone() {
	scoeDatazone.innerText = scoedata
	timeDatazone.innerText = timedata
	timedata--;
	lifeDatazone.innerText = lifedata
	hardDatazone.innerText = Math.floor(harddata - 1)
}, 100);
//===============更新数据======================
