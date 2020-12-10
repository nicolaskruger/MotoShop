import selermanQuery from "./selermanQuery";
import {Request} from 'express'
import { msgSendable } from "./msgSendable";

export class Motorcycle extends msgSendable{
    static dir:string = `${__dirname}/../../archives/img/`;
    static newDir:string = Motorcycle.dir+'/motorcycle/'
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
        super();
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
    static constructor002(req:Request){
        return new Motorcycle(
            0,req.body.name,req.body.description,
            parseInt(req.body.idSeler),
            req.file==undefined?undefined:req.file.filename,
            parseFloat(req.body.price)
        )
    }
    msgVect:string[]=[
        'Send with Success',
        'name Required',
        'description Required',
        'img required',
        'incorrect price',
        'incorrect idSeler',
    ]
    valid:(()=>boolean)[]=[
        ()=>!this.isValid(),
        ()=>this.name!='',
        ()=>this.description!='',
        ()=>this.imgPath!=undefined,
        ()=>this.price as number>0,
        ()=>this.idSeler!=undefined,
    ]



}