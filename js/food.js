import { onSnake, expandBody} from "./snake.js";
import { gridPosition } from "./board.js";

let foods = randomFood();
const EXPANSION = 1;

export function update(){
    if(onSnake(foods)){
        expandBody(EXPANSION);
        foods = randomFood();
    }
}

export function render(gameBoard){
        const food = document.createElement('div');
        food.style.gridRowStart = foods.y;
        food.style.gridColumnStart = foods.x;
        food.classList.add('food');
        gameBoard.appendChild(food);
}

function randomFood(){
    let newFood;
    while(newFood == null || onSnake(newFood)){
        newFood = gridPosition();
    }
    return newFood;
}