"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selerman_1 = require("./selerman");
class ListSelerman {
    constructor(list) {
        this.list = ListSelerman.toListSelerman(list);
    }
    static toListSelerman(list) {
        let l = [];
        list.forEach(s => {
            l.push(selerman_1.SelerMan.constructor_002(s));
        });
        return l;
    }
}
exports.ListSelerman = ListSelerman;
//# sourceMappingURL=ListSelerman.js.map