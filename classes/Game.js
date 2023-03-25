import { MAP } from "../utils/settings.js";
import { KeyboardListener } from "./KeyboardListener.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Drawer } from "./Drawer.js";
import { Goal } from "./Goal.js";
import { Ground } from "./Ground.js";
import { PhysicsEngine } from "./PhysicsEngine.js";

export class Game {
    constructor() {
        this.ball = new Ball();
        this.ground = new Ground(0, 0, MAP.width, 20);
        this.player = new Player(MAP.width / 3, this.ground.height);
        this.goal = new Goal(0, this.ground.height, 10, 80);

        this.keyboardListener = new KeyboardListener();
        this.physicsEngine = new PhysicsEngine();
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
        // while (this.isPlaying) {
        this.gameLoop();
        // }
    }

    stop() {
        this.isPlaying = false;
    }

    gameLoop() {
        this.physicsEngine.apply();
        this.drawer.draw();
    }
}
