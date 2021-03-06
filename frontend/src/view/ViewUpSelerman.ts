import { SelerMan } from "../model/selerman";
import { View } from "./View";

export class ViewUpSelerman extends View{
    protected template(models: SelerMan) {
        return `<img class="ISelerman__img imgClick imgBack" src="https://static.thenounproject.com/png/6447-200.png" alt="close">
        <p class="SuccessMsg MsgSeler"></p>
        <label for="name">Name</label> 
        <p class="ErroMsg MsgSeler"></p>
        <input class="InputSelerman inpS" type="text" name="name" value="${models.name}" required>
        <label for="description">Descriptions</label>
        <p class="ErroMsg MsgSeler"></p>
        <textarea class="InputSelerman inpS" name="description" id="" cols="30" rows="10" required>${models.description}</textarea>
        <label  for="imgSeler">Img</label>
        <p class="ErroMsg MsgSeler"></p>
        <input class="InputSelerman inpS" type="file" name="imgSeler"  accept="image/*" >
        <button class="Push PushS">Send</button>`        
    }

}