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

}

function render(){
    
}