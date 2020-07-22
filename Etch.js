//create initial grid
const container = document.querySelector('#container');
let gridSquare = document.createElement('div');
for (i=0; i<16*16; i++) {
  container.appendChild(gridSquare.cloneNode(true));
}
const allGridSquares = container.children;
function defaultBehavior() {  
  for (i=0; i<16*16; i++) {
    allGridSquares[i].classList.add('grid-square');
    allGridSquares[i].addEventListener('mouseenter', fillBlack);
  }
}
function fillBlack(e) {
  e.target.style.backgroundColor = 'rgb(0, 0, 0)';
}
defaultBehavior();

const resetBtn = document.querySelector('#reset-button');
const bwBtn = document.querySelector('#bw-button');
const greyscaleBtn = document.querySelector('#greyscale-button');
const randomizerBtn = document.querySelector('#random-color-button');
const eraserBtn = document.querySelector('#eraser-button');

resetBtn.addEventListener('click', resetGrid);
bwBtn.addEventListener('click', changeToBlack);
greyscaleBtn.addEventListener('click', makeGreyscale);
randomizerBtn.addEventListener('click', randomizeColor);
eraserBtn.addEventListener('click', eraser);

function resetGrid() {
  container.innerHTML = "";
  let num = prompt('How many squares on each side of the grid? More squares equals finer control over the sketch.', '16');
  checkNum();
  function checkNum() {
    if (num<1||num>128) {
      num = prompt('Please choose an integer greater than 1 but no more than 128.');
      checkNum();
    }
  }  
  const sq = num * num;
  container.style.gridTemplateRows = `repeat(${num}, auto)`;
  container.style.gridTemplateColumns = `repeat(${num}, auto)`;  
  for (i=0; i<sq; i++) {
    container.appendChild(gridSquare.cloneNode(true));
  }
  for (i=0; i<sq; i++) {
    allGridSquares[i].classList.add('grid-square');
    allGridSquares[i].addEventListener('mouseenter', fillBlack);
  };
}
function changeToBlack() {
  //the following line of code removes existing eventListeners from container
  container.innerHTML = container.innerHTML;
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].innerHTML = "";
    allGridSquares[i].addEventListener('mouseenter', backToBlack);
  }
  function backToBlack(e) {
    e.target.style.backgroundColor = 'rgb(0, 0, 0)';
  }
}
function randomizeColor() {
  //the following line of code removes existing eventListeners from container
  container.innerHTML = container.innerHTML;
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].addEventListener('mouseenter', getRandomColor);
  };
  function getRandomColor(e) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    const randomColor = "rgb("+r+","+g+","+b+")";
    e.target.style.backgroundColor = randomColor;
  }  
}
function makeGreyscale() {
  //the following line of code removes existing eventListeners from container
  container.innerHTML = container.innerHTML;
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].addEventListener('mouseenter', getGreyscaleColor);
  }
  function getGreyscaleColor(e) {
    const blackRGB = "0, 0, 0";
    const startValue = "rgba(0, 0, 0, 0.1)";

    if(e.target.style.backgroundColor.search('rgba') === -1) {
      if(e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
        e.target.removeEventListener('mouseenter', getGreyscaleColor);
      } else {
        e.target.style.backgroundColor = startValue;
      }
    } else {
      let alphaValue = e.target.style.backgroundColor.slice(14, 17);
      //console.log(alphaValue);
      if (alphaValue > 0 && alphaValue < 1) {
        alphaValue = Number(alphaValue) + 0.1;
        //console.log(alphaValue);
        e.target.style.backgroundColor = `rgb(${blackRGB}, ${alphaValue})`;
        if(alphaValue == 1) {
          e.target.removeEventListener('mouseenter', getGreyscaleColor);
        }
      } else {
        console.log("An error may have occurred.");
      }
    }
  }
}
function eraser() {
  container.innerHTML = container.innerHTML;
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].addEventListener('mouseenter', erase);
  }
  function erase(e) {
    e.target.style.backgroundColor = "";
  }
}