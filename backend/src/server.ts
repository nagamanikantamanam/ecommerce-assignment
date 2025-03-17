import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
