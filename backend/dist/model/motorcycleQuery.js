"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var imgDir_1 = __importDefault(require("./imgDir"));
var MotorcycleQuery = /** @class */ (function () {
    function MotorcycleQuery() {
    }
    MotorcycleQuery.prototype.selectAll = function (res) {
        var sql = "select * from motorcycle";
        connection_1.default.query(sql, function (err, result) {
            if (err)
                res.status(400).json(err);
            else
                res.status(201).json(result);
        });
    };
    MotorcycleQuery.prototype.select = function (id, res) {
        var sql = "select * from motorcycle where id = " + id;
        connection_1.default.query(sql, function (err, result) {
            if (err)
                res.status(400).json(err);
            else
                res.status(201).json(result[0]);
        });
    };
    MotorcycleQuery.prototype.selectImg = function (id, res) {
        var sql = "select imgPath from  motorcycle where id = " + id;
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(202).sendFile(imgDir_1.default + "/motorcycle/" + result[0].imgPath);
        });
    };
    MotorcycleQuery.prototype.include = function (moto, res) {
        if (!moto.isValid())
            return res.status(400).send(moto.validVect());
        var sql = "insert into motorcycle (name,description,idSeler,imgPath,price)\n        value ('" + moto.name + "','" + moto.description + "'," + moto.price + ",'" + moto.imgPath + "'," + moto.idSeler + ");";
    };
    return MotorcycleQuery;
}());
exports.default = new MotorcycleQuery;
