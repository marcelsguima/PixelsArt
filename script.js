let board = document.getElementById('pixel-board');
let pixel = document.getElementsByClassName('pixel');
let selected = [];
let colorPalette = [];
const findSelected = document.getElementsByClassName('selected');

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

// //Select color

let cores = document.querySelector('#color-palette').children;
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', seleciona);
}

function seleciona(event) {
  let selecionada = document.getElementsByClassName('selected');
  selecionada[0].classList.remove('selected');
  event.target.classList.add('selected');
}

// Paint Pixel

document.addEventListener('click', colorPixel);
function colorPixel(event) {
  if (event.target.classList.contains('pixel')) {
    let corSelecionada = document.querySelector('.selected');
    let cor = window
      .getComputedStyle(corSelecionada)
      .getPropertyValue('background-color');
    event.target.style.backgroundColor = cor;
  }
}

//Clear button

let botaoLimpa = document.getElementById('clear-board');
botaoLimpa.addEventListener('click', limpa);

function limpa() {
  for (let i = 0; i < botaoLimpa.length; i += 1) {
    botaoLimpa[i].style.backgroundColor = 'white';
  }
}
