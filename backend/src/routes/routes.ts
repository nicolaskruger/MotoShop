import {Router,Response,Request} from 'express';
import motorcycleQuery from '../model/motorcycleQuery';
import selerman from '../model/selermanQuery';

const routes = Router();

routes.get('/motorcycle',(req,res)=>motorcycleQuery.selectAll(res));
routes.get('/selerman',(req,res)=>selerman.selectAll(res));
routes.get('/selerman/:id',(req,res)=>selerman.select(parseInt(req.params.id),res))
routes.get('/selermanImg/:id',(req,res)=>selerman.selectImg(parseInt(req.params.id),res));
routes.post('/selerman',(req,res)=>{
    
})
export default routes;  