const arrowUp = document.querySelector('#up');
const arrowDown = document.querySelector('#down');
const arrowLeft = document.querySelector("#left");
const ArrowRight = document.querySelector("#right");

let inputDirection = {x:0,y:0}

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            inputDirection = {x:0, y:-1};
            break;
        case 'ArrowDown':
            inputDirection = {x:0, y:1};
            break;
        case 'ArrowLeft':
            inputDirection = {x:-1, y:0};
            break;
        case 'ArrowRight':
            inputDirection = {x:1, y:0};
            break;            
    }

    switch(e.key){
        case 'w':
            inputDirection = {x:0, y:-1};
            break;
        case 's':
            inputDirection = {x:0, y:1};
            break;
        case 'a':
            inputDirection = {x:-1, y:0};
            break;
        case 'd':
            inputDirection = {x:1, y:0};
            break;            
    }
})

arrowUp.addEventListener("click", () => {inputDirection = {x:0, y:-1};});
arrowDown.addEventListener("click", () => {inputDirection = {x:0, y:1};});
arrowLeft.addEventListener("click", () => {inputDirection = {x:-1, y:0};});
ArrowRight.addEventListener("click", () => {inputDirection = {x:1, y:0};});

export function getInput(){
    return inputDirection;
} 