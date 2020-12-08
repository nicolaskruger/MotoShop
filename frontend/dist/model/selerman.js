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
    static constructor_001(list, id = 0) {
        return new SelerMan(id, list[0], list[1], "", list[2]);
    }
    static constructor_002(other) {
        return new SelerMan(other.id, other.name, other.description, other.imgPath, other.imgSeler);
    }
    toFormData() {
        let fd = new FormData();
        fd.append('name', this.name);
        fd.append('imgPath', this.imgPath);
        fd.append('imgSeler', this.imgSeler);
        fd.append('description', this.description);
        return fd;
    }
}
exports.SelerMan = SelerMan;
//# sourceMappingURL=selerman.js.map