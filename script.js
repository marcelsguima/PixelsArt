let board = document.getElementById('pixel-board');
let pixel = document.getElementsByClassName('pixel');
let selected = [];
let colorPalette = [];

//Pixel Board
for (let i = 1; i < 5; i += 1) {
  let line = document.createElement('div');
  board.appendChild(line);
  line.className = 'pixel';

  for (let i = 0; i < 5; i += 1) {
    let colum = document.createElement('div');
    board.appendChild(colum);
    colum.className = 'pixel';
  }
}

// //Default Color

// //Select color

let cores = document.querySelector('#color-palette').children;
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', seleciona);
}
// function logcor(){
//   console.log("pl");
// }
// }

function seleciona(event) {
  let selecionada = document.getElementsByClassName('selected');
  selecionada[0].classList.remove('selected');
  event.target.classList.add('selected');
}
