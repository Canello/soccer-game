import { State } from "./State.js";
import { KeyboardListener } from "./KeyboardListener.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Drawer } from "./Drawer.js";
import { Goal } from "./Goal.js";
import { Ground } from "./Ground.js";

export class Game {
    constructor() {
        this.isPlaying = false;
        this.state = new State();
        this.keyboardListener = new KeyboardListener();
        this.player = new Player(20, 20, 40, 60);
        this.ball = new Ball();
        this.ground = new Ground(0, 0, 30, 20);
        this.goal = new Goal(4, 4, 30, 20);
        this.drawer = new Drawer(
            this.ball,
            this.ground,
            this.player,
            this.goal
        );
    }

    start() {
        this.isPlaying = true;
        this.gameLoop();
    }

    stop() {
        this.isPlaying = false;
    }

    gameLoop() {
        // while (this.isPlaying) {
        this.update();
        this.drawer.draw();
        // }
    }

    update() {}

    draw() {
        this.player.draw();
    }
}
