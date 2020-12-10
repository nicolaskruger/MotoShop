"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpMotocycle extends HttpServices_1.HttpService {
    get motoRoute() {
        return this.route() + 'motorcycle/';
    }
    get nameRoute() {
        return this.route() + 'motorcycleName/';
    }
    get priceRoute() {
        return this.route() + 'motorcyclePrice/';
    }
    get SelerRoute() {
        return this.route() + 'motorcycleSeler/';
    }
    getMotoBySeler(id) {
        return this.get(`${this.SelerRoute}${id}`);
    }
    getMotocycleById(id) {
        return this.get(`${this.motoRoute}${id}`);
    }
    getAllMotocycle() {
        return this.get(this.motoRoute);
    }
    getByName(name) {
        return this.get(`${this.nameRoute}${name}`);
    }
    getByPrice(price) {
        return this.get(`${this.priceRoute}${price}`);
    }
    postMoto(moto) {
        return this.postFD(this.motoRoute, moto.toFormData());
    }
    putMoto(moto, id) {
        return this.putFD(`${this.motoRoute}${id}`, moto.toFormData());
    }
}
exports.HttpMotocycle = HttpMotocycle;
//# sourceMappingURL=HttpMotocycle.js.map