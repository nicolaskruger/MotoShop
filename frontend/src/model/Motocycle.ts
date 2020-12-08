export class Motocycle{
    id ?:number;
    name ?:string;
    description ?:string;
    idSeler ?:number;
    price ?:number;
    constructor(id ?:number,
        name ?:string,
        description ?:string,
        idSeler ?:number,
        price ?:number){
            this.id = id;
            this.name = name;
            this.description = description;
            this.idSeler = idSeler;
            this.price = price;
    }
}