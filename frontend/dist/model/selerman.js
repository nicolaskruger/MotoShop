"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SelerMan {
    constructor(id, name, description, imgPath, img) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.imgSeler = img;
    }
    static constructor_001(list) {
        return new SelerMan(0, list[0], list[1], "", list[2]);
    }
    toFormData() {
        let fd = new FormData();
        fd.append('name', this.name);
        fd.append('imgSeler', this.imgSeler);
        fd.append('description', this.description);
        return fd;
    }
}
exports.SelerMan = SelerMan;
//# sourceMappingURL=selerman.js.map