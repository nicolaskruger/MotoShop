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
        this.includeMan(1);
        // this.selectMan(1);
    }
    includeMan(idBack ?:number){
        this.viewPage.includeHtml(pages.selerManInclude)
                    .then(()=>{
                        document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,idBack));
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
            .then(s=>{
                new MsgList('.MsgSeler')
                        .setMsg(...s[0]);
                document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,parseInt(s[1]))); 
            })
            .catch(s=>{throw (s as Response).json()})
            .catch(s=>{
                new MsgList('.MsgSeler')
                        .setMsg(...s);
            });
        
    }
    selectMan(id:number){
        this.viewPage.includeHtml(pages.selerManView)
                    .then(()=>{
                        document.querySelector('.imgAdd').addEventListener('click',this.includeMan.bind(this,id))
                        new HttpSselerman().getSelerByID(id)
                            .then(s=>{
                                new ViewSelerman(this.$('.seler')).set(s)
                            })
                    })
    }
}