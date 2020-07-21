const container = document.querySelector('#container');
let gridSquare = document.createElement('div');
for (i=0; i<16*16; i++) {
  container.appendChild(gridSquare.cloneNode(true));
}
const allGridSquares = container.children;
for (i=0; i<16*16; i++) {
  allGridSquares[i].classList.add('grid-square');
  allGridSquares[i].addEventListener('mouseenter', fillBlack)
};
function fillBlack(e) {
  e.target.style.backgroundColor = '#000';
}
const resetBtn = document.querySelector('#reset-button');
const bwBtn = document.querySelector('#bw-button');
const greyscaleBtn = document.querySelector('#greyscale-button');
const randomizerBtn = document.querySelector('#random-color-button');

resetBtn.addEventListener('click', resetGrid);
bwBtn.addEventListener('click', changeToBlack);
greyscaleBtn.addEventListener('click', makeGreyscale);
randomizerBtn.addEventListener('click', randomizeColor);

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
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].addEventListener('mouseenter', backToBlack);
  }
  function backToBlack(e) {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = '#000';
  }
}
function randomizeColor() {
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
  function getGreyscaleColor(e) {
     console.log(e.target.style.opacity);
    if (e.target.style.backgroundColor !== 'rgb(0, 0, 0)') {
      e.target.style.backgroundColor = '#000';
      e.target.style.opacity = 0.1;
    } else {
      e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
      console.log(e.target.style.opacity);
    }
  }
  for (i=0; i<allGridSquares.length; i++) {
    allGridSquares[i].addEventListener('mouseenter', getGreyscaleColor);
  }
}