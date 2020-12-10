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
const MsgList_1 = require("../helper/MsgList");
const ViewUpSelerman_1 = require("../view/ViewUpSelerman");
const MotorAuxController_1 = require("./MotorAuxController");
const ViewMotocycle_1 = require("../view/ViewMotocycle");
const HttpMotocycle_1 = require("../service/HttpMotocycle");
const Motocycle_1 = require("../model/Motocycle");
const ViewSelerMoto_1 = require("../view/ViewSelerMoto");
const ListSelerman_1 = require("../model/ListSelerman");
const ViewFilterSeler_1 = require("../view/ViewFilterSeler");
const IMmotorcycle_1 = require("../helper/IMmotorcycle");
const viewUpMoto_1 = require("../view/viewUpMoto");
const ViewMotoMain_1 = require("../view/ViewMotoMain");
class MotorShopController extends MotorAuxController_1.MotorAuxController {
    constructor() {
        super();
        this.viewPage = new ViewPage_1.ViewPage(this.$('.principal'));
        this.currPos = 0;
        this.operFilter = [
            () => { this.filterByName(); },
            () => { this.filterByPrice(); },
        ];
        this.mainScree();
        // this.includeMoto(1);
        // this.selectMan(1);
    }
    // select moto by id
    selectMotor(id) {
        this.viewPage.includeHtml(Pages_1.default.motorcycleView)
            .then(() => {
            new HttpMotocycle_1.HttpMotocycle()
                .getMotocycleById(id)
                .then((s) => {
                new ViewMotocycle_1.ViewMotocycle(this.$(".Moto"))
                    .set(s);
                document.querySelector(".imgDelete")
                    .addEventListener("click", () => {
                    new HttpMotocycle_1.HttpMotocycle().delete(s.id)
                        .then(() => {
                        this.mainScree();
                    });
                });
                document.querySelector(".MotoSeler")
                    .addEventListener("click", this.selectMan.bind(this, s.idSeler));
                document.querySelector(".imgBack")
                    .addEventListener("click", this.mainScree.bind(this));
                document.querySelector(".imgAdd")
                    .addEventListener('click', this.includeMoto.bind(this, s.id));
                document.querySelector(".imgUpdate")
                    .addEventListener('click', this.updateMoto.bind(this, s.id));
                return new HttpSselerman_1.HttpSselerman()
                    .getSelerByID(s.idSeler);
            })
                .then(seler => {
                new ViewSelerMoto_1.ViewSelerMoto(this.$(".MotoSeler"))
                    .set(seler);
            });
        });
    }
    /* include moto */
    //template include moto
    inclMoto(idBack, cb) {
        this.viewPage.includeHtml(Pages_1.default.motorcycleInclude)
            .then(() => {
            this.IMmotor = new IMmotorcycle_1.IMmotorcycle('.inpM');
            this.filterElement = document.querySelector('.inpId');
            document.querySelector(".imgBack")
                .addEventListener('click', this.selectMotor.bind(this, idBack));
            let filter = document.querySelector(".Filter");
            filter.addEventListener('input', this.filterSelerMoto.bind(this, filter));
            cb();
        });
    }
    //include new moto
    includeMoto(idBack) {
        this.inclMoto(idBack, () => {
            document.querySelector('.ISM')
                .addEventListener("submit", this.includePushMoto.bind(this));
        });
    }
    //update new moto
    updateMoto(idBack) {
        this.inclMoto(idBack, () => {
            new HttpMotocycle_1.HttpMotocycle()
                .getMotocycleById(idBack)
                .then((s) => {
                new viewUpMoto_1.ViewUpMoto(this.$(".ISM"))
                    .set(s);
                this.IMmotor = new IMmotorcycle_1.IMmotorcycle('.inpM');
                this.filterElement = document.querySelector('.inpId');
                let filter = document.querySelector(".Filter");
                filter.addEventListener('input', this.filterSelerMoto.bind(this, filter));
                document.querySelector(".imgBack")
                    .addEventListener('click', this.selectMotor.bind(this, idBack));
                document.querySelector('.ISM')
                    .addEventListener("submit", this.updatePushMoto.bind(this, idBack));
            });
        });
    }
    /*push submit */
    //push motto
    includePushMoto(event) {
        event.preventDefault();
        new HttpMotocycle_1.HttpMotocycle()
            .postMoto(Motocycle_1.Motocycle.constructor_001(this.IMmotor.getValues()))
            .then(s => s.json())
            .then(s => {
            new MsgList_1.MsgList('.MsgMoto')
                .setMsg(...s[0]);
            document.querySelector('.imgBack').addEventListener('click', this.selectMotor.bind(this, parseInt(s[1])));
        })
            .catch(s => { throw s.json(); })
            .catch(s => {
            new MsgList_1.MsgList('.MsgMoto')
                .setMsg(...s);
        });
    }
    // push update motto
    updatePushMoto(id, event) {
        this.operPush(event, () => new HttpMotocycle_1.HttpMotocycle()
            .putMoto(Motocycle_1.Motocycle.constructor_001(this.IMmotor.getValues()), id), (str) => { this.selectMotor(parseInt(str)); });
    }
    //filte moto
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
    //
    /* seler */
    //select 
    selectSeler(id) {
        this.filterElement
            .value = id.toString();
    }
    /* include man */
    //include man
    includeMan(idBack) {
        this.viewPage.includeHtml(Pages_1.default.selerManInclude)
            .then(() => {
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, idBack));
            document.querySelector('.ISF').addEventListener("submit", this.includePushMan.bind(this));
        });
    }
    //push main
    includePushMan(event) {
        this.operPushMan(event, () => new HttpSselerman_1.HttpSselerman().
            postSeler(selerman_1.SelerMan.constructor_001(new IMselerman_1.IMselerman('.inpS').getValues())));
    }
    //update push
    updatePushMan(id, event) {
        this.operPushMan(event, () => new HttpSselerman_1.HttpSselerman().
            putSeler(selerman_1.SelerMan.constructor_001(new IMselerman_1.IMselerman('.inpS').getValues(), id)));
    }
    //update man
    updateMan(seler) {
        this.viewPage.includeHtml(Pages_1.default.selerManInclude)
            .then(() => {
            new ViewUpSelerman_1.ViewUpSelerman(this.$('.ISF'))
                .set(seler);
            document.querySelector('.imgBack').addEventListener('click', this.selectMan.bind(this, seler.id));
            document.querySelector('.ISF').addEventListener("submit", this.updatePushMan.bind(this, seler.id));
        });
    }
    //select man
    selectMan(id) {
        this.viewPage.includeHtml(Pages_1.default.selerManView)
            .then(() => {
            document.querySelector('.imgAdd').addEventListener('click', this.includeMan.bind(this, id));
            document.querySelector(".imgBack")
                .addEventListener("click", this.mainScree.bind(this));
            return new HttpSselerman_1.HttpSselerman().getSelerByID(id);
        })
            .then((s) => {
            new ViewSelerMan_1.ViewSelerman(this.$('.seler')).set(s);
            document.querySelector(".imgDelete")
                .addEventListener("click", () => {
                new HttpSselerman_1.HttpSselerman().delete(s.id)
                    .then(() => {
                    this.mainScree();
                });
            });
            document.querySelector('.imgUpdate').addEventListener('click', this.updateMan.bind(this, s));
            this.OperMain(() => new HttpMotocycle_1.HttpMotocycle().getMotoBySeler(s.id));
        });
    }
    mainScree() {
        this.mainOper(() => new HttpMotocycle_1.HttpMotocycle().getAllMotocycle())
            .then(() => {
            this.filterMain = this.$(".Opt_inp");
            document.querySelector(".btnPrice")
                .addEventListener("click", () => { this.currPos = 1; this.operFilter[this.currPos](); });
            document.querySelector(".btnName")
                .addEventListener("click", () => { this.currPos = 0; this.operFilter[this.currPos](); });
            this.filterMain
                .addEventListener("input", () => this.operFilter[this.currPos]());
        });
    }
    filterByName() {
        this.OperMain(() => new HttpMotocycle_1.HttpMotocycle().getByName(this.filterMain.value));
    }
    filterByPrice() {
        let num = parseFloat(this.filterMain.value);
        num = isNaN(num) ? 0 : num;
        this.OperMain(() => new HttpMotocycle_1.HttpMotocycle().getByPrice(num));
    }
    mainOper(func) {
        return this.viewPage.includeHtml(Pages_1.default.main)
            .then(() => func())
            .then((s) => {
            new ViewMotoMain_1.ViewMotoMain(this.$(".MainMoto")).set(s);
            let div = document.querySelectorAll(".MainMoto__square");
            s.forEach((ss, i) => {
                div[i].addEventListener("click", this.selectMotor.bind(this, ss.id));
            });
        });
    }
    OperMain(func) {
        func()
            .then((s) => {
            new ViewMotoMain_1.ViewMotoMain(this.$(".MainMoto")).set(s);
            let div = document.querySelectorAll(".MainMoto__square");
            s.forEach((ss, i) => {
                div[i].addEventListener("click", this.selectMotor.bind(this, ss.id));
            });
        });
    }
}
exports.MotorShopController = MotorShopController;
//# sourceMappingURL=MotorShopController.js.map