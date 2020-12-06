"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPage_1 = require("../view/ViewPage");
const Controller_1 = require("./Controller");
const Pages_1 = __importDefault(require("../model/Pages"));
const ViewSelerMan_1 = require("../view/ViewSelerMan");
const selerman_1 = require("../model/selerman");
const HttpSselerman_1 = require("../service/HttpSselerman");
const IMselerman_1 = require("../helper/IMselerman");
const MsgList_1 = require("../helper/MsgList");
class MotorShopController extends Controller_1.Controller {
    constructor() {
        super();
        this.viewPage = new ViewPage_1.ViewPage(this.$('.principal'));
        this.includeMan(1);
        // this.selectMan(1);
    }
    includeMan(idBack) {
        this.viewPage.includeHtml(Pages_1.default.selerManInclude)
            .then(() => {
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, idBack));
            document.querySelector('.ISF').addEventListener("submit", this.includePushMan.bind(this));
        });
    }
    includePushMan(event) {
        event.preventDefault();
        new HttpSselerman_1.HttpSselerman().
            postSeler(selerman_1.SelerMan.constructor_001(new IMselerman_1.IMselerman('.inpS').getValues()))
            .then(s => s.json())
            .then(s => {
            new MsgList_1.MsgList('.MsgSeler')
                .setMsg(...s[0]);
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, parseInt(s[1])));
        })
            .catch(s => { throw s.json(); })
            .catch(s => {
            new MsgList_1.MsgList('.MsgSeler')
                .setMsg(...s);
        });
    }
    selectMan(id) {
        this.viewPage.includeHtml(Pages_1.default.selerManView)
            .then(() => {
            document.querySelector('.imgAdd').addEventListener('click', this.includeMan.bind(this, id));
            new HttpSselerman_1.HttpSselerman().getSelerByID(id)
                .then(s => {
                new ViewSelerMan_1.ViewSelerman(this.$('.seler')).set(s);
            });
        });
    }
}
exports.MotorShopController = MotorShopController;
//# sourceMappingURL=MotorShopController.js.map