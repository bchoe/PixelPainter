function pixelPainter(){
let height = 20;
let width = 30;
let module = {};
let displayDiv = document.getElementById('pixelPainter');

module.createGrid = function(){
  for(x = 0; x < width; x++){
    for(y = 0; y < height; y++){
      let gridBox = document.createElement('button');
      gridBox.style.color = 'red';
      displayDiv.appendChild(gridBox);
      console.log('hello');
    }
  }
};
return module;
}

let pPainter = new pixelPainter();
pPainter.createGrid();

