import {update as updateSnake, render as renderSneake, snakeCollision, score, getSnakeHead} from './snake.js';
import {update as updateFood, render as rederFood} from './food.js';
import { gridCollision } from './board.js';

const gameBoard = document.querySelector('#grid');
const displayScore = document.querySelector('.score');

let lastRender = 0;
let gameOver = false;
const GAME_SPEED = 4;

export function main(currentRender){
    if(gameOver){
        return alert('Game Over');
    }

    requestAnimationFrame(main);
    const secondsSiceLastRender = (currentRender - lastRender) / 1000;
    if(secondsSiceLastRender < 1 / GAME_SPEED) return
    lastRender = currentRender;
        
    update();
    render();
}

function update(){
    updateSnake();
    updateFood();
    displayScore.innerHTML = `Score ${score}`;
    snakeDeath()
}

function render(){
    gameBoard.innerHTML = '';
    renderSneake(gameBoard);
    rederFood(gameBoard);
}

function snakeDeath(){
    gameOver = gridCollision(getSnakeHead()) || snakeCollision()
}