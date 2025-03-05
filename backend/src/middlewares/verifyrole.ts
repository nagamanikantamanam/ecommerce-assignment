import { Request, Response, NextFunction } from 'express';
interface coustomreq extends Request{
    role?:string,
    user_id?:string
}
const verfyrole=(allowedrole:string)=>{
    return (req:coustomreq, res:Response, next:NextFunction) => {
        console.log("rollle check");
       
        const role:string |undefined= req?.role;
        console.log(role);
        const result = role==allowedrole?true:false;
        if (!result){ 
            res.status(401).json({"message":`unauthrized only ${allowedrole} are allowed`})
        }else{
        next();
        }
    }
}



export {verfyrole};