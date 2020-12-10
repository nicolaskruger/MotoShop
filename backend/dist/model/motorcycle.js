"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
var msgSendable_1 = require("./msgSendable");
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(id, name, description, idSeler, imgPath, price) {
        var _this = _super.call(this) || this;
        _this.msgVect = [
            'Send with Success',
            'name Required',
            'description Required',
            'img required',
            'incorrect price',
            'incorrect idSeler',
        ];
        _this.valid = [
            function () { return !_this.isValid(); },
            function () { return _this.name != ''; },
            function () { return _this.description != ''; },
            function () { return _this.imgPath != undefined; },
            function () { return _this.price > 0; },
            function () { return _this.idSeler != undefined; },
        ];
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.idSeler = idSeler;
        _this.imgPath = imgPath;
        _this.price = price;
        return _this;
    }
    Motorcycle.constructor001 = function (req) {
        return new Motorcycle(0, req.body.name, req.body.bodydescription, parseInt(req.body.idSeler), '', parseFloat(req.body.price));
    };
    Motorcycle.constructor002 = function (req) {
        return new Motorcycle(0, req.body.name, req.body.bodydescription, parseInt(req.body.idSeler), req.file == undefined ? undefined : req.file.filename, parseFloat(req.body.price));
    };
    return Motorcycle;
}(msgSendable_1.msgSendable));
exports.Motorcycle = Motorcycle;
