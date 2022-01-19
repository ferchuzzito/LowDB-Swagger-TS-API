import app from './app'
import { createConnection } from "./db";

createConnection();


app.listen(3000)

console.log('sever Listen port 3000')