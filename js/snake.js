import { getInput } from "./input.js";

let snakeBody = [
    {x:11, y:0},
];

let newBody = 0;

export function update(){
    addBody();
    
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

export function expandBody(amount){
    newBody += amount;
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPosition(segment, position);
    })
}

function equalPosition(position1, position2){
    return position1.x === position2.x && position1.y === position2.y;
}

function addBody(){
    for(let i = 0; i < newBody; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }
    newBody = 0;
}