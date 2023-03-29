export class GameObject {
    constructor(x, y, width, height, opacity = 1) {
        this.color = "grey";
        this.opacity = opacity;
        this.width = width;
        this.height = height;

        this.friction = 0; // Horizontal deceleration while object is in movement in pixels/DT²
        this.elasticity = 0; // Fraction of speed conserved after collision borders or ground

        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }

    get center() {
        return [this.x + this.width / 2, this.y + this.height / 2];
    }
}
