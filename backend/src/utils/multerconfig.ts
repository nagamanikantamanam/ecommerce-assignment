import multer from "multer";
import path from "path";
import { Request, Response, NextFunction } from 'express';
import { user_login_controller } from "../controllers/auth_controllers";
import { FileFilterCallback } from 'multer'
const ds=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.join(__dirname, '..', 'uploads'))
    },
    filename:(req,file,cb)=>{
        
        cb(null,Date.now()+file.originalname)

    }
});
const filter = (req:Request,file:Express.Multer.File,cb:FileFilterCallback)=>{


    const allowedTypes =[
        "image/jpg","image/jpeg","image/png"
    ]
    console.log(file.mimetype);
    if(allowedTypes.includes(file.mimetype)){
        console.log("included");
        cb(null,true)
    }
    else{
        cb(new Error("Invalid file type"))
    }

}
 const upload =multer({
    storage:ds,
    fileFilter:filter,
    limits:{
        fileSize:1*1024*1024
    }

}).single('productimage')
export {upload}