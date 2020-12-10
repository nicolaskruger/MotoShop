"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("../routes/routes"));
var app = express_1.default();
app.set('clientPath', path_1.default.join(__dirname, '/../../../', 'frontend'));
app.use('/', express_1.default.static(app.get('clientPath')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(routes_1.default);
exports.default = app;
