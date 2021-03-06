"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = require("./InputManager");
class IMselerman extends InputManager_1.InputManager {
    constructor() {
        super(...arguments);
        this.getNeddedValu = [
            (n) => n.value,
            (n) => n.value,
            (n) => n.files != null ? n.files[0] : null
        ];
    }
    needValue(i, inp) {
        throw new Error("Method not implemented.");
    }
    getValues() {
        return Array.from(this.inputs)
            .map((s, i) => {
            return this.getNeddedValu[i](s);
        });
    }
}
exports.IMselerman = IMselerman;
//# sourceMappingURL=IMselerman.js.map