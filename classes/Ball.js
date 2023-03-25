import { GameObject } from "./GameObject.js";
import { COLORS, MAP } from "../utils/settings.js";

export class Ball extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = 20;
        this.height = 20;
        this.x = MAP.width / 2 - this.width / 2;
        this.y = MAP.height / 2 - this.height / 2;
        this.color = COLORS.ball;
    }
}
