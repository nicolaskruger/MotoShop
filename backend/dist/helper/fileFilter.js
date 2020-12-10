"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motoFilter = exports.selerFilter = exports.fileFilter = void 0;
var motorcycle_1 = require("../model/motorcycle");
var selerman_1 = require("../model/selerman");
function fileFilter(req, file, cb) {
    if (!/image\//.test(file.mimetype)) {
        return cb(null, false);
    }
    cb(null, true);
}
exports.fileFilter = fileFilter;
function selerFilter(req, file, cb) {
    if (/image\//.test(file.mimetype) &&
        new selerman_1.SelerMan(req.body.name, req.body.description, '').isValid()) {
        return cb(null, true);
    }
    cb(null, false);
}
exports.selerFilter = selerFilter;
function motoFilter(req, file, cb) {
    if (/image\//.test(file.mimetype) &&
        motorcycle_1.Motorcycle.constructor001(req).isValid) {
        return cb(null, true);
    }
    cb(null, false);
}
exports.motoFilter = motoFilter;
