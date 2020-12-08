import selermanQuery from "./selermanQuery";
import {Request} from 'express'

export class Motorcycle{
    id?:number;
    name?:string;
    description?:string;
    idSeler?:number;
    imgPath?:string;
    price?:number;
    constructor(
        id?:number,
        name?:string,
        description?:string,
        idSeler?:number,
        imgPath?:string,
        price?:number,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.idSeler = idSeler;
        this.imgPath = imgPath;
        this.price = price;
    }
    static constructor001(req:Request){
        return new Motorcycle(
            0,req.body.name,req.body.bodydescription,
            parseInt(req.body.idSeler),'',
            parseFloat(req.body.price)
        )
    }
    isValid(){
        return this.valid.reduce((s,t,i)=>{
            if(i==0) return true;
            return t()&&s
        },true);
    }
    static msgVect:string[]=[
        'Send with Success',
        'name Required',
        'description Required',
        'incorrect idSeler',
        'img required',
        'incorrect price'
    ]
    valid:(()=>boolean)[]=[
        ()=>!this.isValid(),
        ()=>this.name!='',
        ()=>this.description!='',
        ()=>{
            if(this.idSeler==undefined) return false;
            return selermanQuery.selectReturn(this.idSeler)
                        .length>0;
        },
        ()=>this.imgPath!=undefined,
        ()=>this.price as number>0
    ]

}