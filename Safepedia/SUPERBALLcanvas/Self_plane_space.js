var selfPlaneType = 0;

var SelfPlane = function() {
	this.left = 200
	this.top = 200
	this.height = 20
	this.width = 20
	this.velocityX = 0
	this.velocityY = 0
	this.context = context
	this.color
	this.originalcolor
	this.changedcolor
};

SelfPlane.prototype = {
	paint: function() {
		this.context.fillStyle = this.color;
		this.context.beginPath()
		this.context.arc(this.left + this.width / 2, this.top + this.height / 2, this.width / 2, 0, Math.PI * 2, false)
		this.context.fill()
	},
	move: function() {
		this.left += this.velocityX
		this.top += this.velocityY
	},
	changecolor: function() {
		if (crashtime > 0) {
			this.color = this.changedcolor;
			crashtime--;
		} else {
			crashtime = 0;
			this.color = this.originalcolor;
		}
	}
}



//planetype1：标准机体
function Self_Plane_Factory(planetype) {
	var Build = new SelfPlane()
	switch (planetype) {
		case 1:
			Build.originalcolor = "rgba(255,255,255,1)";
			Build.changedcolor = "rgba(0,255,255,1)";
			break;
	}
	return Build;
}

selfplane = Self_Plane_Factory(1);