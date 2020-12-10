"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewSelerman extends View_1.View {
    template(models) {
        return `
        <img class="Selerman__img" src="/selermanImg/${models.id}?dummy=${Math.random() * (999 - 100) + 100}" alt="name">
        <div class="Selerman__div">
            <h1 class="Selerman__h1">${models.name}</h1>
            <h2 class="Selerman__h2">${models.description}</h2>
        </div>
    `;
    }
}
exports.ViewSelerman = ViewSelerman;
//# sourceMappingURL=ViewSelerMan.js.map