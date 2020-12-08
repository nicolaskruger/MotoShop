import { SelerMan } from "../model/selerman";
import { View } from "./View";

export class ViewSelerMoto extends View{
    protected template(models: SelerMan) {
        return `
            <img class="Motorcycle__seler__img" src="/selermanImg/${models.id}" alt="selerman">
            <h1 class="Motorcycle__seler__h1">${models.name}</h1>
        `
    }
    
}