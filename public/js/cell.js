class Cell{
    constructor(x, y, gridSize){
        this.x = x;
        this.y = y;
        this.w = gridSize;
        //           top, right, bottom, left 
        this.walls = [true, true, true, true];
    }
    
    draw() {
        stroke(255);
        if(this.walls[0]){
            line(this.x, this.y, this.x + this.w, this.y);
        }
        
        if(this.walls[1]){
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.w);
        }
        
        if(this.walls[2]){
            line(this.x, this.y + this.w, this.x + this.w, this.y + this.w);
        }
        
        if(this.walls[3]){
            line(this.x, this.y, this.x, this.y + this.w);
        }
    }
}