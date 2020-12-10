"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var selerman_1 = require("./selerman");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var SelerManQuery = /** @class */ (function () {
    function SelerManQuery() {
    }
    SelerManQuery.prototype.selectAll = function (res) {
        var sql = "select * from selerMan";
        connection_1.default.query(sql, function (err, result) {
            if (err)
                res.status(400).json(err);
            else {
                res.status(200).json(result);
            }
        });
    };
    SelerManQuery.prototype.selectImg = function (id, res) {
        var sql = "select imgPath from  selerMan where id = " + id;
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(202).sendFile(path_1.default.resolve(selerman_1.SelerMan.dir + "selerman/" + result[0].imgPath));
        });
    };
    SelerManQuery.prototype.selectReturn = function (id) {
        var sql = "select * from selerMan\n                        where id = " + id;
        var ret;
        connection_1.default.query(sql, function (err, result) {
            if (err)
                ret = err;
            ret = result;
        });
        console.log(ret);
        return ret;
    };
    SelerManQuery.prototype.select = function (id, res) {
        var sql = "select * from selerMan\n                        where id = " + id;
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(200).json(result[0]);
        });
    };
    SelerManQuery.prototype.selectName = function (name, res) {
        var sql = "select * from selerMan where name like '%" + name + "%'; ";
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(200).json(result);
        });
    };
    SelerManQuery.prototype.include = function (seler, res) {
        if (!seler.isValid())
            return res.status(400).json(seler.validVect());
        var sql = "insert into selerMan (name,description,imgPath)\n        values ('" + seler.name + "','" + seler.description + "','" + seler.imgPath + "')";
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(200).json([seler.validVect(), result.insertId]);
        });
    };
    SelerManQuery.prototype.update = function (seler, res, oldImg) {
        console.log(seler);
        if (seler.imgPath == undefined)
            seler.imgPath = '';
        if (!seler.isValid())
            return res.status(400).json(seler.validVect());
        if (oldImg != '') {
            try {
                fs_1.default.unlinkSync(selerman_1.SelerMan.newDir + oldImg);
                console.log("old file remove with success");
            }
            catch (error) {
                console.log(error);
            }
        }
        var sql = "\n        update selerMan\n            set name = '" + seler.name + "',\n                description = '" + seler.description + "'\n                " + (seler.imgPath == '' ? '' : ",imgPath ='" + seler.imgPath + "'") + "\n        where id = " + seler.id + ";\n        ";
        connection_1.default.query(sql, function (err, result) {
            if (err)
                return res.status(400).json(err);
            res.status(200).json([seler.validVect(), result.insertId]);
        });
    };
    return SelerManQuery;
}());
exports.default = new SelerManQuery;
