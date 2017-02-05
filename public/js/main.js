let canvasSize = 800;
let gridNr = 15;
let gridSize = canvasSize / gridNr;
let grid = [];

var current;

function setup() {
    createCanvas(canvasSize, canvasSize);
    
    // Creating the grid containing the maze
    for(let i=0; i<gridNr; i++){
        for(let j=0; j<gridNr; j++){
            grid.push(new Cell(i * gridSize, j * gridSize, gridSize));
        }
    }
}

function draw() {
    background(51);
    
    grid.forEach(cell => {
        cell.draw();
    })
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        
    }    
    if(keyCode === RIGHT_ARROW){
        
    }    
    if(keyCode === UP_ARROW){
        
    }    
    if(keyCode === DOWN_ARROW){
        
    }
}