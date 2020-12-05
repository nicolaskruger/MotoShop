"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPage_1 = require("../view/ViewPage");
const Controller_1 = require("./Controller");
const Pages_1 = __importDefault(require("../model/Pages"));
const ViewSelerMan_1 = require("../view/ViewSelerMan");
const HttpSselerman_1 = require("../service/HttpSselerman");
class MotorShopController extends Controller_1.Controller {
    constructor() {
        super();
        this.viewPage = new ViewPage_1.ViewPage(this.$('.principal'));
        this.viewPage.includeHtml(Pages_1.default.selerManInclude);
        // this.selectMan(1);
    }
    selectMan(id) {
        this.viewPage.includeHtml(Pages_1.default.selerManView)
            .then(() => {
            new HttpSselerman_1.HttpSselerman().getSelerByID(id)
                .then(s => {
                new ViewSelerMan_1.ViewSelerman(this.$('.seler')).set(s);
            });
        });
    }
}
exports.MotorShopController = MotorShopController;
//# sourceMappingURL=MotorShopController.js.map