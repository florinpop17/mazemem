let top = 0;
let right = 1;
let bottom = 2;
let left = 3;

class Cell{
    constructor(x, y, gridSize){
        this.x = x;
        this.y = y;
        this.w = gridSize;
        this.walls = [true, true, true, true];
    }
    
    draw() {
        
    }
}