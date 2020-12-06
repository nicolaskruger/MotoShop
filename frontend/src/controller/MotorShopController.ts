import { ViewPage } from "../view/ViewPage";
import { Controller } from "./Controller";
import pages from '../model/Pages';
import { ViewSelerman } from "../view/ViewSelerMan";
import { SelerMan } from "../model/selerman";
import { HttpSselerman } from "../service/HttpSselerman";
import { IMselerman } from '../helper/IMselerman';
import { MsgList } from "../helper/MsgList";

export class MotorShopController extends Controller{
    viewPage:ViewPage = new ViewPage(this.$('.principal'));
    viewSeler:ViewSelerman
    imSelerman:IMselerman;
    constructor(){
        super();
        // this.includeMan();
        this.selectMan(2);
    }
    includeMan(){
        this.viewPage.includeHtml(pages.selerManInclude)
                    .then(()=>{
                        document.querySelector('.ISF').addEventListener("submit",this.includePushMan.bind(this))
                    })            
    }
    includePushMan(event:Event){
        event.preventDefault();
        new HttpSselerman().
                    postSeler(SelerMan.constructor_001(
                                new IMselerman('.inpS').getValues())
            )
            .then(s=>s.json())
            .catch(s=>(s as Response).json())
            .then(s=>{
                new MsgList('.MsgSeler')
                        .setMsg(...s);
            });
        
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