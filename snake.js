//board variables
let blockSize = 25;
let rows = 20;
let column = 20;
let board;
let context; 

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = []; //array that creates the body of the snake.

//food
let foodX;
let foodY;

let gameOver = false;

//green board
window.onload = function() { //ensures that the game setup occurs when it is fully loaded.
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = column * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10); //Speed that the snake goes and the food appears on the board(100 milliseconds)
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="green";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="white";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) { //What makes the snakehead consume the food.
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) { //What makes the body grow.
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="black";
    snakeX += velocityX * blockSize; // this is what makes the snake move per block and not per pixel.
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize); //what gives the color balck to the snake head.
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX < 0 || snakeX > column*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over"); //if snake goes above, below, or to the sides of the board. 
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over"); //This is if the snake touches its own body.
        }
    }
}

//change of direction using arrow keys.
function changeDirection(direction) {
    if (direction.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (direction.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (direction.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (direction.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

//Places the food in different positions on the board. 
function placeFood() {
    foodX = Math.floor(Math.random() * column) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}