let board = document.getElementById('pixel-board');
let pixel = document.getElementsByClassName('pixel');
let selected = [];
let colorPalette = [];

//Pixel Board
for(let i = 1; i < 5; i += 1){
    let line = document.createElement('div');
    board.appendChild(line);
    line.className = 'pixel';

    for(let i = 0; i < 5; i += 1){
        let colum = document.createElement('div');
        board.appendChild(colum);
        colum.className = 'pixel';
    }
}

//Default Color

window.onload = function () {
    colorPalette[0].className += ' selected';
  };

//Select color

function selectColor(){
    let pixelAll = document.querySelectorAll('.pixel');
    for(let i =0; i < pixelAll.length; i +=1){
        pixelAll[i].addEventListener('click', (toPrint) => {
        let nowColor = document.getElementsByClassName('selected');
        let printColor = getComputedStyle(nowColor).backgroundColor;
        toPrint.target.style.backgroundColor = nowColor;
        });
    }
}
window.addEventListener('click')