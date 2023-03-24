import { GameObject } from "./GameObject.js";
import { screenWidth, screenHeight } from "../utils/context.js";
import { COLORS } from "../utils/colors.js";

export class Ball extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = 10;
        this.height = 10;
        this.x = screenWidth - this.width / 2;
        this.y = screenHeight - this.height / 2;
        this.color = COLORS.ball;
    }
}
