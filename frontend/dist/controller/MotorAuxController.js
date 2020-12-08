"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MsgList_1 = require("../helper/MsgList");
const Controller_1 = require("./Controller");
class MotorAuxController extends Controller_1.Controller {
    operPushMan(event, func) {
        event.preventDefault();
        func()
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
    }
}
exports.MotorAuxController = MotorAuxController;
//# sourceMappingURL=MotorAuxController.js.map