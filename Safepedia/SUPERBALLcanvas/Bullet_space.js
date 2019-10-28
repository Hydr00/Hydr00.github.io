var Bullet = function() {};

Bullet.prototype = {
	paint: function() {
		this.context.fillStyle = this.color;
		this.context.fillRect(this.left, this.top, this.width, this.height)
	},
	hitcheck: function() {
		var selfplaneRight = selfplane.left + selfplane.width,
			selfplaneBottom = selfplane.top + selfplane.height,
			bulletRight = this.left + this.width,
			bulletBottom = this.top + this.height;
		if (!Hyper_Muteki) {
			if (!(selfplaneBottom < this.top || selfplane.left > bulletRight || selfplane.top > bulletBottom || selfplaneRight <
					this.left)) {
				selfplane.velocityX += this.velocityX;
				selfplane.velocityY += this.velocityY;
				lifedata -= 100;
				havebullet = 0;
				Hyper_Muteki = 50;
				return 1;
			};
		}
		if (bulletRight >= canvas.width || bulletBottom >= canvas.height || this.left <= 0 || this.top <= 0) {
			return 1;
		}
	}
}



//case 1:普通子弹
//case 2:跟踪子弹
function Bullet_Factory(left, top, bullettype) {
	var Build = new Bullet();
	switch (bullettype) {
		case 1:
			{
				Build.left = left
				Build.top = top
				Build.height = 10
				Build.width = 10
				Build.velocity = 4
				Build.temp = Math.sqrt(Math.pow((selfplane.left - Build.left), 2) + Math.pow((selfplane.top - Build.top), 2))
				Build.velocityY = Build.velocity * ((selfplane.top - Build.top) / Build.temp)
				Build.velocityX = Build.velocity * ((selfplane.left - Build.left) / Build.temp)
				Build.context = context
				Build.color = "rgba(0,255,0,1)";
				Build.move=function() {
					Build.left += Build.velocityX
					Build.top += Build.velocityY
				}
			}
			break;
		case 2:
			{
				Build.left = left
				Build.top = top
				Build.height = 10
				Build.width = 10
				Build.velocity = 10
				Build.velocityX = 0
				Build.velocityY = 0
				Build.context = context
				Build.color = "rgba(0,255,255,1)";
				Build.move=function() {
				Build.velocityX += (selfplane.left - Build.left) * 0.0005
				Build.velocityY += (selfplane.top - Build.top) * 0.0005
				Build.left += Build.velocityX
				Build.top += Build.velocityY
			}
			}
			break;
			}
	return Build;
}
