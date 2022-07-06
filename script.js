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

// //Default Color



// //Select color

let cores = document.querySelector('#color-palette').children;
for(let i = 0;i < cores.length; i +=1){
cores[i].addEventListener('click', seleciona); 

// function logcor(){
//   console.log("pl");
// }
// }


function seleciona(){
  removeClass();
  selectedColor.classList.add('color');
  selectedColor.classList.add('selected');
    console.log(selectedColor);
}

  function removeClass(){
    
  }
}


//   let list = document.querySelector('#color-palette').children;
//   console.log(list);
//   for(let i = 0; i < list.length; i += 1){
//     for(let index = 0; index < list[i].classList.length; i += 1){
//       if (list[i].classList[index] === '.selected') {
//         list[i].classList.remove('.selected');
        
//       }
//       if (list[i].classList[i] === '.selectedColor'){
//         (list[i].classList.remove[i] === '.selectedColor')
//       }
//     }
//   }
// }}