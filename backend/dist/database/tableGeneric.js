"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableGeneric = void 0;
var TableGeneric = /** @class */ (function () {
    function TableGeneric() {
    }
    TableGeneric.prototype.createTabel = function (sql, tablename) {
        var _a;
        if (tablename === void 0) { tablename = ''; }
        (_a = this.connect) === null || _a === void 0 ? void 0 : _a.query(sql, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("create table " + tablename + " with success");
            }
        });
    };
    return TableGeneric;
}());
exports.TableGeneric = TableGeneric;
