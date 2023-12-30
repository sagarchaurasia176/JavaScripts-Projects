import { gameUpdate as snakeGames, snakeDraw as drawSnake, speed } from './snake';
let renderTime = 0;
//snake timing () 
function snakeGame(currentTime) {
    window.requestAnimationFrame(snakeGame);
    const renderLast = (currentTime - renderTime) / 1000;
    if (renderLast < 1 / speed) return
    console.log(currentTime);

    gameUpdate();
    snakeDraw();
}
window.requestAnimationFrame(snakeGame);

function gameUpdate() {
    snakeGames();
}


function snakeDraw() {
    drawSnake();
}