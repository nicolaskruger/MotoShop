import { ListSelerman } from "../model/ListSelerman";
import { View } from "./View";

export class ViewFilterSeler extends View{
    protected template(models: ListSelerman) {
        return models.list.map(s=>`
            <div class="SelerFound__div SFD">
            <div class="image-cropper">
                <img class="SelerFound__img" src="/selermanImg/${s.id}" alt="">
            </div>
            <p class="SelerFound__p">${s.name}</p>
        </div>
        `).join(''); 
        
    }

}