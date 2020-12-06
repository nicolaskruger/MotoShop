"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MsgList {
    constructor(name) {
        this.msg = document.querySelectorAll(name);
    }
    setMsg(...msg) {
        Array.from(this.msg).forEach((ms, i) => {
            ms.innerHTML = msg[i];
        });
    }
}
exports.MsgList = MsgList;
//# sourceMappingURL=MsgList.js.map