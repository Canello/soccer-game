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
        // handle player-ground collision
        // handle ball-ground collision
        // handle player-goal collision

        // handle player-player collision
        // handle player-ball collision

        // handle ball-goal collision

        this.handlePlayerBorderCollision();
        this.handlePlayerGroundCollision();

        this.handleBallBorderCollision();
        this.handleBallGroundCollision();

        this.handlePlayerBallCollision();
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
        if (!this.hasBallGroundCollision()) return;
        this.ball.y = this.ground.y + this.ground.height;
        this.ball.vy = -BALL_ELASTICITY * this.ball.vy;
    }

    hasBallGroundCollision() {
        return this.ball.y < this.ground.y + this.ground.height;
    }

    handlePlayerBallCollision() {
        if (!this.hasPlayerBallCollision()) return;
        const [px, py] = this.ballPlayerPenetration();
        this.ball.vx += px * ACCELERATION_PER_PENETRATION * DT;
        this.ball.vy += py * ACCELERATION_PER_PENETRATION * DT;
    }

    hasPlayerBallCollision() {
        const xIntercepts =
            this.player.x + this.player.width > this.ball.x &&
            this.player.x < this.ball.x + this.ball.width;
        const yIntercepts =
            this.player.y + this.player.height > this.ball.y &&
            this.player.y < this.ball.y + this.ball.height;
        return xIntercepts && yIntercepts;
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
}
