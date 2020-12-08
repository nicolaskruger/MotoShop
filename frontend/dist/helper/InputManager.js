"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputManager {
    constructor(name) {
        this.inputs = document.querySelectorAll(name);
    }
    getValues() {
        return Array.from(this.inputs)
            .map((s, i) => {
            return this.needValue(i, s);
        });
    }
}
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map