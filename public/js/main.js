let canvasSize = 800;
let gridNr = 10;
let gridSize = canvasSize / gridNr;
let grid = [];

let current;
let next;
let finish;

let stack = [];

let gameStarted = false;
let readyToStart = false;
let startBtn = document.getElementById('start');

startBtn.addEventListener('click', function(){
    this.style.visibility = 'hidden';
    gameStarted = true;
    loop();
});

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
    finish = grid(floor(random(0, grid.length)));
}

function draw() {
    background(51);
    
    grid.forEach(cell => {
        cell.draw();
    });
    
    if(gameStarted){
        showHideCells(current.i, current.j);
    }
    
    if (!readyToStart) {
        fill(255);
        textSize(50);
        textAlign(CENTER);
        text('Generating maze...', width/2, height/2);
    } else if (!gameStarted) {
        fill(255);
        text('Ready to start!', width/2, height/2);
        noLoop();
    }
    
    mazeGeneratorAlgorithm();
}

function showHideCells(i, j) {
    var cellsToShow = [];
    
    let thisCell    = grid[index(i, j)];
    let top         = grid[index(i, j-1)];
    let topLeft     = grid[index(i-1,j-1)];
    let topRight    = grid[index(i+1,j-1)];
    let right       = grid[index(i+1, j)];
    let bottom      = grid[index(i, j+1)];
    let bottomLeft  = grid[index(i-1,j+1)];
    let bottomRight = grid[index(i+1,j+1)];
    let left        = grid[index(i-1, j)];
    
    cellsToShow.push(thisCell);
    cellsToShow.push(top);
    cellsToShow.push(topLeft);
    cellsToShow.push(topRight);
    cellsToShow.push(right);
    cellsToShow.push(bottom);
    cellsToShow.push(bottomLeft);
    cellsToShow.push(bottomRight);
    cellsToShow.push(left);
    
    grid.forEach(cell => {
        cellsToShow.forEach(cellToShow => {
            if(cellToShow){
                if(cellToShow === cell){
                    cell.visible = true;
                } else {
                    cell.visible = false;
                }
            }
        }); 
    });
    cellsToShow.forEach(cell => {
        if(cell){
            cell.visible = true;
        }
    });
    
}

function mazeGeneratorAlgorithm() {
    current.visited = true;
    current.highlight();
    
    // STEP 1
    next = checkNeighbors(current.i, current.j);
    if(next) {
        next.visited = true;
        
        // STEP 2
        stack.push(current);
        
        // STEP 3
        removeWalls(current, next);
        
        // STEP 4
        current = next;
    } else if(stack.length > 0) {
        var cell = stack.pop();
        
        current = cell;
    } else if(!readyToStart) {
        
        // Ready to play -> finished generating the maze
        readyToStart = true;
        
        // Show start Button
        startBtn.style.visibility = 'visible';
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
        return neighbors[r];
    }
    
    // Else return undefined
    return undefined;
}

function removeWalls(a, b) {
    let x = a.i - b.i;
    if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;   
    } else if(x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    
    let y = a.j - b.j;
    if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;   
    } else if(y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function index(i, j) {
    // Check edges
    if(i < 0 || j < 0 || i > gridNr - 1 || j > gridNr - 1)
        return -1;
    
    return i + j * gridNr;
}

function keyPressed() {
    if(gameStarted){
        let next;
        let test;
        let i = current.i;
        let j = current.j;
        
        // Testig if the cell exist and it doesn't have a wall on the direction you are trying to move
        
        if(keyCode === LEFT_ARROW){
            test = grid[index(i-1, j)];
            if(test && !test.walls[1])
                next = test;
        }    
        if(keyCode === RIGHT_ARROW){
            test = grid[index(i+1, j)];
            if(test && !test.walls[3])
                next = test;
        }    
        if(keyCode === UP_ARROW){
            test = grid[index(i, j-1)];
            if(test && !test.walls[2])
                next = test;
        }    
        if(keyCode === DOWN_ARROW){
            test = grid[index(i, j+1)];
            if(test && !test.walls[0])
                next = test;
        }
        
        if(next)
            current = next;
    }
}

