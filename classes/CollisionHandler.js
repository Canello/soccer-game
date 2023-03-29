import {
    ACCELERATION_PER_PENETRATION,
    BALL_ELASTICITY,
    DT,
    MAP,
} from "../utils/settings.js";

export class CollisionHandler {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;
    }

    handle() {
        this.handlePlayerBorderCollision();
        this.handlePlayerGroundCollision();

        this.handleBallBorderCollision();
        this.handleBallGroundCollision();

        this.handlePlayerBallCollision();
        this.handleBallGoalCollision();
    }

    handlePlayerBorderCollision() {
        if (!this.hasPlayerBorderCollision()) return;
        const isLeftsideCollision = this.player.x < 0;
        if (isLeftsideCollision) {
            this.player.x = 0;
        } else {
            this.player.x = MAP.width - this.player.width;
        }
    }

    hasPlayerBorderCollision() {
        return (
            this.player.x < 0 || this.player.x + this.player.width > MAP.width
        );
    }

    handlePlayerGroundCollision() {
        if (!this.hasPlayerGroundCollision()) return;
        this.player.y = this.ground.y + this.ground.height;
    }

    hasPlayerGroundCollision() {
        return this.player.y < this.ground.y + this.ground.height;
    }

    handleBallBorderCollision() {
        if (!this.hasBallBorderCollision()) return;
        const isLeftsideCollision = this.ball.x < 0;
        if (isLeftsideCollision) {
            this.ball.x = 0;
        } else {
            this.ball.x = MAP.width - this.ball.width;
        }
        this.ball.vx = -BALL_ELASTICITY * this.ball.vx;
    }

    hasBallBorderCollision() {
        return this.ball.x < 0 || this.ball.x + this.ball.width > MAP.width;
    }

    handleBallGroundCollision() {
        if (!this.isColliding(this.ball, this.ground)) return;
        this.ball.y = this.ground.y + this.ground.height;
        const yReboundSpeed = -BALL_ELASTICITY * this.ball.vy;
        const yMinimumReboundSpeed = 0.3;
        this.ball.vy =
            Math.abs(yReboundSpeed) > yMinimumReboundSpeed
                ? yReboundSpeed
                : yMinimumReboundSpeed;
    }

    hasBallGroundCollision() {
        return this.ball.y < this.ground.y + this.ground.height;
    }

    handlePlayerBallCollision() {
        if (!this.isColliding(this.player, this.ball)) return;
        const [px, py] = this.ballPlayerPenetration();
        this.ball.vx += px * ACCELERATION_PER_PENETRATION * DT;
        this.ball.vy += py * ACCELERATION_PER_PENETRATION * DT;
    }

    ballPlayerPenetration() {
        const playerXCenter = this.player.x + this.player.width / 2;
        const playerYCenter = this.player.y + this.player.height / 2;
        const ballXCenter = this.ball.x + this.ball.width / 2;
        const ballYCenter = this.ball.y + this.ball.height / 2;
        const px = ballXCenter - playerXCenter;
        const py = ballYCenter - playerYCenter;
        return [px, py];
    }

    handleBallGoalCollision() {
        if (!this.isColliding(this.ball, this.goal)) return;
        console.log("GOAL");
    }

    isColliding(o1, o2) {
        const xIntercepts = o1.x + o1.width > o2.x && o1.x < o2.x + o2.width;
        const yIntercepts = o1.y + o1.height > o2.y && o1.y < o2.y + o2.height;
        return xIntercepts && yIntercepts;
    }
}
