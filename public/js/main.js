let canvasSize = 800;
let gridNr = 15;
let gridSize = canvasSize / gridNr;
let grid = [];

let current;
let next;

function setup() {
    createCanvas(canvasSize, canvasSize);
    
    // Creating the grid containing the maze
    for(let j=0; j<gridNr; j++){
        for(let i=0; i<gridNr; i++){
            grid.push(new Cell(i, j, gridSize));
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
    next = checkNeighbors(current.i, current.j);
        
    if(next) {
        next.visited = true;
        current = next;
    }
}

function checkNeighbors(i, j){
    var neighbors = [];
    
    let top    = grid[index(i, j-1)];
    let right  = grid[index(i+1, j)];
    let bottom = grid[index(i, j+1)];
    let left   = grid[index(i-1, j)];
        
    
    if(top && !top.visited)
        neighbors.push(top);
    
    if(right && !right.visited)
        neighbors.push(right);
    
    if(bottom && !bottom.visited)
        neighbors.push(bottom);
    
    if(left && !left.visited)
        neighbors.push(left);
            
    // If there are neighbors return a random one
    if(neighbors.length > 0){
        let r = floor(random(0, neighbors.length));
        console.log(neighbors.length);
        return neighbors[r];
    }
    
    // Else return undefined
    return undefined;
}

function index(i, j) {
    // Check edges
    if(i < 0 || j < 0 || i > gridNr - 1 || j > gridNr - 1)
        return -1;
    
    return i + j * gridNr;
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

