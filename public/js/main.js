let player;
let playerStep;

let canvasSize = 800;
let gridNr = 20;
let gridSize = playerStep = canvasSize / gridNr;
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
    
    player = new Player(1, 1, gridSize - 1); // the 1 means the offset of the lines
}

function draw() {
    background(51);
    //drawLines();
    
    grids.forEach(gridX => {
        gridX.forEach(grid => {
            grid.draw(); 
        });
    })
    
    //player.draw();
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

function drawLines() {
    strokeWeight(1);
    stroke(255);
    
    // Vertical lines
    for(var i = 0; i < gridNr; i++){
        line(i * gridSize, 0, i * gridSize, height);
    }
    
    // Horizontal lines
    for(var i = 0; i < gridNr; i++){
        line(0, i * gridSize, width, i * gridSize);
    }
}