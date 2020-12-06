export class SelerMan{
    static dir:string = `${__dirname}/../../archives/img/`;
    id ?:number;
    name ?:string;
    description ?:string;
    imgPath ?:string;
    static erroVect:string[]= [
        'Send with Success',
        'name Required',
        'description Required',
        'img Required',
    ]
    valid:(()=>boolean)[]=[
        ()=>!this.isValid(),
        ()=>this.name!='',
        ()=>this.description!='',
        ()=>this.imgPath!=undefined
    ]
    static clone(man:any){
        let seler = new SelerMan();
        // seler = seler;
        return  seler;
    }
    constructor(name ?:string,
        description ?:string,
        imgPath ?:string,){
            this.name = name;
            this.description = description;
            this.imgPath = imgPath;

    }
    isValid(){
        return this.valid.reduce((s,t,i)=>{
            if(i==0) return true;
            return t()&&s
        },true);
    }
    validVect(){
        return this.valid.map((s,i)=>s()?'':SelerMan.erroVect[i]);
    }
    get dir(){return SelerMan.dir+this.imgPath+'.png'}
}