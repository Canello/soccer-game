import { GameObject } from "./GameObject.js";
import { COLORS } from "../utils/colors.js";

export class Player extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.color = COLORS.player;
    }
}
