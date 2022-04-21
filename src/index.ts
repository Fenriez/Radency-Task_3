import express, { Express } from "express";
import mongoose from 'mongoose';
import router from "./router.js";

const APP: Express = express();
const PORT = 5000;
const DB_URL = `mongodb+srv://user:P%40ssw0rd@sandbox.m8pfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

APP.use(express.json())
APP.use(express.static('static'))
APP.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        APP.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
          });
    } catch (e) {
        console.log(e)
    }
}

startApp()