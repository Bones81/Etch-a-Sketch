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


function resetGrid() {
  container.innerHTML = "";
  let num = prompt('How many squares on each side of the grid? More squares equals finer control over the sketch.', '16');
  checkNum();
  function checkNum() {
    if (num<1||num>256) {
      num = prompt('Please choose an integer greater than 1 but no more than 256.');
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
/*
for (i=0; i<sq; i++) {
  allGridSquares[i].addEventListener('mouseenter', ;
}

function fillColor(e) {
  e.target.style.backgroundColor = rgb(0,0,0);
}
function getRandomColor() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  const randomColor = "rgb("+r+","+g+","+b+")";
  return randomColor;
  /*When grid-item has a mouseenter event, fill it with a random color. Then remove event listener so that it cannot be changed from that color.
  grid-item.addEventListener('mouseenter', fill with appropriate color);
}

function makeGreyscale() {
/*if grid-item is empty, or not filled with any color yet, then begin filling at 10% opacity/saturation/hue? If grid-item not empty, add 10% opacity/saturation/hue to existing rgba color value.
}*/