let player = 1;
let block = 2;
let finish = 3;

let canvasSize = 800;
let gridNr = 10;
let gridSize = canvasSize / gridNr;
let grids = [];

function setup() {
    createCanvas(canvasSize, canvasSize);
    
    // Creating the grid containing the maze
    for(var i=0; i<gridNr; i++){
        grids[i] = [];
        for(var j=0; j<gridNr; j++){
            grids[i][j] = new Grid(i * gridSize, j * gridSize, gridSize, 0);
        }
    }
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
    if(keyCode === LEFT_ARROW)
        player.x -= playerStep;
    
    if(keyCode === RIGHT_ARROW)
        player.x += playerStep;
    
    if(keyCode === UP_ARROW)
        player.y -= playerStep;
    
    if(keyCode === DOWN_ARROW)
        player.y += playerStep;
}