import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.DBURL);

let db = mongoose.connection;
export default db;
