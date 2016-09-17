function displayBox(){

let height = 20;
let width = 40;
let module = {};
let displayDiv = document.getElementById('pixelPainter');
let colorDiv = document.getElementById('colors');
module.selectedColor = 'black';

module.createGrid = function(){
  for(x = 0; x < width; x++){
    //creates a column
    let createdRow = document.createElement('div');
    //adds values to that column
    for(y = 0; y < height; y++){
      let gridBox = document.createElement('div');
      gridBox.className = 'button';
      gridBox.id = 'column'+ x + 'row' +y;
      gridBox.addEventListener('click', (function(){
        gridBox.style.backgroundColor = module.selectedColor;
      }));
      createdRow.appendChild(gridBox);
      createdRow.className = 'column';
    }
    displayDiv.appendChild(createdRow);
  }
};

module.createColorBox = function(){
  let redColorBox = document.createElement('div');
  let greenColorBox = document.createElement('div');
  let blueColorBox = document.createElement('div');
  let blackColorBox = document.createElement('div');
  let whiteColorBox = document.createElement('div');
  redColorBox.className = 'colorBox';
  greenColorBox.className = 'colorBox';
  blueColorBox.className = 'colorBox';
  blackColorBox.className = 'colorBox';
  whiteColorBox.className = 'colorBox';

  redColorBox.style.backgroundColor = 'red';
  greenColorBox.style.backgroundColor = 'green';
  blueColorBox.style.backgroundColor = 'blue';
  blackColorBox.style.backgroundColor = 'black';
  whiteColorBox.style.backgroundColor = 'white';

  redColorBox.addEventListener('click', (function(){
    module.selectedColor = 'red';
    console.log(module.selectedColor);
  }));
  greenColorBox.addEventListener('click', (function(){
    module.selectedColor = 'green';
    console.log(module.selectedColor);
  }));
  blueColorBox.addEventListener('click', (function(){
    module.selectedColor = 'blue';
    console.log(module.selectedColor);
  }));
  blackColorBox.addEventListener('click', (function(){
    module.selectedColor = 'black';
    console.log(module.selectedColor);
  }));
  whiteColorBox.addEventListener('click', (function(){
    module.selectedColor = 'white';
    console.log(module.selectedColor);
  }));

  colorDiv.appendChild(redColorBox);
  colorDiv.appendChild(greenColorBox);
  colorDiv.appendChild(blueColorBox);
  colorDiv.appendChild(blackColorBox);
  colorDiv.appendChild(whiteColorBox);
};

return module;

}

let display = new displayBox();
display.createColorBox();
display.createGrid();