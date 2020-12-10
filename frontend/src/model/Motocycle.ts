export class Motocycle{
    id ?:number;
    name ?:string;
    description ?:string;
    idSeler ?:number;
    price ?:number;
    imgMoto ?:File;
    imgPath ?:string;
    constructor(id ?:number,
        name ?:string,
        description ?:string,
        idSeler ?:number,
        price ?:number,
        imgMoto ?:File){
            this.id = id;
            this.name = name;
            this.description = description;
            this.idSeler = idSeler;
            this.price = price;
            this.imgMoto = imgMoto;
    }
    static constructor_001(
        val:any[]
    ){
        return new Motocycle(
            0,
            val[0],
            val[1],
            parseInt(val[4]), 
            parseFloat(val[3]),
            val[2]
        );
    }
    toFormData(){
        let fd = new FormData();
        fd.append('name',this.name);
        fd.append('description',this.description);
        fd.append('idSeler',this.idSeler.toString());
        fd.append('price',this.price.toString());
        fd.append('imgMoto',this.imgMoto);
        return fd;
    }
}