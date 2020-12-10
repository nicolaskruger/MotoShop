import { Motocycle } from "../model/Motocycle";
import { View } from "./View";

export class ViewMotoMain extends View{
    protected template(models: Motocycle[]) {
        return models.map(s=>`<div class="MainMoto__square">
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