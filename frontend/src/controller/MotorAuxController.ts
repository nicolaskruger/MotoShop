import { IMselerman } from "../helper/IMselerman";
import { MsgList } from "../helper/MsgList";
import { SelerMan } from "../model/selerman";
import { HttpSselerman } from "../service/HttpSselerman";
import { Controller } from "./Controller";

export class MotorAuxController extends Controller{
    operPushMan(event:Event,func:()=>Promise<any>){
        event.preventDefault();
        func()
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
    operPush(event:Event,func:()=>Promise<any>,func01?:(str:string)=>void){
        event.preventDefault();
        func()
            .then(s=>s.json())
            .then(s=>{
                new MsgList('.Msg')
                        .setMsg(...s[0]);
                document.querySelector('.imgBack').addEventListener('click',()=>func01(s[1])); 
            })
            .catch(s=>{throw (s as Response).json()})
            .catch(s=>{
                new MsgList('.Msg')
                        .setMsg(...s);
            });
        
    }
    
    selectMan(id:number){
        
    }
}