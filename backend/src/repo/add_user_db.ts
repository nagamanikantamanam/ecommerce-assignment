import { getpoolinstance } from "../db/getpoolinstance";

const add_user_db=  async ( mobile: number, email: string,password:string,username:string): Promise<{ status: boolean, message: string }> =>{
    const pool = await getpoolinstance(); 

    try {
        const query = `
           INSERT INTO USERS(name,email,mobile,password,role_id) values($1,$2,$3,$4,$5);
        `;
       
        const res = await pool.query(query, [username,email ,mobile,password,1]);
        
        return {
            status:true,
            message:"user created"
        }
    } catch (error) {
        console.log(Object.getOwnPropertyNames(error));
        console.error('Error adding user :', error);
        return {
            status: false,
            message: 'Error while regestring.',
        };
    }
}

export { add_user_db };
