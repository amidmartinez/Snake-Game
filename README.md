# Snake-Game
My project will consist in building a "Snake" game.

The first step would be to buld a board that is 18x18 or close to it. (20 rows & 20 columns)

The board wil be ceated using various functions and variables. I will think of the board as an x and y graph. Where block size would be am major participant in making the snake and its fucntion to move and also creating its food randomize across the board.

It was also need to have same size blocks withing in that will contain the "snake" and the "food" in them. 

Once the board is created, I will focus on building the snake. 

using variables I wil give it lenght and width of one block. 

The function will also be updated as a new item is being inserted into the board. 

The "food" will come next. I will give it a sarting point in the board using x and y. Same thing witht the snake. 

it will look something like:
context.fillRect(foodX, foodY, blockSize, blockSize)

To randomize the the food, I will create a function using the math.random function. 
foodX = Math.floor.(Math.random() * cols) * blockSize

Then using various functions I would make the snake actually move around the board. 
Using an Else, if function.

**Make sure the food fucntion come first rather than the snake. That way the snake eats it, instead of just goingover it.

using an if, else statement 

The original game "Snake" never ready had a point system. I would just make it to where if the snake touches its own body or the board it will display a game over pop-up. 

CSS will come last. Since I want the game to run smoothly first. After that I could paly around and see what cool new feutures I can add to it. 

Since I played it as a child in a mobile device, I will also try to make it work in a phone. 