import { GameObject } from "./GameObject.js";
import { COLORS } from "../utils/settings.js";

export class Player extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = 20;
        this.height = 60;
        this.color = COLORS.player;
    }
}
