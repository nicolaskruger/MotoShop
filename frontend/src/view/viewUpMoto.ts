import { Motocycle } from "../model/Motocycle";
import { View } from "./View";

export class ViewUpMoto extends View{
    protected template(models: Motocycle) {
        return `<img class="Include__img imgClick imgBack" src="https://static.thenounproject.com/png/6447-200.png" alt="close">
        <p class="SuccessMsg Msg"></p>
        <label class="Label" for="name">Name</label> 
        <p class="ErroMsg Msg"></p>
        <input class="Input inpM" type="text" name="name" value="${models.name}" required>
        <label class="Label" for="description">Descriptions</label>
        <p class="ErroMsg Msg"></p>
        <textarea class="Input inpM" name="description" id="" cols="30" rows="10" required>${models.description}</textarea>
        <label class="Label"  for="imgSeler">Img</label>
        <p class="ErroMsg Msg"></p>
        <input class="Input inpM" type="file" name="imgSeler" accept="image/*" >
        <label class="Label"  for="imgSeler">Price</label>
        <p class="ErroMsg Msg"></p>
        <input class="Input inpM" type="number" step="any" name="price" required value="${models.price}" >
        <label class="Label" for="">Filter by name them select the seler</label>
        <input class="Input Filter" type="text" name="idSeler" >
        <input class="Input inpM inpId" type="number" name="" id="" disabled="disabled" value="${models.idSeler}">
        <p class="ErroMsg Msg"></p>
        <section class="SelerFound SF">
            
        </section>
        <button class="Push PushS">Send</button>
        `
    }

}