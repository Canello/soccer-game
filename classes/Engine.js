import { CollisionHandler } from "./CollisionHandler.js";
import { KeyboardListener } from "./KeyboardListener.js";

export class Engine {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;

        this.collisionHandler = new CollisionHandler(
            this.ball,
            this.ground,
            this.player,
            this.goal
        );
        this.keyboardListener = new KeyboardListener();
        this.keyboardListener.listen();
    }

    apply() {
        this.player.move(this.keyboardListener.keyPressed);
        this.ball.move();
        this.collisionHandler.handle();
    }
}
