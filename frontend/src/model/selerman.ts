export class SelerMan{
    id ?:number;
    name ?:string;
    description ?:string;
    imgPath ?:string;
    imgSeler ?:File;
    constructor(id ?:number,
        name ?:string,
        description ?:string,
        imgPath ?:string,
        img ?:File,
        ){
            this.id =id;
            this.name =name;
            this.description =description;
            this.imgPath =imgPath;
            this.imgSeler = img;
    }
    static constructor_001(list:(string|File)[]){
        return new SelerMan(0,
                            list[0] as string,
                            list[1] as string,
                            "",
                            list[2] as File);
    }
    toFormData(){
        let fd = new FormData();
        fd.append('name',this.name);
        fd.append('imgSeler',this.imgSeler);
        fd.append('description',this.description);
        return fd;
    }
}