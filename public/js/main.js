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
    
    // Starting at grid[0]
    current = grid[0];
}

function draw() {
    background(51);
    
    grid.forEach(cell => {
        cell.draw();
    });
    
    current.visited = true;
    checkNeighbors(current.x, current.y);
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

function checkNeighbors(i, j){
    var neighbors = [];
    
    var top    = grid[index(i, j-1)];
    var right  = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left   = grid[index(i-1, j)];
    
    if(!top.visited)
        neighbors.push(top);
    if(!right.visited)
        neighbors.push(right);
    if(!bottom.visited)
        neighbors.push(bottom);
    if(!left.visited)
        neighbors.push(left);
}

function index(i, j) {
    return i + j * gridNr;
}

