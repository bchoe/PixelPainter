function displayBox(){

let height = 60;
let width = 80;
let module = {};
let displayDiv = document.getElementById('pixelPainter');
let colorDiv = document.getElementById('colors');
module.r = 0;
module.g = 0;
module.b = 0;
module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';

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
    document.getElementById('redSlider').Value = 255;
    document.getElementById('greenSlider').Value = 0;
    document.getElementById('blueSlider').Value = 0;
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

module.colorSliders = function(){
  let redSlider = document.createElement('input');
  let greenSlider = document.createElement('input');
  let blueSlider = document.createElement('input');

  redSlider.id = 'redSlider';
  greenSlider.id = 'greenSlider';
  blueSlider.id = 'blueSlider';
  redSlider.setAttribute('type', 'range');
  greenSlider.setAttribute('type', 'range');
  blueSlider.setAttribute('type', 'range');
  redSlider.setAttribute('min', 0);
  greenSlider.setAttribute('min', 0);
  blueSlider.setAttribute('min', 0);
  redSlider.setAttribute('max', 255);
  greenSlider.setAttribute('max', 255);
  blueSlider.setAttribute('max', 255);


  redSlider.addEventListener('change', (function(){
    module.r = redSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
    console.log(module.selectedColor);
  }));
  greenSlider.addEventListener('change', (function(){
    module.g = greenSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
  }));
  blueSlider.addEventListener('change', (function(){
    module.b = blueSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
  }));
  colorDiv.appendChild(redSlider);
  colorDiv.appendChild(greenSlider);
  colorDiv.appendChild(blueSlider);
};

return module;

}

let display = new displayBox();
display.createColorBox();
display.colorSliders();
display.createGrid();