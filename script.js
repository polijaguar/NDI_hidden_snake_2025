(function(){
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');
    const btnPause = document.getElementById('btnPause');
    const btnRestart = document.getElementById('btnRestart');

    const snakeHeadimg = new Image();
    snakeHeadimg.src = 'img/snake_head.png';
    const snakeBodyimg = new Image();
    snakeBodyimg.src = 'img/cardBoardBox.png';

    const tileCount = 20; // grille 20x20
    const tileSize = canvas.width / tileCount;

    let snake = [{x:9,y:9},{x:9,y:10}];
    let dir = {x:0,y:0};
    let nextDir = {x:0,y:0};
    let apple = {x:5,y:5};
    let score = 0;
    let running = true;
    let speed = 8;
    let frameId = null;
    let lastTime = 0;

    function draw(){
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        drawSnake();
    }

    function drawSnake(){
        for(let i = 0; i < snake.length; i++){
            const segment = snake[i];
            const img = (i===0) ? snakeHeadimg : snakeBodyimg;
            ctx.drawImage(img,segment.x * tileSize,
                segment.y*tileSize, tileSize, tileSize);
        }
    }

    function body(){

    }

    function gameLoop(ts){
        if(!lastTime) lastTime = ts;
        const delta = ts - lastTime;
        const interval = 1000 / speed;
        if(delta > interval){
            lastTime = ts;
            if(running) update();
        }
        draw();
        frameId = requestAnimationFrame(gameLoop);
    }

    frameId = requestAnimationFrame(gameLoop);
})();
