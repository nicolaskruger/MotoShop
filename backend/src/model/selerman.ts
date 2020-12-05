export class SelerMan{
    static dir:string = `${__dirname}/../../archives/img/`;
    id ?:number;
    name ?:string;
    description ?:string;
    imgPath ?:string;
    static clone(man:any){
        let seler = new SelerMan();
        // seler = seler;
        return  seler;
    }
    get dir(){return SelerMan.dir+this.imgPath+'.png'}
}