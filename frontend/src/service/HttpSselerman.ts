import { HttpService } from "./HttpServices";

export class HttpSselerman extends HttpService{
    get selerRoute(){
        return this.route()+'selerman/'
    }
    getSelerByID(id:number){
        return this.get(`${this.selerRoute}${id}`)
    }
}