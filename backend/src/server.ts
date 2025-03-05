import dotenv from "dotenv";
import {app} from "./app";
import {  getpoolinstance} from "./db/getpoolinstance";
dotenv.config({
    path:"./.env"
})
const PORT=process.env.SERVER_PORT;
app.listen(PORT, () => {
    
    return console.log(`Express is listening at http://localhost:${PORT}`);
  });