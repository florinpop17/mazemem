class Cell{
    constructor(i, j, gridSize){
        this.i = i;
        this.j = j;
        this.w = gridSize;
        this.x = i * this.w;
        this.y = j * this.w;
        
        //           top, right, bottom, left 
        this.walls = [true, true, true, true];
        
        // Not used anymore
//        this.visited = false;
        this.visible = false;
        this.finalCell = false;
    }
    
    draw() {
        if(this.visible){
            
            if(this.finalCell){
                fill(255, 0, 255);
            } else {
                fill(0);
            }
            
            noStroke();
            rect(this.x, this.y, this.w, this.w);
            
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

            // Not used anymore
            
//            if(this.visited){
//                noStroke();
//                fill(200, 0, 100, 100);
//                rect(this.x, this.y, this.w, this.w);
//            }
        }
    }
    
    highlight() {
        fill(150, 0, 255);
        noStroke();
        rect(this.x + 3, this.y + 3, this.w - 6, this.w - 6);
    }
}