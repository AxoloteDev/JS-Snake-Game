import {main} from './main.js'

const title = document.querySelector('#title');
const menu = document.querySelector('nav');
const game = document.querySelector('main');

export function loadGame(){
    title.style.display = 'none';
    menu.style.display = 'none';
    game.style.display = 'flex';
    main();
}