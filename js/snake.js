let snakeBody = [
    {x:11, y:11}
];

export function update(){
    console.log("update")
}

export function render(gameBoard){
    snakeBody.forEach(part => {
        const player = document.createElement('div');
        player.style.gridRowStart = part.x;
        player.style.gridColumnStart = part.y;
        player.classList.add('snake');
        gameBoard.appendChild(player);
    })
}