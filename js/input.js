const arrowUp = document.querySelector('#up');
const arrowDown = document.querySelector('#down');
const arrowLeft = document.querySelector("#left");
const ArrowRight = document.querySelector("#right");

let inputDirection = {x:0, y:0};
let lastDirection = {x:0, y:0};

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            if(lastDirection.y !== 0) break;
            inputDirection = {x:0, y:-1};
            break;
        case 'ArrowDown':
            if(lastDirection.y !== 0) break;
            inputDirection = {x:0, y:1};
            break;
        case 'ArrowLeft':
            if(lastDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
        case 'ArrowRight':
            if(lastDirection.x !== 0) break;
            inputDirection = {x:1, y:0};
            break;            
    }

    switch(e.key){
        case 'w':
            if(lastDirection.y !== 0) break;
            inputDirection = {x:0, y:-1};
            break;
        case 's':
            if(lastDirection.y !== 0) break;
            inputDirection = {x:0, y:1};
            break;
        case 'a':
            if(lastDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
        case 'd':
            if(lastDirection.x !== 0) break;
            inputDirection = {x:1, y:0};
            break;            
    }
})

arrowUp.addEventListener("click", () => {
    if(lastDirection.y !== 0) return null;
    inputDirection = {x:0, y:-1};
});

arrowDown.addEventListener("click", () => {
    if(lastDirection.y !== 0) return null;
    inputDirection = {x:0, y:1};
});
arrowLeft.addEventListener("click", () => {
    if(lastDirection.x !== 0) return null;
    inputDirection = {x:-1, y:0};
});

ArrowRight.addEventListener("click", () => {
    if(lastDirection.x !== 0) return null;
    inputDirection = {x:1, y:0};
});

export function getInput(){
    lastDirection = inputDirection;
    return inputDirection;
} 