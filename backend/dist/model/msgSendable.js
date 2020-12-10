"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgSendable = void 0;
var msgSendable = /** @class */ (function () {
    function msgSendable() {
        this.valid = [];
        this.msgVect = [];
    }
    msgSendable.prototype.isValid = function () {
        return this.valid.reduce(function (s, t, i) {
            if (i == 0)
                return true;
            return t() && s;
        }, true);
    };
    msgSendable.prototype.validVect = function () {
        var _this = this;
        return this.valid.map(function (s, i) { return s() ? '' : _this.msgVect[i]; });
    };
    return msgSendable;
}());
exports.msgSendable = msgSendable;
