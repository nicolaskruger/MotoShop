import { ViewPage } from "../view/ViewPage";
import { Controller } from "./Controller";
import pages from '../model/Pages';
import { ViewSelerman } from "../view/ViewSelerMan";
import { SelerMan } from "../model/selerman";
import { HttpSselerman } from "../service/HttpSselerman";

export class MotorShopController extends Controller{
    viewPage:ViewPage = new ViewPage(this.$('.principal'));
    viewSeler:ViewSelerman
    constructor(){
        super();
        this.viewPage.includeHtml(pages.selerManInclude);
        // this.selectMan(1);
    }
    selectMan(id:number){
        this.viewPage.includeHtml(pages.selerManView)
                    .then(()=>{
                        
                        new HttpSselerman().getSelerByID(id)
                            .then(s=>{
                                new ViewSelerman(this.$('.seler')).set(s)
                            })
                    })
    }
}