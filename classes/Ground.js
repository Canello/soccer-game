import { COLORS } from "../utils/settings.js";
import { GameObject } from "./GameObject.js";

export class Ground extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.color = COLORS.ground;
    }
}
