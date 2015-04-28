(function () {

	if (typeof PingPong === "undefined") {
    	window.PingPong = {};
  	}

	var Board = PingPong.Board = function (canvas, boardWidth, boardHeight) {
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		// Canvas Tutorial: http://www.html5canvastutorials.com/
		canvas.width = this.boardWidth;
		canvas.height = this.boardHeight;
		this.context = canvas.getContext('2d');
		this.leftPaddle = new PingPong.Paddle(this.context, "left");
		this.rightPaddle = new PingPong.Paddle(this.context, "right");
		this.ball = new PingPong.Ball(this.context, this.leftPaddle, this.rightPaddle);
	};

	Board.prototype.play = function () {
		this.ball.move();
		this.leftPaddle.move();
		this.rightPaddle.move();			
		this.render();
	};

	Board.prototype.render = function () {
		this.context.clearRect(0 , 0, this.boardWidth, this.boardHeight);
		this.renderBackground();
		this.ball.render();
		this.leftPaddle.render();
		this.rightPaddle.render();
	};

	Board.prototype.renderBackground = function () {
		this.context.fillStyle = "black"; 
		this.context.fillRect(0, 0, this.boardWidth, this.boardHeight);
	};

	Board.prototype.startGame = function () {
		window.setInterval(this.play.bind(this), "5");
	}

})();