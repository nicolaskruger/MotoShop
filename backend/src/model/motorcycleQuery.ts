import connection from '../database/connection';
import {Response} from 'express';


class MotorcycleQuery{
    selectAll(res:Response){
        const sql = `select * from motorcycle`;
        connection.query(sql,(err,result)=>{
            if(err) res.status(400).json(err);
            else res.status(201).json(result);
        })
    }
}

export default new MotorcycleQuery;