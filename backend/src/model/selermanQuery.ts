import connection from '../database/connection';
import {Response} from 'express';
import { SelerMan } from './selerman'
import fs from 'fs';
import path from 'path';

class SelerManQuery{
    selectAll(res:Response){
        const sql = `select * from selerMan`;
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else {
                res.status(200).json(result)
            }
        })
    }
    selectImg(id:number,res:Response){
        let reg = new RegExp(`${id}.(png)|(jpg)|(jpeg)`);
        let file = fs.readdirSync(`${SelerMan.dir}selerman/`).filter(s=>reg.test(s))[0];
        res.sendFile(path.resolve(`${SelerMan.dir}selerman/${file}`))
    }
    select(id:number,res:Response){
        const sql = `select * from selerMan
                        where id = ${id}`
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json(result[0]);
        })
    }
    include(seler:SelerMan,res:Response){
        const sql = `insert into selerMan (name,description)
        values ('${seler.name}','${seler.description}')`;
        connection.query(sql,(err,retsult)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json(retsult);
        })
    }
    
}

export default new SelerManQuery;