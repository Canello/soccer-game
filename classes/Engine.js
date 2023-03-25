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
        /*
        move player according inputs + gravity
        move ball according gravity

        check for collisions
            handle player-player collision
            handle player-ball collision
            handle player-ground collision
            handle player-goal collision

            handle ball-ground collision
            handle ball-goal collision
        */
        this.player.move(this.keyboardListener.keyPressed);
    }
}
