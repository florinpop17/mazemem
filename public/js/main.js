let player;


let canvasSize = 800;
let gridNr = 20;
let gridSize = canvasSize / gridNr;
let grids = [];


function setup() {
    createCanvas(canvasSize, canvasSize);
    
    
    
    player = new Player(0, 0, gridSize);
}

function draw() {
    background(51);
    drawLines();
    
    player.draw();
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