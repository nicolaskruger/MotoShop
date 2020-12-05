import { SelerMan } from "../model/selerman";
import { View } from "./View";

export class ViewSelerman extends View{
    protected template(models: SelerMan) {
        return `
        <img class="Selerman__img" src="/selermanImg/${models.id}" alt="name">
        <div class="Selerman__div">
            <h1 class="Selerman__h1">${models.name}</h1>
            <h2 class="Selerman__h2">${models.description}</h2>
        </div>
    `
    }

}