(function () {

	if (typeof PingPong === "undefined") {
    	window.PingPong = {};
  	}
  	
	var Ball = PingPong.Ball = function (context) {
		this.context = context;
		this.position = [this.context.canvas.width / 2, this.context.canvas.height / 2]
		this.radius = 20;
		this.direction = [2, 2];
	};

	Ball.prototype.render = function () {
		this.context.beginPath();
		this.context.arc(this.position[0],this.position[1],this.radius,0,2*Math.PI);
		this.context.fillStyle = "#fff";
		this.context.fill();
	};

	Ball.prototype.move = function () {
		if (this.onSideWall()) this.direction[0] = -this.direction[0];
		if (this.onTopBottomWall()) this.direction[1] = -this.direction[1];
		this.position[0] += this.direction[0];
		this.position[1] += this.direction[1];
	};

	Ball.prototype.startPosition = function () {
		this.position = [this.context.canvas.width / 2, this.context.canvas.height / 2];
	}

	Ball.prototype.onSideWall = function () {
		return (this.position[0] > this.context.canvas.width - this.radius) || (this.position[0] < this.radius);
	};

	Ball.prototype.onTopBottomWall = function () {
		return (this.position[1] > this.context.canvas.height - this.radius) || (this.position[1] < this.radius)
	};
	
})();