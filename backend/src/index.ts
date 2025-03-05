/*import dotenv from "dotenv";
import {app} from "./app";
import {  getpoolinstance} from "./db/getpoolinstance";
dotenv.config({
    path:"./.env"
})
const PORT=process.env.SERVER_PORT;
console.log(getpoolinstance().then((res)=>{
    res?.connect().then((client)=>{
        return client.query('select * from pg_user;').then((res)=>{
            console
        })
    })
    console.log("connection established")}));
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
  });
  8*/