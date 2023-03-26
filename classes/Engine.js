import { KeyboardListener } from "./KeyboardListener.js";

export class Engine {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;
        this.keyboardListener = new KeyboardListener();
        this.keyboardListener.listen();
    }

    apply() {
        // move player according inputs + gravity
        this.player.move(this.keyboardListener.keyPressed);

        // move ball according gravity
        this.ball.move();

        // check for collisions
        //     handle player-ground collision
        //     handle ball-ground collision
        //     handle player-goal collision

        //     handle player-player collision
        //     handle player-ball collision

        //     handle ball-goal collision

        this.player.handleCollisions(this.ground, this.goal, this.ball);
        this.ball.handleCollisions(this.ground, this.player);
    }
}
