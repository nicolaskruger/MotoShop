import { Motocycle } from "../model/Motocycle";
import { View } from "./View";

export class ViewMotocycle extends View{
    protected template(models: Motocycle) {
        return `
        <img class="Motorcycle__img" src="/motorcycleImg/${models.id}?dummy=${Math.random()*(999 - 100) + 100}" alt="">
        <h1 class="Motorcycle__h1">${models.name}</h1>
        <h2 class="Motorcycle__h2">${models.description}</h2>
        <h2 class="Motorcycle__h2">R$ ${models.price}</h2>
        <div class="Motorcycle__seler MotoSeler">
            <img class="Motorcycle__seler__img" src="/selermanImg/${models.idSeler}" alt="selerman">
            <h1 class="Motorcycle__seler__h1"> nome</h1>
        </div>
        <section class="Operator Motorcycle__operator">
            <img class="Operator__img imgClick imgBack" src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767531-1502435.png" alt="back">
            <img class="Operator__img imgClick imgDelete" src="https://www.svgrepo.com/show/21045/delete-button.svg" alt="delete">
            <img class="Operator__img imgClick imgAdd" src="https://static.thenounproject.com/png/953211-200.png" alt="add">
            <img class="Operator__img imgClick imgUpdate" src="https://img.icons8.com/ios/452/approve-and-update.png" alt="update">
        </section>
        `
    }

}