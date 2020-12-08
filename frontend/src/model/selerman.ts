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
    static constructor_001(list:(string|File)[], id: number=0){
        return new SelerMan(id,
                            list[0] as string,
                            list[1] as string,
                            "",
                            list[2] as File);
    }
    static constructor_002(other:SelerMan){
        return new SelerMan(
            other.id,
            other.name,
            other.description,
            other.imgPath,
            other.imgSeler,
        )
    }
    toFormData(){
        let fd = new FormData();
        fd.append('name',this.name);
        fd.append('imgPath',this.imgPath);
        fd.append('imgSeler',this.imgSeler);
        fd.append('description',this.description);
        return fd;
    }
}