import { Motocycle } from "../model/Motocycle";
import { HttpService } from "./HttpServices";

export class HttpMotocycle extends HttpService{
    get motoRoute(){
        return this.route()+ 'motorcycle/'
    }
    get nameRoute(){
        return this.route()+ 'motorcycleName/'
    }
    get priceRoute(){
        return this.route()+ 'motorcyclePrice/'
    }
    get SelerRoute(){
        return this.route()+ 'motorcycleSeler/';
    }
    getMotoBySeler(id:number){
        return this.get(`${this.SelerRoute}${id}`);
    }
    getMotocycleById(id:number){
        return this.get(`${this.motoRoute}${id}`);
    }
    getAllMotocycle(){
        return this.get(this.motoRoute);
    }
    getByName(name:string){
        return this.get(`${this.nameRoute}${name}`);
    }
    getByPrice(price:number){
        return this.get(`${this.priceRoute}${price}`);
    }
    postMoto(moto:Motocycle){
        return this.postFD(this.motoRoute,moto.toFormData())
    }
    putMoto(moto:Motocycle,id:number){
        return this.putFD(`${this.motoRoute}${id}`,moto.toFormData());
    }

}