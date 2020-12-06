export abstract class InputManager{
    inputs:NodeListOf<HTMLInputElement>;
    constructor(name:string){
        this.inputs = document.querySelectorAll(name);
    }
    abstract getValues();
}