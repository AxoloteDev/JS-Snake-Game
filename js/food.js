import { onSnake, expandBody} from "./snake.js";

let foods = {x:11, y:11};
const EXPANSION = 1;

export function update(){
    if(onSnake(foods)){
        expandBody(EXPANSION);
        foods = {x:11, y:0};
    }
}

export function render(gameBoard){
        const food = document.createElement('div');
        food.style.gridRowStart = foods.y;
        food.style.gridColumnStart = foods.x;
        food.classList.add('food');
        gameBoard.appendChild(food);
}