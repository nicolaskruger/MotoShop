"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewFilterSeler extends View_1.View {
    template(models) {
        return models.list.map(s => `
            <div class="SelerFound__div SFD">
            <div class="image-cropper">
                <img class="SelerFound__img" src="/selermanImg/${s.id}" alt="">
            </div>
            <p class="SelerFound__p">${s.name}</p>
        </div>
        `).join('');
    }
}
exports.ViewFilterSeler = ViewFilterSeler;
//# sourceMappingURL=ViewFilterSeler.js.map