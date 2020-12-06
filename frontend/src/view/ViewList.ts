export abstract class ViewList{
    protected lis:NodeListOf<HTMLElement>;
    constructor(str:string){
        this.lis = document.querySelectorAll(str);
    }
    abstract get list();
    abstract set(model:any);
} 