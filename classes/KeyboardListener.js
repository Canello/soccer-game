export class KeyboardListener {
    constructor() {
        this.keyPressed = "";
    }

    onKeyPress(event) {
        this.keyPressed = event.key;
    }

    listen() {
        document
            .querySelector("body")
            .addEventListener("keydown", this.onKeyPress);
    }

    unlisten() {
        document
            .querySelector("body")
            .removeEventListener("keydown", this.onKeyPress);
    }
}
