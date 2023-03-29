import { CollisionHandler } from "./CollisionHandler.js";
import { InputListener } from "./InputListener.js";

export class Engine {
    constructor(ball, ground, player, goal, inputListener) {
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
        this.inputListener = inputListener;
    }

    apply() {
        this.player.move(this.inputListener.keyPressed);
        this.ball.move();
        this.collisionHandler.handle();
    }
}
