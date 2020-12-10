"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = require("./InputManager");
class IMmotorcycle extends InputManager_1.InputManager {
    needValue(i, inp) {
        if (i == 2)
            return inp.files[0];
        return inp.value;
    }
}
exports.IMmotorcycle = IMmotorcycle;
//# sourceMappingURL=IMmotorcycle.js.map