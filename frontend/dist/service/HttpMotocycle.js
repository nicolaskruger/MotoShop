"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpMotocycle extends HttpServices_1.HttpService {
    get motoRoute() {
        return this.route() + 'motorcycle/';
    }
    getMotocycleById(id) {
        return this.get(`${this.motoRoute}${id}`);
    }
}
exports.HttpMotocycle = HttpMotocycle;
//# sourceMappingURL=HttpMotocycle.js.map