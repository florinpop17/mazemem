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
        stroke(255);
        if(this.walls[top]){
            line(this.x, this.y, this.x + this.w, this.y);
        }
        
        if(this.walls[right]){
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.w);
        }
        
        if(this.walls[bottom]){
            line(this.x, this.y + this.w, this.x + this.w, this.y + this.w);
        }
        
        if(this.walls[left]){
            line(this.x, this.y, this.x, this.y + this.w);
        }
    }
}