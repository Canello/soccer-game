export class KeyboardListener {
    constructor() {
        this.keyPressed = "";
    }

    onKeyPress(event) {
        this.keyPressed = event.key;
    }

    onKeyRelease(event) {
        if (event.key === this.keyPressed) {
            this.keyPressed = "";
        }
    }

    listen() {
        document.body.addEventListener("keydown", (event) =>
            this.onKeyPress(event)
        );

        document.body.addEventListener("keyup", (event) =>
            this.onKeyRelease(event)
        );
    }

    unlisten() {
        document.body.removeEventListener("keydown", (event) =>
            this.onKeyPress(event)
        );

        document.body.removeEventListener("keyup", (event) =>
            this.onKeyRelease(event)
        );
    }
}
