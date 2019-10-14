var BadBox = function() {};
BadBox.prototype = {
	paint: function() {
		this.context.fillStyle = this.color;
		this.context.fillRect(this.left, this.top, this.width, this.height)
	},
	move: function() {
		if (this.delay > 0) {
			this.delay--;
		} else {
			this.left += this.speed
		}
	},
	hitcheck: function() {
		var selfplaneRight = selfplane.left + selfplane.width,
			selfplaneBottom = selfplane.top + selfplane.height,
			boxRight = this.left + this.width,
			boxBottom = this.top + this.height;


		if (boxRight >= canvas.width) {
			this.speed = -1; //原本是-1，测试用
		} //判定过界
		if (this.left <= 0) {
			this.speed = 1;
		} //判定过界
		if (!(selfplaneBottom < this.top || selfplane.left > boxRight || selfplane.top > boxBottom || selfplaneRight <
				this.left)) {
			if (crashtime) {
				crashtime = 0;
				selfplane.velocityX *= -1
				selfplane.velocityY *= -1
				this.life--;
				console.log("击中坏盒子！");
				scoedata += 300;
				harddata += 0.5 / harddata;
				if (this.life == 1) {
					this.color = this.secondcolor;
				}
				if (this.life == 0) {
					return 1;
				}
			} else {
				if (!Hyper_Muteki) {
					console.log("被坏盒子击中！");
					lifedata -= 100;
					selfplane.velocityX *= -0.5
					selfplane.velocityY *= -0.5
					Hyper_Muteki = 50;
				}
			}
		}
	},
	shoot: function() {
		if (this.firecountdown <= 0 && this.delay <= 0) {
			BulletContainer.push(Bullet_Factory(this.left, this.top, this.badboxtype))
			this.firecountdown = this.MAXfirecountdown;
			console.log("开火！")
		}
	}
}

//1:标准盒子
//2:跟踪弹盒子
function Bad_Box_Factory(badboxtype, wave) {
	var Build = new BadBox()
	switch (badboxtype) {
		case 1:
			{
				Build.badboxtype = 1;
				Build.speed = 1;
				Build.life = 2;
				Build.height = 20;
				Build.width = 20;
				Build.left = -Build.width - 1;
				Build.top = random(0, 400 - 100);
				Build.context = context;
				Build.color = "rgba(0,255,0,1)";
				Build.firstcolor = "rgba(0,255,0,1)";
				Build.secondcolor = "rgba(0,200,0,1)"
				Build.MAXfirecountdown = 100;
				Build.firecountdown = Build.MAXfirecountdown;
				Build.delay = random(wave * 180, (wave + 1) * 180);
				console.log("delay:" + Build.delay)
			}
	break;
	case 2: {
		Build.badboxtype = 2;
		Build.speed = 2;
		Build.life = 2;
		Build.height = 20;
		Build.width = 20;
		Build.left = -Build.width - 1;
		Build.top = random(0, 400 - 100);
		Build.context = context;
		Build.color = "rgba(0,255,255,1)";
		Build.firstcolor = "rgba(0,255,255,1)";
		Build.secondcolor = "rgba(0,200,200,1)"
		Build.MAXfirecountdown = 100;
		Build.firecountdown = Build.MAXfirecountdown;
		Build.delay = random(wave * 180, (wave + 1) * 180);
		console.log("delay:" + Build.delay)
	}
	break;
	}
	return Build;
}

BadboxContainer.push(Bad_Box_Factory(2, 0));
// 把这些东西改写到类里面
