import {Router,Response,Request} from 'express';
import motorcycleQuery from '../model/motorcycleQuery';
import selerman from '../model/selermanQuery';
import motorcycle from '../model/motorcycleQuery';
import {SelerMan} from '../model/selerman';
import multer from 'multer';
import {fileFilter,motoFilter,selerFilter} from '../helper/fileFilter'
var uploadSeler = multer({dest: 'archives/img/selerman',
                        fileFilter:selerFilter
                    })
var uploadMoto = multer({
    dest: 'archives/img/motorcycle',
    fileFilter:motoFilter
})
const routes = Router();

routes.get('/motorcycle',(req,res)=>motorcycleQuery.selectAll(res));
routes.get('/motorcycle/:id',(req,res)=>motorcycleQuery.select(parseInt(req.params.id),res));
routes.get('/motorcycleImg/:id',(req,res)=>motorcycleQuery.selectImg(parseInt(req.params.id),res));
routes.get('/selerman',(req,res)=>selerman.selectAll(res));
routes.get('/selerman/:id',(req,res)=>selerman.select(parseInt(req.params.id),res))
routes.get('/selermanImg/:id',(req,res)=>selerman.selectImg(parseInt(req.params.id),res));
routes.get('/selermanName',(req,res)=>res.status(200).send([]));
routes.get('/selermanName/:name',(req,res)=>selerman.selectName(req.params.name,res));
routes.post('/selerman',uploadSeler.single('imgSeler'),(req,res)=>{
    selerman.include(new SelerMan(req.body.name,
                    req.body.description,
                    req.file!=undefined?req.file.filename:undefined),res)
})
routes.put('/selerman/:id',uploadSeler.single('imgSeler'),(req,res)=>{
    selerman.update(new SelerMan(req.body.name,
        req.body.description,
        req.file!=undefined?req.file.filename:req.body.imgPath,
        parseInt(req.params.id)),res
        ,req.file!=undefined?req.body.imgPath:'')
})
routes.post('/motorcycle',uploadMoto.single('imgMoto'),(req,res)=>{
    moto
})
export default routes;  