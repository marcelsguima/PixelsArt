let board = document.getElementById('pixel-board');
let pixel = document.getElementsByClassName('pixel');
let selected = 0;

//Pixel Board
for(let i = 0; i < 5; i += 1){
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