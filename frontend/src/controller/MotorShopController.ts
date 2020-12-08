import { ViewPage } from "../view/ViewPage";
import { Controller } from "./Controller";
import pages from '../model/Pages';
import { ViewSelerman } from "../view/ViewSelerMan";
import { SelerMan } from "../model/selerman";
import { HttpSselerman } from "../service/HttpSselerman";
import { IMselerman } from '../helper/IMselerman';
import { MsgList } from "../helper/MsgList";
import { ViewUpSelerman } from "../view/ViewUpSelerman";
import { MotorAuxController } from "./MotorAuxController";
import { ViewMotocycle } from "../view/ViewMotocycle";
import { HttpMotocycle } from "../service/HttpMotocycle";
import { View } from "../view/View";
import { Motocycle } from "../model/Motocycle";
import { ViewSelerMoto } from "../view/ViewSelerMoto";
import { ListSelerman } from "../model/ListSelerman";
import { ViewList } from "../view/ViewList";
import { ViewFilterSeler } from "../view/ViewFilterSeler";
import { IMmotorcycle } from "../helper/IMmotorcycle";

export class MotorShopController extends MotorAuxController{
    viewPage:ViewPage = new ViewPage(this.$('.principal'));
    viewSeler:ViewSelerman;
    imSelerman:IMselerman;
    filterElement:HTMLInputElement;
    IMmotor:IMmotorcycle;
    constructor(){
        super();
        this.includeMoto(1);
        // this.selectMan(1);
    }
    selectMotor(id:number){
        this.viewPage.includeHtml(pages.motorcycleView)
                    .then(()=>{
                        new HttpMotocycle()
                            .getMotocycleById(id)
                            .then(s=>{
                                new ViewMotocycle(this.$(".Moto"))
                                    .set(s);
                                document.querySelector(".MotoSeler")
                                        .addEventListener("click",this.selectMan.bind(this,s.idSeler))
                                document.querySelector(".imgAdd")
                                        .addEventListener('click',this.includeMoto.bind(this,s.id));
                                return new HttpSselerman()
                                        .getSelerByID((s as Motocycle).idSeler);
                            })
                            .then(seler=>{
                                new ViewSelerMoto(this.$(".MotoSeler"))
                                    .set(seler);
                            })
                    });
    }
    includeMoto(idBack ?:number){
        this.viewPage.includeHtml(pages.motorcycleInclude)
            .then(()=>{
                this.IMmotor = new IMmotorcycle('.inpM');
                this.filterElement = document.querySelector('.inpId');
                document.querySelector('.ISM')
                    .addEventListener("submit",this.includePushMoto.bind(this));
                document.querySelector(".imgBack")
                    .addEventListener('click',this.selectMotor.bind(this,idBack));
                let filter:HTMLInputElement = document.querySelector(".Filter") 
                filter
                    .addEventListener('input',this.filterSelerMoto.bind(this,filter));
            });
    }
    includePushMoto(event:Event){
        event.preventDefault();
        console.log(this.IMmotor.getValues());
    }
    filterSelerMoto(filter:HTMLInputElement){
        let name = filter.value;
        
        new HttpSselerman()
            .getSelerByName(name)
            .then(s=>{
                let seler = new ListSelerman(s as SelerMan[]);
                new ViewFilterSeler(this.$('.SF'))
                    .set(seler);
                document.querySelectorAll(".SFD")
                    .forEach((s,i)=>{
                        s.addEventListener('click',this.selectSeler.bind(this,seler.list[i].id));
                    })
            })
    }
    selectSeler(id:number){
        this.filterElement
            .value = id.toString(); 
    }

    includeMan(idBack ?:number){
        this.viewPage.includeHtml(pages.selerManInclude)
                    .then(()=>{
                        document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,idBack));
                        document.querySelector('.ISF').addEventListener("submit",this.includePushMan.bind(this))
                    })            
    }
    includePushMan(event:Event){
        this.operPushMan(event,()=>new HttpSselerman().
                                postSeler(SelerMan.constructor_001(
                                            new IMselerman('.inpS').getValues())
                        ))
        
    }
    updatePushMan(id:number,event:Event){
        this.operPushMan(event,()=>new HttpSselerman().
                                    putSeler(SelerMan.constructor_001(
                                        new IMselerman('.inpS').getValues(),
                                        id
                                    ))
        )
    }
    updateMan(seler:SelerMan){
        this.viewPage.includeHtml(pages.selerManInclude)
            .then(()=>{
                new ViewUpSelerman(this.$('.ISF'))
                        .set(seler)
                document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,seler.id));
                document.querySelector('.ISF').addEventListener("submit",this.updatePushMan.bind(this,seler.id))
            })
    }
    selectMan(id:number){
        this.viewPage.includeHtml(pages.selerManView)
                    .then(()=>{
                        document.querySelector('.imgAdd').addEventListener('click',this.includeMan.bind(this,id));
                        return new HttpSselerman().getSelerByID(id)
                    })
                    .then(s=>{
                        new ViewSelerman(this.$('.seler')).set(s)
                        document.querySelector('.imgUpdate').addEventListener('click',this.updateMan.bind(this,s));
                    })
    }
}