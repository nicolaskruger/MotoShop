export abstract class InputManager{
    inputs:NodeListOf<HTMLInputElement>;
    constructor(name:string){
        this.inputs = document.querySelectorAll(name);
    }
    getValues(){
        return Array.from(this.inputs)
                .map((s,i)=>{
                    return this.needValue(i,s);
                });
    }
    abstract needValue(i:number,inp:HTMLInputElement);

}