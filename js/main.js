import {update as updateSnake, render as renderSneake} from './snake.js';
const gameBoard = document.querySelector('#grid');

let lastRender = 0;
const GAME_SPEED = 4;

export function main(currentRender){
    requestAnimationFrame(main);
    const secondsSiceLastRender = (currentRender - lastRender) / 1000;
    if(secondsSiceLastRender < 1 / GAME_SPEED) return
    lastRender = currentRender;
        
    update();
    render();
}

function update(){
    updateSnake();
}

function render(){
    gameBoard.innerHTML = '';
    renderSneake(gameBoard);
}