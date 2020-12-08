"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPage_1 = require("../view/ViewPage");
const Pages_1 = __importDefault(require("../model/Pages"));
const ViewSelerMan_1 = require("../view/ViewSelerMan");
const selerman_1 = require("../model/selerman");
const HttpSselerman_1 = require("../service/HttpSselerman");
const IMselerman_1 = require("../helper/IMselerman");
const ViewUpSelerman_1 = require("../view/ViewUpSelerman");
const MotorAuxController_1 = require("./MotorAuxController");
const ViewMotocycle_1 = require("../view/ViewMotocycle");
const HttpMotocycle_1 = require("../service/HttpMotocycle");
const ViewSelerMoto_1 = require("../view/ViewSelerMoto");
const ListSelerman_1 = require("../model/ListSelerman");
const ViewFilterSeler_1 = require("../view/ViewFilterSeler");
const IMmotorcycle_1 = require("../helper/IMmotorcycle");
class MotorShopController extends MotorAuxController_1.MotorAuxController {
    constructor() {
        super();
        this.viewPage = new ViewPage_1.ViewPage(this.$('.principal'));
        this.includeMoto(1);
        // this.selectMan(1);
    }
    selectMotor(id) {
        this.viewPage.includeHtml(Pages_1.default.motorcycleView)
            .then(() => {
            new HttpMotocycle_1.HttpMotocycle()
                .getMotocycleById(id)
                .then(s => {
                new ViewMotocycle_1.ViewMotocycle(this.$(".Moto"))
                    .set(s);
                document.querySelector(".MotoSeler")
                    .addEventListener("click", this.selectMan.bind(this, s.idSeler));
                document.querySelector(".imgAdd")
                    .addEventListener('click', this.includeMoto.bind(this, s.id));
                return new HttpSselerman_1.HttpSselerman()
                    .getSelerByID(s.idSeler);
            })
                .then(seler => {
                new ViewSelerMoto_1.ViewSelerMoto(this.$(".MotoSeler"))
                    .set(seler);
            });
        });
    }
    includeMoto(idBack) {
        this.viewPage.includeHtml(Pages_1.default.motorcycleInclude)
            .then(() => {
            this.IMmotor = new IMmotorcycle_1.IMmotorcycle('.inpM');
            this.filterElement = document.querySelector('.inpId');
            document.querySelector('.ISM')
                .addEventListener("submit", this.includePushMoto.bind(this));
            document.querySelector(".imgBack")
                .addEventListener('click', this.selectMotor.bind(this, idBack));
            let filter = document.querySelector(".Filter");
            filter
                .addEventListener('input', this.filterSelerMoto.bind(this, filter));
        });
    }
    includePushMoto(event) {
        event.preventDefault();
        console.log(this.IMmotor.getValues());
    }
    filterSelerMoto(filter) {
        let name = filter.value;
        new HttpSselerman_1.HttpSselerman()
            .getSelerByName(name)
            .then(s => {
            let seler = new ListSelerman_1.ListSelerman(s);
            new ViewFilterSeler_1.ViewFilterSeler(this.$('.SF'))
                .set(seler);
            document.querySelectorAll(".SFD")
                .forEach((s, i) => {
                s.addEventListener('click', this.selectSeler.bind(this, seler.list[i].id));
            });
        });
    }
    selectSeler(id) {
        this.filterElement
            .value = id.toString();
    }
    includeMan(idBack) {
        this.viewPage.includeHtml(Pages_1.default.selerManInclude)
            .then(() => {
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, idBack));
            document.querySelector('.ISF').addEventListener("submit", this.includePushMan.bind(this));
        });
    }
    includePushMan(event) {
        this.operPushMan(event, () => new HttpSselerman_1.HttpSselerman().
            postSeler(selerman_1.SelerMan.constructor_001(new IMselerman_1.IMselerman('.inpS').getValues())));
    }
    updatePushMan(id, event) {
        this.operPushMan(event, () => new HttpSselerman_1.HttpSselerman().
            putSeler(selerman_1.SelerMan.constructor_001(new IMselerman_1.IMselerman('.inpS').getValues(), id)));
    }
    updateMan(seler) {
        this.viewPage.includeHtml(Pages_1.default.selerManInclude)
            .then(() => {
            new ViewUpSelerman_1.ViewUpSelerman(this.$('.ISF'))
                .set(seler);
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, seler.id));
            document.querySelector('.ISF').addEventListener("submit", this.updatePushMan.bind(this, seler.id));
        });
    }
    selectMan(id) {
        this.viewPage.includeHtml(Pages_1.default.selerManView)
            .then(() => {
            document.querySelector('.imgAdd').addEventListener('click', this.includeMan.bind(this, id));
            return new HttpSselerman_1.HttpSselerman().getSelerByID(id);
        })
            .then(s => {
            new ViewSelerMan_1.ViewSelerman(this.$('.seler')).set(s);
            document.querySelector('.imgUpdate').addEventListener('click', this.updateMan.bind(this, s));
        });
    }
}
exports.MotorShopController = MotorShopController;
//# sourceMappingURL=MotorShopController.js.map