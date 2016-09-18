function displayBox(){

let height = 60;
let width = 80;
let module = {};
let displayDiv = document.getElementById('pixelPainter');
let colorDiv = document.getElementById('colors');
module.clicked = false;
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
        if(module.clicked === false){
          module.clicked = true;
        } else {
          module.clicked = false;
        }
      }));
      gridBox.addEventListener('mouseover', function(){
        if(module.clicked === true){
          gridBox.style.backgroundColor = module.selectedColor;
        }
      });
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
  redColorBox.classList.add('colorBox');
  greenColorBox.classList.add('colorBox');
  blueColorBox.classList.add('colorBox');
  blackColorBox.classList.add('colorBox');
  whiteColorBox.classList.add('colorBox');

  redColorBox.style.backgroundColor = 'red';
  greenColorBox.style.backgroundColor = 'green';
  blueColorBox.style.backgroundColor = 'blue';
  blackColorBox.style.backgroundColor = 'black';
  whiteColorBox.style.backgroundColor = 'white';

  redColorBox.addEventListener('click', (function(){
    document.getElementById('redSlider').value = 255;
    document.getElementById('greenSlider').value = 0;
    document.getElementById('blueSlider').value = 0;
    module.selectedColor = 'red';
    document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
    console.log(module.selectedColor);
  }));
  greenColorBox.addEventListener('click', (function(){
    document.getElementById('redSlider').value = 0;
    document.getElementById('greenSlider').value = 255;
    document.getElementById('blueSlider').value = 0;
    module.selectedColor = 'green';
    document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
    console.log(module.selectedColor);
  }));
  blueColorBox.addEventListener('click', (function(){
    document.getElementById('redSlider').value = 0;
    document.getElementById('greenSlider').value = 0;
    document.getElementById('blueSlider').value = 255;
    module.selectedColor = 'blue';
    document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
    console.log(module.selectedColor);
  }));
  blackColorBox.addEventListener('click', (function(){
    document.getElementById('redSlider').value = 0;
    document.getElementById('greenSlider').value = 0;
    document.getElementById('blueSlider').value = 0;
    module.selectedColor = 'black';
    document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
    console.log(module.selectedColor);
  }));
  whiteColorBox.addEventListener('click', (function(){
    document.getElementById('redSlider').value = 255;
    document.getElementById('greenSlider').value = 255;
    document.getElementById('blueSlider').value = 255;
    module.selectedColor = 'white';
    document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
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
  let currentColor = document.createElement('div');

  redSlider.id = 'redSlider';
  greenSlider.id = 'greenSlider';
  blueSlider.id = 'blueSlider';
  currentColor.id = 'currentColor';
  redSlider.setAttribute('type', 'range');
  greenSlider.setAttribute('type', 'range');
  blueSlider.setAttribute('type', 'range');
  redSlider.setAttribute('min', 0);
  greenSlider.setAttribute('min', 0);
  blueSlider.setAttribute('min', 0);
  redSlider.setAttribute('max', 255);
  greenSlider.setAttribute('max', 255);
  blueSlider.setAttribute('max', 255);
  redSlider.value = 0;
  blueSlider.value = 0;
  greenSlider.value = 0;
  currentColor.className = 'colorBox';
  currentColor.style.backgroundColor = module.selectedColor;


  redSlider.addEventListener('change', (function(){
    module.r = redSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
    currentColor.style.backgroundColor = module.selectedColor;
    console.log(module.selectedColor);
  }));
  greenSlider.addEventListener('change', (function(){
    module.g = greenSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
    currentColor.style.backgroundColor = module.selectedColor;
  }));
  blueSlider.addEventListener('change', (function(){
    module.b = blueSlider.value;
    module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
    currentColor.style.backgroundColor = module.selectedColor;
  }));

  colorDiv.appendChild(redSlider);
  colorDiv.appendChild(greenSlider);
  colorDiv.appendChild(blueSlider);
  colorDiv.appendChild(currentColor);
};

module.clearGrid = function(){
  let clearButton = document.createElement('input');
  let selectedButtons = document.body.querySelectorAll('.button');

  clearButton.setAttribute('type', 'button');
  clearButton.value = 'clear';
  clearButton.addEventListener('click', function(){
    for(let i = 0; i < selectedButtons.length; i++){

      selectedButtons[i].style.backgroundColor = 'white';
    }
  });
  colorDiv.appendChild(clearButton);
};

return module;

}

let display = new displayBox();
display.createColorBox();
display.colorSliders();
display.createGrid();
display.clearGrid();