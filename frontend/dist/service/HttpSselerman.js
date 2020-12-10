"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpSselerman extends HttpServices_1.HttpService {
    get selerRoute() {
        return this.route() + 'selerman/';
    }
    get selerNameRoute() {
        return this.route() + 'selermanName/';
    }
    getSelerByID(id) {
        return this.get(`${this.selerRoute}${id}`);
    }
    getSelerByName(name) {
        return this.get(`${this.selerNameRoute}${name}`);
    }
    postSeler(seler) {
        return this.postFD(`${this.selerRoute}`, seler.toFormData());
    }
    putSeler(seler) {
        return this.putFD(`${this.selerRoute}${seler.id}`, seler.toFormData());
    }
    delete(id) {
        return this.del(`${this.selerRoute}${id}`);
    }
}
exports.HttpSselerman = HttpSselerman;
//# sourceMappingURL=HttpSselerman.js.map