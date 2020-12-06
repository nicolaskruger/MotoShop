export class MsgList{
    msg:NodeListOf<HTMLParagraphElement>;
    constructor(name:string){
        this.msg = document.querySelectorAll(name);
    }
    setMsg(...msg:string[]){
        Array.from(this.msg).forEach((ms,i)=>{
            ms.innerHTML = msg[i];
        })
    }
}