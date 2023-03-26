import { GameObject } from "./GameObject.js";
import { COLORS, DT, GRAVITY, MAP } from "../utils/settings.js";

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
        this.x = this.x + this.vx * DT;
        this.vx = this.inertialSpeed().vx;
        this.ax = -this.friction();

        this.y = this.y + this.vy * DT;
        this.vy = this.inertialSpeed().vy;
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

    friction() {
        return this.vx === 0
            ? 0
            : (this.vx / Math.abs(this.vx)) * FRICTION.ball;
    }

    handleCollisions(ground, goal, player) {
        // if (this.hasBorderCollision()) this.handleBorderCollision();
        if (this.hasGroundCollision(ground)) this.handleGroundCollision(ground);
        // if (this.hasGoalCollision(goal)) this.handleGoalCollision(goal);
        // if (this.hasPlayerCollision(player)) this.handlePlayerColission(player);
    }

    hasGroundCollision(ground) {
        return (
            this.y < ground.y + ground.height &&
            this.x >= ground.x &&
            this.x <= ground.x + ground.width
        );
    }

    handleGroundCollision(ground) {
        this.y = ground.y + ground.height;
    }
}
