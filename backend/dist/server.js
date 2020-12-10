"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_express_1 = __importDefault(require("./config/custom-express"));
var connection_1 = __importDefault(require("./database/connection"));
var table_1 = __importDefault(require("./database/table"));
connection_1.default.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        table_1.default.init(connection_1.default);
        custom_express_1.default.listen(3000, function () {
            console.log("server start localHost:3000");
        });
    }
});
