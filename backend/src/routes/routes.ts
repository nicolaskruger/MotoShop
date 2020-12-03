import {Router,Response,Request} from 'express';
import motorcycleQuery from '../model/motorcycleQuery';

const routes = Router();

routes.get('/motorcycle',(req,res)=>motorcycleQuery.selectAll(res));

export default routes;