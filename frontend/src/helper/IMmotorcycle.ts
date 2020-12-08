import { InputManager } from "./InputManager";

export class IMmotorcycle extends InputManager{
    needValue(i: number, inp: HTMLInputElement) {
        return inp.value;
    }
    

}