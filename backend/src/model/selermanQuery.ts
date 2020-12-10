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
        const sql = `select imgPath from  selerMan where id = ${id}`;
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(202).sendFile(path.resolve(`${SelerMan.dir}selerman/${result[0].imgPath}`))
        })
    }
    selectReturn(id:number){
        const sql = `select * from selerMan
                        where id = ${id}`
        let ret:any;
        connection.query(sql,(err,result)=>{
            if(err) ret = err;
            ret= result;
        })
        console.log(ret);
        return ret;
    }
    select(id:number,res:Response){
        const sql = `select * from selerMan
                        where id = ${id}`
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json(result[0]);
        })
    }
    selectName(name:string,res:Response){
        const sql = `select * from selerMan where name like '%${name}%'; `
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json(result);
        })
    }
    include(seler:SelerMan,res:Response){
        if(!seler.isValid()) return res.status(400).json(seler.validVect());
        const sql = `insert into selerMan (name,description,imgPath)
        values ('${seler.name}','${seler.description}','${seler.imgPath}')`;
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json([seler.validVect(),result.insertId]);
        })
    }
    update(seler:SelerMan,res:Response,oldImg:string){
        if(seler.imgPath==undefined) seler.imgPath = '';
        if(!seler.isValid()) return res.status(400).json(seler.validVect());

        const sql =`
        update selerMan
            set name = '${seler.name}',
                description = '${seler.description}'
                ${seler.imgPath==''?'':`,imgPath ='${seler.imgPath}'`}
        where id = ${seler.id};
        `;
        if(seler.imgPath != ''){
            connection.query(`select imgPath from selerMan where id = ${seler.id};`,(err,result)=>{
                fs.unlinkSync(SelerMan.newDir+result[0].imgPath)
                console.log("old file remove with success")
                connection.query(sql,(err,result)=>{
                    if(err) return res.status(400).json(err);
                    res.status(200).json([seler.validVect(),result.insertId]);
                })
            })
        }
        else{
            connection.query(sql,(err,result)=>{
                if(err) return res.status(400).json(err);
                res.status(200).json([seler.validVect(),result.insertId]);
            })
        }
        
    }
    
}

export default new SelerManQuery;