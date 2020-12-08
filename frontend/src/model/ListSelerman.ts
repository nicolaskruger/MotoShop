import { SelerMan } from "./selerman";

export class ListSelerman{
    list:SelerMan[];
    constructor(list:SelerMan[]){
        this.list = ListSelerman.toListSelerman(list);
    }
    private static toListSelerman(list:SelerMan[]){
        let l:SelerMan[] =[];
        list.forEach(s=>{
            l.push(SelerMan.constructor_002(s as SelerMan));
        })
        return l;
    }
}