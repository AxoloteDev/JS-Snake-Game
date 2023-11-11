import { loadGame } from './load.js';

const menu = document.querySelector("ul");
let itens = menu.querySelectorAll("li");
let index = 0;

//? Menu keyboard navegation
document.addEventListener("keydown", (event)=>{
    if(event.key === "ArrowDown" || event.key === "s"){
        index++;

        if(index >= itens.length){
            itens[1].classList.remove("select");
            index = 0;
        }

        itens[index].classList.add("select"); 

        if(itens[index - 1]){
            itens[index - 1].classList.remove("select");
        }
    }

    if(event.key === "ArrowUp" || event.key === "w"){
        index--;

        if(index < 0){
            itens[0].classList.remove("select");
            index = 1;
        }

        itens[index].classList.add("select"); 

        if(itens[index + 1]){
            itens[index + 1].classList.remove("select");
        }
    }

    if(event.key === "Enter"){
        if(itens[0].classList == "select"){
            loadGame();
        }
        if(itens[1].classList == "select"){
            console.log("opção 2");
        }
    }
});

//? Menu mouse navegation
itens.forEach((iten)=>{
    iten.addEventListener("mouseover", ()=>{
        itens.forEach((iten)=> {
            iten.classList.remove("select");
        })

        iten.classList.add("select");

        iten.addEventListener("click", () => {
            if(itens[0].classList == "select"){
                loadGame();
            }
            if(itens[1].classList == "select"){
                console.log("opção 2");
            }
        })
    })
});