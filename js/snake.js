import { getInput } from "./input.js";

let snakeBody = [
    {x:11, y:11},
];

export function update(){
    const inputDirection = getInput();
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function render(gameBoard){
    snakeBody.forEach(part => {
        const player = document.createElement('div');
        player.style.gridRowStart = part.y;
        player.style.gridColumnStart = part.x;
        player.classList.add('snake');
        gameBoard.appendChild(player);
    })
}