import { GameObject } from "./GameObject.js";
import {
    COLORS,
    DT,
    FRICTION,
    GRAVITY,
    PLAYER_SPEED,
} from "../utils/settings.js";

export class Player extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = 50;
        this.height = 50;
        this.color = COLORS.player;
        this.opacity = 0.5;
    }

    move(keyPressed) {
        const [vxInertial, vyInertial] = this.inertialSpeed();
        const [vxInput, vyInput] = this.inputSpeed(keyPressed);

        this.x = this.x + this.vx * DT;
        this.vx = vxInput ? vxInput : vxInertial;
        this.ax = -this.friction();

        this.y = this.y + this.vy * DT;
        this.vy = vyInput ? vyInput : vyInertial;
        this.ay = -GRAVITY;
    }

    inertialSpeed() {
        const dvx = this.ax * DT;
        const dvy = this.ay * DT;
        const nextVx = this.vx + dvx;
        const nextVy = this.vy + dvy;
        return [
            Math.abs(nextVx) <= dvx ? 0 : nextVx,
            Math.abs(nextVy) <= dvy ? 0 : nextVy,
        ];
    }

    inputSpeed(keyPressed) {
        const speed = {
            ArrowUp: [0, PLAYER_SPEED],
            ArrowRight: [PLAYER_SPEED, 0],
            ArrowLeft: [-PLAYER_SPEED, 0],
        };
        return speed[keyPressed] ?? [0, 0];
    }

    friction() {
        return this.vx === 0
            ? 0
            : (this.vx / Math.abs(this.vx)) * FRICTION.player;
    }
}
