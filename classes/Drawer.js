import { context, screenHeight, screenWidth } from "../utils/context.js";

export class Drawer {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;
    }

    draw() {
        this.drawGameObject(this.ball);
        this.drawGameObject(this.ground);
        this.drawGameObject(this.player);
        this.drawGameObject(this.goal);
    }

    drawGameObject(gameObject) {
        const { x, y, width, height, color } = gameObject;
        const [xScreen, yScreen] = this.toScreenPosition(x, y);
        context.fillStyle = color;
        context.fillRect(xScreen, yScreen, width, height);
    }

    toScreenPosition(x, y) {
        return [screenWidth / 2 + x - this.ball.x, screenHeight - y];
    }
}
