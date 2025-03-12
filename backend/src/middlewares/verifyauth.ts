import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const verifyauth = (req: Request, res: Response, next: NextFunction)=> {
  console.log("startt")
  const authheader:string|undefined = req.headers.authorization||""; 
  
 
  if (!authheader) { 
     res.status(401).json({ message: 'Unauthorized, No token provided' });
  }

  
  const token = authheader?.split(' ')[1];
  console.log(token);
  if (!token) {
     res.status(401).json({ message: 'Unauthorized, No token provided' });
  }

  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '';
console.log(ACCESS_TOKEN_SECRET);
  try {
   
    const decoded = verify(token, ACCESS_TOKEN_SECRET);

   console.log("decode");
    if (typeof decoded !== 'string') {
      
      req.user_id=decoded.user_id;
      req.role=decoded.role;
      console.log("ssssssss")
      
       next(); 
    } else {
      console.log("failed 222");
       res.status(401).json({ message: 'Unauthorized, Invalid token' });
    }
  } catch (err) {
    console.log("failed")
     res.status(401).json({ message: 'Unauthorized, Invalid token' });
  }
};

export { verifyauth };
