class Cell{
    constructor(i, j, gridSize){
        this.i = i;
        this.j = j;
        this.w = gridSize;
        this.x = i * this.w;
        this.y = j * this.w;
        //           top, right, bottom, left 
        this.walls = [true, true, true, true];
        
        this.visited = false;
        
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
        
        if(this.visited){
            noStroke();
            fill(200, 0, 100, 100);
            rect(this.x, this.y, this.w, this.w);
        }
    }
    
    highlight() {
        noStroke();
        fill(0, 0, 255, 100);
        rect(this.x, this.y, this.w, this.w);
    }
}