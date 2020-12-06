import {Request} from 'express';
import multer from 'multer'
import { SelerMan } from '../model/selerman';

export function fileFilter(req:Request,file:Express.Multer.File, cb:multer.FileFilterCallback){
  if (!/image\//.test(file.mimetype)) {
      return cb(null, false);
    }
    cb(null, true);
}
export function selerFilter(req:Request,file:Express.Multer.File, cb:multer.FileFilterCallback){
  
  if (!/image\//.test(file.mimetype)&&
      !new SelerMan(req.body.name,req.body.description,'').isValid()) {
      return cb(null, false);
    }
    cb(null, true);
}