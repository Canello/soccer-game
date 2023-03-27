import { SCREEN } from "../utils/settings.js";

export class Drawer {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;
        this.context = this.makeScreenAndGetContext();
    }

    draw() {
        this.clearScreen();
        this.drawGameObject(this.ball);
        this.drawGameObject(this.ground);
        this.drawGameObject(this.player);
        this.drawGameObject(this.goal);
    }

    clearScreen() {
        this.context.clearRect(0, 0, SCREEN.width, SCREEN.height);
    }

    drawGameObject(gameObject) {
        const { x, y, width, height, color, opacity } = gameObject;

        // y starts counting from the bottom.
        // x starts counting from the leftmost side of the map, event if it is outside of the screen.
        // It's necessary to convert these x,y positions to coordinates on the screen (canvas).
        const [xScreen, yScreen] = this.toScreenPosition(x, y, height);

        this.context.fillStyle = color;
        this.context.globalAlpha = opacity;
        this.context.fillRect(xScreen, yScreen, width, height);
    }

    toScreenPosition(x, y, height) {
        return [
            SCREEN.width / 2 + x - (this.ball.x + this.ball.width / 2),
            SCREEN.height - y - height,
        ];
    }

    makeScreenAndGetContext() {
        const screen = document.getElementById("screen");
        screen.setAttribute("width", `${SCREEN.width}px`);
        screen.setAttribute("height", `${SCREEN.height}px`);
        screen.style.border = "2px solid grey";
        return screen.getContext("2d");
    }
}
