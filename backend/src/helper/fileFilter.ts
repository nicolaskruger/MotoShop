import {Request} from 'express';
import multer from 'multer'

export function fileFilter(req:Request,file:Express.Multer.File, cb:multer.FileFilterCallback){
  console.log("filter");
  console.log(file);
  if (!/image\//.test(file.mimetype)) {
      return cb(null, false);
    }
    cb(null, true);
}
