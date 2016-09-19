function displayBox(){

  let height = 20;
  let width = 50;
  let module = {};
  let displayDiv = document.getElementById('pixelPainter');
  let colorDiv = document.getElementById('colors');
  let sliderDiv = document.getElementById('sliders');
  let currentSelectedColorDiv = document.getElementById('currentSelectedColor');
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
    let colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'brown', 'pink'];
    for (var i = 0; i < 10 ;i++){
      let showColorBox = document.createElement('div');
      showColorBox.classList.add('colorBox');
      showColorBox.style.backgroundColor = colorArr[i];
      switch(colorArr[i]){
          case 'red':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 255;
              document.getElementById('greenSlider').value = 0;
              document.getElementById('blueSlider').value = 0;
              module.selectedColor = 'red';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));

              break;
          case 'green':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 0;
              document.getElementById('greenSlider').value = 255;
              document.getElementById('blueSlider').value = 0;
              module.selectedColor = 'green';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'blue':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 0;
              document.getElementById('greenSlider').value = 0;
              document.getElementById('blueSlider').value = 255;
              module.selectedColor = 'blue';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'black':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 0;
              document.getElementById('greenSlider').value = 0;
              document.getElementById('blueSlider').value = 0;
              module.selectedColor = 'black';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'white':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 255;
              document.getElementById('greenSlider').value = 255;
              document.getElementById('blueSlider').value = 255;
              module.selectedColor = 'white';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'orange':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 255;
              document.getElementById('greenSlider').value = 165;
              document.getElementById('blueSlider').value = 0;
              module.selectedColor = 'orange';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'purple':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 128;
              document.getElementById('greenSlider').value = 0;
              document.getElementById('blueSlider').value = 128;
              module.selectedColor = 'purple';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'yellow':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 255;
              document.getElementById('greenSlider').value = 255;
              document.getElementById('blueSlider').value = 0;
              module.selectedColor = 'yellow';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'brown':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 165;
              document.getElementById('greenSlider').value = 42;
              document.getElementById('blueSlider').value = 42;
              module.selectedColor = 'brown';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
          case 'pink':
              showColorBox.addEventListener('click', (function(){
              document.getElementById('redSlider').value = 255;
              document.getElementById('greenSlider').value = 192;
              document.getElementById('blueSlider').value = 203;
              module.selectedColor = 'pink';
              document.getElementById('currentColor').style.backgroundColor = module.selectedColor;
              console.log(module.selectedColor);
              }));
              break;
        }
      colorDiv.appendChild(showColorBox);
    }
  };

  module.colorSliders = function(){
    let slideArr = ['red', 'green', 'blue'];
    let currentColor = document.createElement('div');
    for (var i = 0; i < slideArr.length; i++){
      let slide = document.createElement('input');
      slide.id = slideArr[i] + 'Slider';
      slide.setAttribute('type', 'range');
      slide.setAttribute('min', 0);
      slide.setAttribute('max', 255);
      slide.value = 0;
      switch(slideArr[i]){
        case 'red':
            slide.addEventListener('change', (function(){
            module.r = redSlider.value;
            module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
            currentColor.style.backgroundColor = module.selectedColor;
            console.log(module.selectedColor);
            }));
          break;
        case 'green':
            slide.addEventListener('change', (function(){
            module.g = greenSlider.value;
            module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
            currentColor.style.backgroundColor = module.selectedColor;
            }));
          break;
        case 'blue':
            slide.addEventListener('change', (function(){
            module.b = blueSlider.value;
            module.selectedColor = 'rgb(' + module.r + ', ' + module.g + ', ' + module.b +')';
            currentColor.style.backgroundColor = module.selectedColor;
            }));
          break;
      }
      sliderDiv.appendChild(slide);
    }
    currentColor.id = 'currentColor';
    currentColor.className = 'colorBox';
    currentColor.style.backgroundColor = module.selectedColor;
    currentSelectedColorDiv.appendChild(currentColor);
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
    module.clicked  = false;
    });
    document.getElementById('clear').appendChild(clearButton);

  };

return module;

}

let display = new displayBox();
display.createColorBox();
display.colorSliders();
display.createGrid();
display.clearGrid();