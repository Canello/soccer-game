import { MAP } from "../utils/settings.js";
import { Physics } from "./Physics.js";

export class CollisionHandler {
    constructor(ball, ground, player, goal) {
        this.ball = ball;
        this.ground = ground;
        this.player = player;
        this.goal = goal;
    }

    handle() {
        this.handleBorderCollision(this.player);
        this.handleGroundCollision(this.player);

        this.handleBorderCollision(this.ball);
        this.handleGroundCollision(this.ball);

        this.handlePlayerBallCollision();
        this.handleBallGoalCollision();
    }

    handleBorderCollision(obj) {
        if (!this.isCollidingWithBorder(obj)) return;
        Physics.borderRebound(obj);
    }

    handleGroundCollision(obj) {
        if (!this.isCollidingWithGround(obj)) return;
        Physics.groundRebound(obj, this.ground);
    }

    handlePlayerBallCollision() {
        if (!this.areColliding(this.player, this.ball)) return;
        Physics.reactPenetration(this.ball, this.player);
    }

    handleBallGoalCollision() {
        if (!this.areColliding(this.ball, this.goal)) return;
        console.log("GOAL");
    }

    areColliding(obj1, obj2) {
        const xIntercepts =
            obj1.x + obj1.width > obj2.x && obj1.x < obj2.x + obj2.width;
        const yIntercepts =
            obj1.y + obj1.height > obj2.y && obj1.y < obj2.y + obj2.height;
        return xIntercepts && yIntercepts;
    }

    isCollidingWithGround(obj) {
        return obj.y < this.ground.y + this.ground.height;
    }

    isCollidingWithBorder(obj) {
        return obj.x < 0 || obj.x + obj.width > MAP.width;
    }
}
