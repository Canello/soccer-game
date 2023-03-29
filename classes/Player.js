import { GameObject } from "./GameObject.js";
import { COLORS } from "../utils/settings.js";
import { DIRECTIONS } from "../utils/constants.js";
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
        const keyToDirection = {
            ArrowUp: DIRECTIONS.up,
            ArrowRight: DIRECTIONS.right,
            ArrowLeft: DIRECTIONS.left,
        };
        Physics.inputSpeed(
            this,
            keyToDirection[keyPressed],
            this.isTouchingTheGround()
        );
    }

    isTouchingTheGround() {
        return this.y <= this.ground.y + this.ground.height;
    }
}
