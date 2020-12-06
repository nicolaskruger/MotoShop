import { InputManager } from "./InputManager";

export class IMselerman extends InputManager{
    getValues() {
        return Array.from(this.inputs)
                    .map((s,i)=>{
                        if(s.files!=null)
                        console.log(s.files[0]);
                        return this.getNeddedValu[i](s);
                    });
    }
    private getNeddedValu:((n:HTMLInputElement)=>File|string)[]=[
        (n)=>n.value,
        (n)=>n.value,
        (n)=>n.files[0]
    ]
    
    
}