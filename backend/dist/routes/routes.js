"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var motorcycleQuery_1 = __importDefault(require("../model/motorcycleQuery"));
var selermanQuery_1 = __importDefault(require("../model/selermanQuery"));
var motorcycleQuery_2 = __importDefault(require("../model/motorcycleQuery"));
var selerman_1 = require("../model/selerman");
var multer_1 = __importDefault(require("multer"));
var fileFilter_1 = require("../helper/fileFilter");
var motorcycle_1 = require("../model/motorcycle");
var uploadSeler = multer_1.default({ dest: 'archives/img/selerman',
    fileFilter: fileFilter_1.selerFilter
});
var uploadMoto = multer_1.default({
    dest: 'archives/img/motorcycle',
    fileFilter: fileFilter_1.motoFilter
});
var routes = express_1.Router();
routes.get('/motorcycle', function (req, res) { return motorcycleQuery_1.default.selectAll(res); });
routes.get('/motorcycle/:id', function (req, res) { return motorcycleQuery_1.default.select(parseInt(req.params.id), res); });
routes.get('/motorcycleImg/:id', function (req, res) { return motorcycleQuery_1.default.selectImg(parseInt(req.params.id), res); });
routes.get('/selerman', function (req, res) { return selermanQuery_1.default.selectAll(res); });
routes.get('/selerman/:id', function (req, res) { return selermanQuery_1.default.select(parseInt(req.params.id), res); });
routes.get('/selermanImg/:id', function (req, res) { return selermanQuery_1.default.selectImg(parseInt(req.params.id), res); });
routes.get('/selermanName', function (req, res) { return res.status(200).send([]); });
routes.get('/selermanName/:name', function (req, res) { return selermanQuery_1.default.selectName(req.params.name, res); });
routes.post('/selerman', uploadSeler.single('imgSeler'), function (req, res) {
    selermanQuery_1.default.include(new selerman_1.SelerMan(req.body.name, req.body.description, req.file != undefined ? req.file.filename : undefined), res);
});
routes.put('/selerman/:id', uploadSeler.single('imgSeler'), function (req, res) {
    selermanQuery_1.default.update(new selerman_1.SelerMan(req.body.name, req.body.description, req.file != undefined ? req.file.filename : req.body.imgPath, parseInt(req.params.id)), res, req.file != undefined ? req.body.imgPath : '');
});
routes.post('/motorcycle', uploadMoto.single('imgMoto'), function (req, res) {
    motorcycleQuery_2.default.include(motorcycle_1.Motorcycle.constructor002(req), res);
});
exports.default = routes;
