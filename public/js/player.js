class Player{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    draw() {
        fill(200, 0, 100);
        strokeWeight(0);
        rect(this.x, this.y, this.size, this.size);
    }
}