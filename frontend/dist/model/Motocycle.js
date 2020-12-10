"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Motocycle {
    constructor(id, name, description, idSeler, price, imgMoto) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.idSeler = idSeler;
        this.price = price;
        this.imgMoto = imgMoto;
    }
    static constructor_001(val) {
        return new Motocycle(0, val[0], val[1], parseInt(val[4]), parseFloat(val[3]), val[2]);
    }
    toFormData() {
        let fd = new FormData();
        fd.append('name', this.name);
        fd.append('description', this.description);
        fd.append('idSeler', this.idSeler.toString());
        fd.append('price', this.price.toString());
        fd.append('imgMoto', this.imgMoto);
        return fd;
    }
}
exports.Motocycle = Motocycle;
//# sourceMappingURL=Motocycle.js.map