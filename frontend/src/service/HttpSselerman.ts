import { SelerMan } from "../model/selerman";
import { HttpService } from "./HttpServices";

export class HttpSselerman extends HttpService{
    get selerRoute(){
        return this.route()+'selerman/';
    }
    get selerNameRoute(){
        return this.route()+'selermanName/';
    }
    getSelerByID(id:number){
        return this.get(`${this.selerRoute}${id}`)
    }
    getSelerByName(name:string){
        return this.get(`${this.selerNameRoute}${name}`)
    }
    postSeler(seler:SelerMan){
        return this.postFD(`${this.selerRoute}`,seler.toFormData());
    }
    putSeler(seler:SelerMan){
        return this.putFD(`${this.selerRoute}${seler.id}`,seler.toFormData());
    }
}