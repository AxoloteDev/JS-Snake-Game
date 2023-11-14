import {main} from './main.js'

const body = document.querySelector('body');
let board = `
<main>
 <div id="score">
  <span class="score">Score 0</span>
 </div>
 <div id="grid"></div>
 <div id="game">
  <a class="arrow" id="left">←</a>
  <a class="arrow" id="rigth">→</a>
  <a class="arrow" id="up">↑</a>
  <a class="arrow" id="down">↓</a>
 </div>
</main>
<script defer type="module" src="js/main.js"></script>
`;

export function loadGame(){
    body.innerHTML = board;
    main();
}