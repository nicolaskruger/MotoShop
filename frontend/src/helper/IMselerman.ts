import { InputManager } from "./InputManager";

export class IMselerman extends InputManager{
    needValue(i: number, inp: HTMLInputElement) {
        throw new Error("Method not implemented.");
    }
    getValues() {
        return Array.from(this.inputs)
                    .map((s,i)=>{
                        return this.getNeddedValu[i](s);
                    });
    }
    private getNeddedValu:((n:HTMLInputElement)=>File|string)[]=[
        (n)=>n.value,
        (n)=>n.value,
        (n)=>n.files!=null?n.files[0]:null
    ]
     
    
}