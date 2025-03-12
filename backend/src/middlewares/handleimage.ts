import {upload} from "../utils/multerconfig"
import { Request, Response, NextFunction } from 'express';
import multer from "multer"
const handleimage=(req:Request,res:Response,next:NextFunction)=>{
    console.log("inside image uplode")
    upload(req, res, (err) => {
       
        let responseObject = {
            code: '',
            message: ''
        };
    
        if (err) {
            console.log("errrrr image upload")
            if (err instanceof multer.MulterError) {
                if (err.code === 'LIMIT_FILE_SIZE') {
                    responseObject.code = 'large';
                    responseObject.message = 'File is too large, only upload files less than 1MB';
                    res.status(400).send(responseObject);  
                } else {
                    responseObject.code = 'unknown';
                    responseObject.message = 'Error while uploading';
                    res.status(400).send(responseObject);  
                }
            } else {
                console.log(err)
                responseObject.code = 'invalid type';
                responseObject.message = 'Invalid file type, only jpeg, jpg, or png allowed';
                res.status(400).send(responseObject);  
            }
        } else {
            console.log("succcc")
            responseObject.code = 'success';
            responseObject.message = 'File uploaded successfully';
            req.body.image=req.file?.path;
            console.log("jaiiiiii");
            console.log(req.file?.path);
            next();
        }
    });
    
}
export {handleimage}