function Controler() {
	this.leftkeypressed = 0;
	this.rightkeypressed = 0;
	this.upkeypressed = 0;
}
controler = new Controler;

function accstart(event) {
	switch (event.keyCode) {
		case 37:
			controler.leftkeypressed = 1;
			break;
		case 38:
			controler.upkeypressed = 1;
			break;
		case 39:
			controler.rightkeypressed = 1;
			break;
	}
};
function accstop(event) {
	switch (event.keyCode) {
		case 37:
			controler.leftkeypressed = 0;
			break;
		case 38:
			controler.upkeypressed = 0;
			break;
		case 39:
			controler.rightkeypressed = 0;
			break;
		case 32:
			selfplane.velocityX*=2;
			selfplane.velocityY-=15;
			if(Math.pow(selfplane.velocityX,2)+Math.pow(selfplane.velocityY,2)>=20){crashtime=25;};
			break;
			//冲刺无敌模式
	}
};

document.addEventListener("keydown", accstart);
document.addEventListener("keyup", accstop);


setInterval(function accelerate() {
	var c = controler;
	var MAXSPEED=18;
	var acc=1;
	var g=1;
	if (c.leftkeypressed&&(selfplane.velocityX>=-MAXSPEED)) {
		selfplane.velocityX -= acc;
	}
	if (c.upkeypressed&&Math.abs(selfplane.velocityY)<=MAXSPEED) {
		selfplane.velocityY -= g*2;
	}
	if (c.rightkeypressed&&selfplane.velocityX<=MAXSPEED) {
		selfplane.velocityX += acc;
	}
	selfplane.velocityY += g;
}, 50);

//============================================================================