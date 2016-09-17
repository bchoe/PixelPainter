function pixelPainter(){
let height = 10;
let width = 20;
let module = {};
let displayDiv = document.getElementById('pixelPainter');

module.createGrid = function(){
  for(x = 0; x < width; x++){
    let createdRow = document.createElement('div');
    for(y = 0; y < height; y++){
      let gridBox = document.createElement('div');
      gridBox.style.border = 'solid';
      gridBox.style.border.width = '1px';
      gridBox.style.height = '10px';
      gridBox.style.width = '10px';
      createdRow.appendChild(gridBox);
      createdRow.className = 'column';
      console.log('hello');
    }
    displayDiv.appendChild(createdRow);

  }
};
return module;
}

let pPainter = new pixelPainter();
pPainter.createGrid();

