"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpSselerman extends HttpServices_1.HttpService {
    get selerRoute() {
        return this.route() + 'selerman/';
    }
    getSelerByID(id) {
        return this.get(`${this.selerRoute}${id}`);
    }
}
exports.HttpSselerman = HttpSselerman;
//# sourceMappingURL=HttpSselerman.js.map