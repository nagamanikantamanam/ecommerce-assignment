import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customerror';
const handleerror= (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
     res.status(err.statuscode).json({
        message: err.message,
        });
    
}
export default handleerror;