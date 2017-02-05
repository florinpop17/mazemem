let player;
function setup() {
    createCanvas(800, 800);
    
    player = new Player(0, 0, 40);
}

function draw() {
    background(51);
    
    player.draw();
}