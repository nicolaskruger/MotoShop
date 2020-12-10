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
import { ViewUpMoto } from "../view/viewUpMoto";
import { ViewMotoMain } from "../view/ViewMotoMain";

export class MotorShopController extends MotorAuxController{
    viewPage:ViewPage = new ViewPage(this.$('.principal'));
    viewSeler:ViewSelerman;
    imSelerman:IMselerman;
    filterElement:HTMLInputElement;
    filterMain:HTMLInputElement;
    IMmotor:IMmotorcycle;
    currPos = 0;
    operFilter =[
        ()=>{this.filterByName()},
        ()=>{this.filterByPrice()},
    ]
    constructor(){
        super();
        this.mainScree();
        // this.includeMoto(1);
        // this.selectMan(1);
    }
    // select moto by id
    selectMotor(id:number){
        this.viewPage.includeHtml(pages.motorcycleView)
                    .then(()=>{
                        new HttpMotocycle()
                            .getMotocycleById(id)
                            .then((s:Motocycle)=>{
                                new ViewMotocycle(this.$(".Moto"))
                                    .set(s);
                                document.querySelector(".imgDelete")
                                        .addEventListener("click",()=>{
                                            new HttpMotocycle().delete(s.id)
                                                .then(()=>{
                                                    this.mainScree();
                                                })
                                        })
                                document.querySelector(".MotoSeler")
                                        .addEventListener("click",this.selectMan.bind(this,s.idSeler))
                                document.querySelector(".imgBack")
                                        .addEventListener("click",this.mainScree.bind(this));
                                document.querySelector(".imgAdd")
                                        .addEventListener('click',this.includeMoto.bind(this,s.id));
                                document.querySelector(".imgUpdate")
                                        .addEventListener('click',this.updateMoto.bind(this,s.id));
                                return new HttpSselerman()
                                        .getSelerByID((s as Motocycle).idSeler);
                            })
                            .then(seler=>{
                                new ViewSelerMoto(this.$(".MotoSeler"))
                                    .set(seler);
                            })
                    });
    }

    /* include moto */

    //template include moto
    inclMoto(idBack ?:number,cb?:()=>void){
        this.viewPage.includeHtml(pages.motorcycleInclude)
            .then(()=>{
                this.IMmotor = new IMmotorcycle('.inpM');
                this.filterElement = document.querySelector('.inpId');
                document.querySelector(".imgBack")
                .addEventListener('click',this.selectMotor.bind(this,idBack));
                let filter:HTMLInputElement = document.querySelector(".Filter") 
                filter.addEventListener('input',this.filterSelerMoto.bind(this,filter));
                cb();
            });
    }
    //include new moto
    includeMoto(idBack ?:number){
        this.inclMoto(idBack,()=>{
            document.querySelector('.ISM')
                    .addEventListener("submit",this.includePushMoto.bind(this));
        })
    }
    //update new moto
    updateMoto(idBack ?:number){
        this.inclMoto(idBack,()=>{
            new HttpMotocycle()
                .getMotocycleById(idBack)
                .then((s)=>{
                    new ViewUpMoto(this.$(".ISM"))
                        .set(s);
                        this.IMmotor = new IMmotorcycle('.inpM');
                       this.filterElement = document.querySelector('.inpId');
                       let filter:HTMLInputElement = document.querySelector(".Filter") 
                       filter.addEventListener('input',this.filterSelerMoto.bind(this,filter));
                       
                       document.querySelector(".imgBack")
                       .addEventListener('click',this.selectMotor.bind(this,idBack));
                       document.querySelector('.ISM')
                      .addEventListener("submit",this.updatePushMoto.bind(this,idBack));
                     })
                })
    }

    /*push submit */

    //push motto
    includePushMoto(event:Event){
        event.preventDefault(); 
        new HttpMotocycle()
            .postMoto(Motocycle.constructor_001(this.IMmotor.getValues()))
            .then(s=>s.json())
            .then(s=>{

                new MsgList('.MsgMoto')
                        .setMsg(...s[0]);
                document.querySelector('.imgBack').addEventListener('click',this.selectMotor.bind(this,parseInt(s[1]))); 
            })
            .catch(s=>{throw (s as Response).json()})
            .catch(s=>{
                new MsgList('.MsgMoto')
                        .setMsg(...s);
            });
    }
    // push update motto
    updatePushMoto(id:number,event:Event){
        this.operPush(event,()=>new HttpMotocycle()
                                .putMoto(Motocycle.constructor_001(this.IMmotor.getValues()),id),
                                (str)=>{this.selectMotor(parseInt(str))});
    }

    //filte moto
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

    //

    /* seler */

    //select 
    selectSeler(id:number){
        this.filterElement
            .value = id.toString(); 
    }

    /* include man */

    //include man
    includeMan(idBack ?:number){
        this.viewPage.includeHtml(pages.selerManInclude)
                    .then(()=>{
                        document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,idBack));
                        document.querySelector('.ISF').addEventListener("submit",this.includePushMan.bind(this))
                    })            
    }

    //push main
    includePushMan(event:Event){
        this.operPushMan(event,()=>new HttpSselerman().
                                postSeler(SelerMan.constructor_001(
                                            new IMselerman('.inpS').getValues())
                        ))
        
    }
    //update push
    updatePushMan(id:number,event:Event){
        this.operPushMan(event,()=>new HttpSselerman().
                                    putSeler(SelerMan.constructor_001(
                                        new IMselerman('.inpS').getValues(),
                                        id
                                    ))
        )
    }
    //update man
    updateMan(seler:SelerMan){
        this.viewPage.includeHtml(pages.selerManInclude)
            .then(()=>{
                new ViewUpSelerman(this.$('.ISF'))
                        .set(seler)
                document.querySelector('.imgBack').addEventListener('click',this.selectMan.bind(this,seler.id));
                document.querySelector('.ISF').addEventListener("submit",this.updatePushMan.bind(this,seler.id))
            })
    }
    //select man
    selectMan(id:number){
        this.viewPage.includeHtml(pages.selerManView)
                    .then(()=>{
                        document.querySelector('.imgAdd').addEventListener('click',this.includeMan.bind(this,id));
                        document.querySelector(".imgBack")
                                        .addEventListener("click",this.mainScree.bind(this));
                        return new HttpSselerman().getSelerByID(id)
                    })
                    .then((s:SelerMan)=>{
                        new ViewSelerman(this.$('.seler')).set(s)
                        document.querySelector(".imgDelete")
                                        .addEventListener("click",()=>{
                                            new HttpSselerman().delete(s.id)
                                                .then(()=>{
                                                    this.mainScree();
                                                })
                                        })
                        document.querySelector('.imgUpdate').addEventListener('click',this.updateMan.bind(this,s));
                        this.OperMain(()=>new HttpMotocycle().getMotoBySeler(s.id));
                    })
    }

    mainScree(){
        this.mainOper(()=>new HttpMotocycle().getAllMotocycle())
            .then(()=>{
                this.filterMain = this.$(".Opt_inp");
                document.querySelector(".btnPrice")
                        .addEventListener("click",()=>{this.currPos =1;this.operFilter[this.currPos]()});
                document.querySelector(".btnName")
                        .addEventListener("click",()=>{this.currPos=0;this.operFilter[this.currPos]()});
                this.filterMain
                        .addEventListener("input",()=>this.operFilter[this.currPos]());
            });
        
    }
    filterByName(){
        this.OperMain(()=>new HttpMotocycle().getByName(this.filterMain.value));
    }
    filterByPrice(){
        let num = parseFloat(this.filterMain.value);
        num = isNaN(num)?0:num;
        this.OperMain(()=>new HttpMotocycle().getByPrice(num));
    }
    mainOper(func:()=>Promise<any>){
        return this.viewPage.includeHtml(pages.main)
            .then(()=>func())
            .then((s:Motocycle[])=>{
                new ViewMotoMain(this.$(".MainMoto")).set(s);
                let div = document.querySelectorAll(".MainMoto__square");
                s.forEach((ss,i)=>{
                    div[i].addEventListener("click",this.selectMotor.bind(this,ss.id));
                })
            })
        
    }
    OperMain(func:()=>Promise<any>){
            func()
            .then((s:Motocycle[])=>{
                new ViewMotoMain(this.$(".MainMoto")).set(s);
                let div = document.querySelectorAll(".MainMoto__square");
                s.forEach((ss,i)=>{
                    div[i].addEventListener("click",this.selectMotor.bind(this,ss.id));
                })
            })
        
    }
}