class Cell{
    constructor(x, y, gridSize, val){
        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.val = val;
    }
    
    draw() {
        if(this.val === 0) // empty
            fill(200);
        if(this.val === 1) // the player is here
            fill(200, 0, 100);
        if(this.val === 2) // maze border
            fill(0);
        if(this.val === 3) // finish
            fill(100, 0, 200);
        
        strokeWeight(1);
        stroke(255);
        rect(this.x, this.y, this.gridSize, this.gridSize);
    }
}