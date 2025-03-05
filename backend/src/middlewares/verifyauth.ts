import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
interface coustomreq extends Request{
    role?:string,
    user_id?:string
}
const verifyauth = (req: coustomreq, res: Response, next: NextFunction)=> {
  
  const authheader:string|undefined = req.headers.authorization||""; 

 
  if (!authheader) {
     res.status(401).json({ message: 'Unauthorized, No token provided' });
  }

  
  const token = authheader?.split(' ')[1];

  if (!token) {
     res.status(401).json({ message: 'Unauthorized, No token provided' });
  }

  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '';

  try {
   
    const decoded = verify(token, ACCESS_TOKEN_SECRET);

   
    if (typeof decoded !== 'string') {
      req.body.role = decoded.role; 
      req.body.user_id = decoded.user_id; 
      req.role=decoded.role;
      console.log(decoded.role);
      console.log(decoded.user_id)
      
       next(); 
    } else {
      
       res.status(401).json({ message: 'Unauthorized, Invalid token' });
    }
  } catch (err) {
    
     res.status(401).json({ message: 'Unauthorized, Invalid token' });
  }
};

export { verifyauth };
