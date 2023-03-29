import { DT, MAP } from "../utils/settings.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Drawer } from "./Drawer.js";
import { Goal } from "./Goal.js";
import { Ground } from "./Ground.js";
import { Engine } from "./Engine.js";

export class Game {
    constructor() {
        this.ball = new Ball();
        this.ground = new Ground(0, 0, MAP.width, 20);
        this.player = new Player(
            MAP.width / 3,
            this.ground.height,
            50,
            50,
            this.ground
        );
        this.goal = new Goal(0, this.ground.height, 10, 80);

        this.engine = new Engine(
            this.ball,
            this.ground,
            this.player,
            this.goal
        );
        this.drawer = new Drawer(
            this.ball,
            this.ground,
            this.player,
            this.goal
        );

        this.isPlaying = false;
    }

    start() {
        this.isPlaying = true;
        this.gameLoop();
    }

    stop() {
        this.isPlaying = false;
    }

    gameLoop() {
        if (!this.isPlaying) return;
        this.engine.apply();
        this.drawer.draw();
        setTimeout(() => this.gameLoop(), DT);
    }
}
