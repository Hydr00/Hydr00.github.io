function random(min, max) {
	return Math.random() * (max - min) + min;
}

var restimg = new Image();
restimg.src="img/REST.png";


var BadboxContainer = new Array();
var BulletContainer = new Array();

var RoomRest=0;
var Hyper_Muteki = 0;

//对象类型是指针，不做优化了
//子弹动画，绘制、移动、检测碰撞
function Bullet_Animation() {
	var i = BulletContainer.length - 1;
	for (; 0 <= i; i--) {
		BulletContainer[i].paint();
		BulletContainer[i].move();
		if (BulletContainer[i].hitcheck()) {
			BulletContainer.splice(i, 1);
		}
	}
}
//敌人动画，绘制、移动、检测碰撞、充能++、开火
function Badbox_Animation() {
	var i = BadboxContainer.length - 1;
	for (; 0 <= i; i--) {
		BadboxContainer[i].paint();
		BadboxContainer[i].move();
		BadboxContainer[i].firecountdown--;
		BadboxContainer[i].shoot();
		if (BadboxContainer[i].hitcheck()) {
			BadboxContainer.splice(i, 1);
		}
	}
}

function Regenerate() {
	for(var generatewave = 0 ;BadboxContainer.length < harddata - 1;generatewave++) {
		BadboxContainer.push(Bad_Box_Factory(Math.floor(random(1,2.8)),generatewave));
	}
	RoomRest=0;
	console.log("新一波敌人！")
}





var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');
var scoeDatazone = document.getElementById('score'),
	lifeDatazone = document.getElementById('life'),
	hardDatazone = document.getElementById('hard'),
	timeDatazone = document.getElementById('time');
var scoedata = 0,
	lifedata = 500,
	// harddata = 1.1,
	harddata = 3;
	timedata = 1000;
var crashtime = 0;

function handleEdgeCollisions(selfplane) {
	var selfplaneRight = selfplane.left + selfplane.width,
		selfplaneBottom = selfplane.top + selfplane.height;

	if (selfplane.left < 0) {
		selfplane.left = 0
		selfplane.velocityX = -selfplane.velocityX / 3
		//撞到左侧
	} else if (selfplaneRight > canvas.width) {
		selfplane.left = canvas.width - selfplane.width
		selfplane.velocityX = -selfplane.velocityX / 3
		//撞到右侧
	}

	if (selfplane.top < 0) {
		selfplane.top = 0
		selfplane.velocityY = -selfplane.velocityY / 3
		//撞到上面
	} else if (selfplaneBottom > canvas.height) {
		selfplane.top = canvas.height - selfplane.height
		selfplane.velocityY = -selfplane.velocityY / 3
		//撞到底部
	}
}
