window.onload = function(){
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	var canvas = document.querySelector('canvas');
	var contexto = canvas.getContext('2d');
	var spriteSheet = new Image();
	spriteSheet.src = 'img/cavalo.png';
	var bruno = new Sprite(spriteSheet);
	var cenario = new Image();
	cenario.src = 'img/cenario.png';

	window.addEventListener('keydown',keydownHandler,false);
	window.addEventListener('keyup',keyupHandler,false);

	function keydownHandler(e){
		switch (e.keyCode) {
			case RIGHT:
				bruno.mvRight = true;
				bruno.mvLeft = false;
				bruno.mvUp = false;
				bruno.mvDown = false;
				break;
			case LEFT:
				bruno.mvRight = false;
				bruno.mvLeft = true;
				bruno.mvUp = false;
				bruno.mvDown = false;
				break;
			case UP:
				bruno.mvRight = false;
				bruno.mvLeft = false;
				bruno.mvUp = true;
				bruno.mvDown = false;
				break;
			case DOWN:
				bruno.mvRight = false;
				bruno.mvLeft = false;
				bruno.mvUp = false;
				bruno.mvDown = true;
				break;
		}
	}
	function keyupHandler(e){
		switch (e.keyCode) {
			case RIGHT:
				bruno.mvRight = false;
				break;
			case LEFT:
			    bruno.mvLeft = false;
			    break;
			case DOWN:
			    bruno.mvDown = false;
			    break;
			case UP:
				bruno.mvUp = false;
				break;
		}
	}

	spriteSheet.onload = function(){
		init();
	}

	function init(){
		bruno.posX = bruno.posY = 220;
		loop();
	}

	function update(){
		bruno.move();

	}

	function draw(){
		contexto.clearRect(0,0,canvas.width,canvas.height);
		contexto.drawImage(cenario,0,0,cenario.width,cenario.height,0,0,canvas.width,canvas.height);
		bruno.draw(contexto);
	}

	function loop(){
		window.requestAnimationFrame(loop,canvas);
		update();
		draw();
	}
}