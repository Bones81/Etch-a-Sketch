
const container = document.getElementById('container');
const newDiv = document.createElement('div');
newDiv.classList.add('inner-square');
container.appendChild(newDiv);
//const num = prompt('How many rows/columns?');
innerSquareDivs = document.getElementsByClassName('inner-square');
/*innerSquareDivs.forEach({
    style.width = 640/num; 
    style.height = 640/num;
});*/
for (i=1; i<16*16; i++) {
  container.appendChild(newDiv.cloneNode(true));  
};

function fillColor(e) {
    e.style.backgroundColor = '#000';
}

