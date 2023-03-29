import {
    ACCELERATION_PER_PENETRATION,
    DT,
    GRAVITY,
    MAP,
} from "../utils/settings.js";

export class Physics {
    static tick(obj) {
        Physics.tickPosition(obj);
        Physics.tickSpeed(obj);
        Physics.tickAcceleration(obj);
    }

    static tickPosition(obj) {
        obj.x = obj.x + obj.vx * DT;
        obj.y = obj.y + obj.vy * DT;
    }

    static tickSpeed(obj) {
        const dvx = obj.ax * DT;
        const dvy = obj.ay * DT;
        const nextVx = obj.vx + dvx;
        const nextVy = obj.vy + dvy;
        obj.vx = Math.abs(nextVx) <= dvx ? 0 : nextVx;
        obj.vy = Math.abs(nextVy) <= dvy ? 0 : nextVy;
    }

    static tickAcceleration(obj) {
        obj.ax = obj.vx === 0 ? 0 : -(obj.vx / Math.abs(obj.vx)) * obj.friction;
        obj.ay = -GRAVITY;
    }

    reactInput() {}

    static reactPenetration(obj1, obj2) {
        // obj1 is the one who gets pushed.
        // obj2 is used just for calculation.
        const [px, py] = Physics.penetration(obj1, obj2);
        obj1.vx += px * ACCELERATION_PER_PENETRATION * DT;
        obj1.vy += py * ACCELERATION_PER_PENETRATION * DT;
    }

    static penetration(obj1, obj2) {
        const [xCenter1, yCenter1] = obj1.center;
        const [xCenter2, yCenter2] = obj2.center;
        const xPenetration = xCenter1 - xCenter2;
        const yPenetration = yCenter1 - yCenter2;
        return [xPenetration, yPenetration];
    }

    static borderRebound(obj) {
        const isLeftsideCollision = obj.x < 0;
        if (isLeftsideCollision) {
            obj.x = 0;
        } else {
            obj.x = MAP.width - obj.width;
        }
        obj.vx = -obj.elasticity * obj.vx;
    }

    static groundRebound(obj, ground) {
        obj.y = ground.y + ground.height;
        const yReboundSpeed = -obj.elasticity * obj.vy;
        obj.vy =
            Math.abs(yReboundSpeed) > obj.yMinimumReboundSpeed
                ? yReboundSpeed
                : obj.yMinimumReboundSpeed;
    }
}
