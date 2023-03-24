import { COLORS } from "../utils/colors.js";
import { GameObject } from "./GameObject.js";

export class Goal extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.goal = COLORS.goal;
    }
}
