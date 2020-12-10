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
var tableGeneric_1 = require("./tableGeneric");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.init = function (connect) {
        console.log("call table");
        this.connect = connect;
        this.createSelerMan();
        this.createMotocycle();
    };
    Table.prototype.createSelerMan = function () {
        var sql = "create table if not exists selerMan (\n            id int unsigned auto_increment primary key,\n            name text not null,\n            description text not null\n        )";
        this.createTabel(sql, 'selerMan');
    };
    Table.prototype.createMotocycle = function () {
        var sql = "create table if not exists motorcycle (\n            id int unsigned auto_increment primary key,\n            name text not null,\n            description text not null,\n            idSeler int unsigned not null,\n            foreign key(idSeler) references selerMan(id)\n        );";
        this.createTabel(sql, 'motorcycle');
    };
    return Table;
}(tableGeneric_1.TableGeneric));
exports.default = new Table;
