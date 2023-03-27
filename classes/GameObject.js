export class GameObject {
    constructor(x, y, width, height, opacity = 1) {
        this.color = "grey";
        this.opacity = opacity;
        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }
}
