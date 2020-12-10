import { InputManager } from "./InputManager";

export class IMmotorcycle extends InputManager{
    needValue(i: number, inp: HTMLInputElement) {
        if(i == 2) return inp.files[0];
        return inp.value;
    }
    
 
}