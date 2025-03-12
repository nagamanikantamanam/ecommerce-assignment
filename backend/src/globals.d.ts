declare global{
  namespace Express{
interface Request {
     user_id?: number;
      role?: string;
    }
  }

  }

export {};