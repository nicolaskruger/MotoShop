import connection from '../database/connection';
import {Response} from 'express';
import { SelerMan } from './selerman';
import path from 'path';
import dir from './imgDir';
import { Motorcycle } from './motorcycle';

class MotorcycleQuery{
    selectAll(res:Response){
        const sql = `select * from motorcycle`;
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result);
        })
    }
    select(id:number,res:Response){
        const sql = `select * from motorcycle where id = ${id}`;
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result[0]);
        })
    }
    selectImg(id:number,res:Response){
        const sql = `select imgPath from  motorcycle where id = ${id}`;
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(202).sendFile(`${dir}/motorcycle/${result[0].imgPath}`)
        })
    }
    include(moto:Motorcycle,res:Response){
        // res.status(400).send(moto.)
    }
}

export default new MotorcycleQuery;