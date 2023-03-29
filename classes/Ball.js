import { GameObject } from "./GameObject.js";
import { COLORS, DT, FRICTION, GRAVITY, MAP } from "../utils/settings.js";

export class Ball extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = 20;
        this.height = 20;
        this.x = MAP.width / 2 - this.width / 2;
        this.y = MAP.height / 2 - this.height / 2;
        this.color = COLORS.ball;
    }

    move() {
        const [vxInertial, vyInertial] = this.inertialSpeed();

        this.x = this.x + this.vx * DT;
        this.vx = vxInertial;
        this.ax = -this.friction();

        this.y = this.y + this.vy * DT;
        this.vy = vyInertial;
        this.ay = -GRAVITY;
    }

    inertialSpeed() {
        const nextVx = this.vx + this.ax * DT;
        const nextVy = this.vy + this.ay * DT;
        return [
            Math.abs(nextVx) <= this.ax * DT ? 0 : nextVx,
            Math.abs(nextVy) <= this.ay * DT ? 0 : nextVy,
        ];
    }

    friction() {
        return this.vx === 0
            ? 0
            : (this.vx / Math.abs(this.vx)) * FRICTION.ball;
    }
}
