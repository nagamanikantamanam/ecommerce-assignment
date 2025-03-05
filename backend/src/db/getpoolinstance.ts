import { Pool } from 'pg';

export const getpoolinstance = async () => {
    try {
        const poolinstance = new Pool({
           user: process.env.DB_USER || 'postgres',
            host: process.env.HOST || 'localhost',
            database: process.env.DATABASE || 'ecommerce_db' ,
            password: process.env.PASSWORD || 'Naga2002@',
            port: Number(process.env.DB_PORT)||5433 ,
           /* user: process.env.DB_USER ,
            host: process.env.HOST ,
            database: process.env.DATABASE ,
            password: process.env.PASSWORD ,
            port: Number(process.env.DB_PORT)*/
            
            
        });
       console.log(process.env.DB_USER);
       console.log(process.env.DB_PORT);
       console.log(process.env.HOST);
       console.log(process.env.PASSWORD);
        /*
        const client = await poolinstance.connect();
        console.log("Successfully connected to the database");

        // Release the client after checking the connection
        client.release();
        */
        return poolinstance;
    } catch (err) {
        console.log("Error creating pool instance:", err);
        throw new Error("Error creating database pool instance");
    }
};
