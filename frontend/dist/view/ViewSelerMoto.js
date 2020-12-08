"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewSelerMoto extends View_1.View {
    template(models) {
        return `
            <img class="Motorcycle__seler__img" src="/selermanImg/${models.id}" alt="selerman">
            <h1 class="Motorcycle__seler__h1">${models.name}</h1>
        `;
    }
}
exports.ViewSelerMoto = ViewSelerMoto;
//# sourceMappingURL=ViewSelerMoto.js.map