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
exports.SelerMan = void 0;
var msgSendable_1 = require("./msgSendable");
var SelerMan = /** @class */ (function (_super) {
    __extends(SelerMan, _super);
    function SelerMan(name, description, imgPath, id) {
        var _this = _super.call(this) || this;
        _this.valid = [
            function () { return !_this.isValid(); },
            function () { return _this.name != ''; },
            function () { return _this.description != ''; },
            function () { return _this.imgPath != undefined; }
        ];
        _this.name = name;
        _this.description = description;
        _this.imgPath = imgPath;
        _this.id = id;
        return _this;
    }
    SelerMan.clone = function (man) {
        var seler = new SelerMan();
        // seler = seler;
        return seler;
    };
    SelerMan.prototype.isValid = function () {
        return this.valid.reduce(function (s, t, i) {
            if (i == 0)
                return true;
            return t() && s;
        }, true);
    };
    SelerMan.prototype.validVect = function () {
        return this.valid.map(function (s, i) { return s() ? '' : SelerMan.erroVect[i]; });
    };
    Object.defineProperty(SelerMan.prototype, "dir", {
        get: function () { return SelerMan.dir + this.imgPath + '.png'; },
        enumerable: false,
        configurable: true
    });
    SelerMan.dir = __dirname + "/../../archives/img/";
    SelerMan.newDir = SelerMan.dir + '/selerman/';
    SelerMan.erroVect = [
        'Send with Success',
        'name Required',
        'description Required',
        'img Required',
    ];
    return SelerMan;
}(msgSendable_1.msgSendable));
exports.SelerMan = SelerMan;
