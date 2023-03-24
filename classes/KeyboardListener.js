export class KeyboardListener {
    constructor(state) {
        this.state = state;
    }

    onKeyPressed(event) {
        this.state.setKeyPressed(event.key);
    }

    listen() {
        document
            .querySelector("body")
            .addEventListener("keydown", this.onKeyPressed);
    }

    unlisten() {
        document
            .querySelector("body")
            .removeEventListener("keydown", this.onKeyPressed);
    }
}
