import connection from '../database/connection';
import {Response} from 'express';
import { SelerMan } from './selerman';
import path from 'path';
import dir from './imgDir';
import { Motorcycle } from './motorcycle';
import fs from 'fs';

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
    selectByName(name:string,res:Response){
        const sql = `select * from motorcycle where name like '%${name}%'`
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result);
        })
    }
    selectByPrice(price:number,res:Response){
        const sql = `select * from motorcycle where price <= ${price} `
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result);
        })
    }
    selectImg(id:number,res:Response){
        const sql = `select imgPath from  motorcycle where id = ${id}`;
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(202).sendFile(`${dir}/motorcycle/${result[0].imgPath}`)
        })
    }
    selectByIdSeler(id:number,res:Response){
        const sql = `select * from motorcycle where idSeler = ${id}`;
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result);
        })
    }
    include(moto:Motorcycle,res:Response){
        if(!moto.isValid()) return res.status(400).send(moto.validVect());
        const sql = `insert into motorcycle (name,description,idSeler,imgPath,price)
        value ('${moto.name}','${moto.description}',${moto.idSeler},'${moto.imgPath}',${moto.price});`
        connection.query(sql,(err,result)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json([moto.validVect(),result.insertId])
        })

    }
    update(moto:Motorcycle,res:Response){
        if(moto.imgPath==undefined)
            moto.imgPath="";
        else
        if(!moto.isValid()) return res.status(400).send(moto.validVect());
        const sql = `update motorcycle
        set name = '${moto.name}',
            description = '${moto.description}',
            idSeler = ${moto.idSeler},
            ${moto.imgPath==""?'':`imgPath = '${moto.imgPath}',`}
            price = ${moto.price}
        where id = ${moto.id};
        `
        if(moto.imgPath==""){
            connection.query(sql,(err,result)=>{
                if(err) return res.status(400).json(err);
                res.status(200).json([moto.validVect(),result.insertId])
            })
        }else{
            connection.query(`select imgPath from motorcycle where id = ${moto.id} order by price desc`,(err,result)=>{
                try{fs.unlinkSync(Motorcycle.newDir+result[0].imgPath)}
                catch(err){console.log(err)}
                console.log("old file remove with success")
                connection.query(sql,(err,result)=>{
                    if(err) return res.status(400).json(err);
                    res.status(200).json([moto.validVect(),result.insertId])
                })  
            })
        }
        let stop;
    }
}

export default new MotorcycleQuery;