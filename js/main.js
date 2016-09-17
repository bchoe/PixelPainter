function displayBox(){

let height = 20;
let width = 40;
let module = {};
let displayDiv = document.getElementById('pixelPainter');

module.createGrid = function(){
  for(x = 0; x < width; x++){
    //creates a column
    let createdRow = document.createElement('div');
    //adds values to that column
    for(y = 0; y < height; y++){
      let gridBox = document.createElement('div');
      gridBox.className = 'button';
      gridBox.id = 'column'+ x + 'row' +y;
      gridBox.addEventListener('click', (function(selecColor){
        gridBox.style.backgroundColor = 'rgb(255,0,0)';
      }));
      createdRow.appendChild(gridBox);
      createdRow.className = 'column';
    }
    displayDiv.appendChild(createdRow);
  }
};

return module;

}

let display = new displayBox();
display.createGrid();