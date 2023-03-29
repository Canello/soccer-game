import { GameObject } from "./GameObject.js";
import { COLORS, PLAYER_SPEED } from "../utils/settings.js";
import { Physics } from "./Physics.js";

export class Player extends GameObject {
    constructor(x, y, width, height, ground) {
        super(x, y, width, height);
        this.color = COLORS.player;
        this.opacity = 0.5;

        this.friction = 0.05;
        this.elasticity = 0;
        this.yMinimumReboundSpeed = 0;

        this.ground = ground;
    }

    move(keyPressed) {
        Physics.tick(this);
        this.handleInput(keyPressed);
    }

    handleInput(keyPressed) {
        const [vxInput, vyInput] = this.inputSpeed(keyPressed);
        this.vx = vxInput ? vxInput : this.vx;
        this.vy = vyInput ? vyInput : this.vy;
    }

    inputSpeed(keyPressed) {
        const speed = {
            ArrowUp: [0, this.isTouchingTheGround() ? PLAYER_SPEED : 0],
            ArrowRight: [PLAYER_SPEED, 0],
            ArrowLeft: [-PLAYER_SPEED, 0],
        };
        return speed[keyPressed] ?? [0, 0];
    }

    isTouchingTheGround() {
        return this.y <= this.ground.y + this.ground.height;
    }
}
