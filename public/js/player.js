class Player{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    draw() {
        rect(this.x, this.y, this.size, this.size);
    }
}