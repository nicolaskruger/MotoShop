"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewMotoMain extends View_1.View {
    template(models) {
        return models.map(s => `<div class="MainMoto__square">
        <div class="MainMoto__square__box">
            <img class="MainMoto__img" src="/motorcycleImg/${s.id}" alt="moto">
        </div>
        <h1 class="MainMoto__name">
            ${s.name}
        </h1>
        <h2 class="MainMoto__preco">
            R$ ${s.price}
        </h2>
    </div>`).join('');
    }
}
exports.ViewMotoMain = ViewMotoMain;
//# sourceMappingURL=ViewMotoMain.js.map