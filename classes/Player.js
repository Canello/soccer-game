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
        this.width = 20;
        this.height = 60;
        this.color = COLORS.player;
    }

    move(keyPressed) {
        this.x = this.x + this.vx * DT;
        this.vx = this.inputSpeed(keyPressed).vx
            ? this.inputSpeed(keyPressed).vx
            : this.inertialSpeed().vx;
        this.ax = -this.friction();

        this.y = this.y + this.vy * DT;
        this.vy = this.inputSpeed(keyPressed).vy
            ? this.inputSpeed(keyPressed).vy
            : this.inertialSpeed().vy;
        this.ay = -GRAVITY;
    }

    inertialSpeed() {
        const nextVx = this.vx + this.ax * DT;
        const nextVy = this.vy + this.ay * DT;
        return {
            vx: Math.abs(nextVx) <= this.ax * DT ? 0 : nextVx,
            vy: Math.abs(nextVy) <= this.ay * DT ? 0 : nextVy,
        };
    }

    inputSpeed(keyPressed) {
        const speed = {
            ArrowUp: { vx: 0, vy: PLAYER_SPEED },
            ArrowRight: { vx: PLAYER_SPEED, vy: 0 },
            ArrowLeft: { vx: -PLAYER_SPEED, vy: 0 },
        };
        return speed[keyPressed] ?? { vx: 0, vy: 0 };
    }

    friction() {
        return this.vx === 0 ? 0 : (this.vx / Math.abs(this.vx)) * FRICTION;
    }
}
