import {Router,Response,Request} from 'express';
import motorcycleQuery from '../model/motorcycleQuery';
import selerman from '../model/selermanQuery';
import {SelerMan} from '../model/selerman';
import multer from 'multer';
import {fileFilter,selerFilter} from '../helper/fileFilter'
var uploadSeler = multer({dest: 'archives/img/selerman',
                        fileFilter:selerFilter
                    })

const routes = Router();

routes.get('/motorcycle',(req,res)=>motorcycleQuery.selectAll(res));
routes.get('/selerman',(req,res)=>selerman.selectAll(res));
routes.get('/selerman/:id',(req,res)=>selerman.select(parseInt(req.params.id),res))
routes.get('/selermanImg/:id',(req,res)=>selerman.selectImg(parseInt(req.params.id),res));
routes.post('/selerman',uploadSeler.single('imgSeler'),(req,res)=>{
    selerman.include(new SelerMan(req.body.name,
                    req.body.description,
                    req.file!=undefined?req.file.filename:undefined),res)
})
export default routes;  