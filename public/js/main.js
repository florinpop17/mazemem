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
    
    player.draw();
}