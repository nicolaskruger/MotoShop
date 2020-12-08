import { HttpService } from "./HttpServices";

export class HttpMotocycle extends HttpService{
    get motoRoute(){
        return this.route()+ 'motorcycle/'
    }
    getMotocycleById(id:number){
        return this.get(`${this.motoRoute}${id}`)
    }
}