let player;

let canvasSize = 800;
let gridSize = canvasSize / 20;


function setup() {
    createCanvas(canvasSize, canvasSize);
    
    player = new Player(0, 0, gridSize);
}

function draw() {
    background(51);
    
    player.draw();
}