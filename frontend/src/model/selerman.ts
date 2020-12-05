export class SelerMan{
    id ?:number;
    name ?:string;
    description ?:string;
    imgPath ?:string;
    constructor(id ?:number,
        name ?:string,
        description ?:string,
        imgPath ?:string){
            this.id =id;
            this.name =name;
            this.description =description;
            this.imgPath =imgPath;
    }
}