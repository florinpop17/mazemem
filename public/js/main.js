let player = 1;
let block = 2;
let finish = 3;

let canvasSize = 800;
let gridNr = 15;
let gridSize = canvasSize / gridNr;
let grid = [];

function setup() {
    createCanvas(canvasSize, canvasSize);
    
    // Creating the grid containing the maze
    for(let i=0; i<gridNr; i++){
        for(let j=0; j<gridNr; j++){
            grid.push(new Cell(i, j));
        }
    }
    
    // Generate blocks at random places
    randomizeBlocks();
    
    // Draw player in 1st spot
    grids[0][0].val = player;
    
    // Draw final block in random spot
    grids[3][3].val = finish;
}

function draw() {
    background(51);
    
    grids.forEach(gridX => {
        gridX.forEach(grid => {
            grid.draw(); 
        });
    });
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