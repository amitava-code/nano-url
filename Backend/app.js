import express, { urlencoded } from 'express';
import {nanoid} from 'nanoid';

import dotenv from 'dotenv'
dotenv.config('./.env')

import connectDB from './src/db/db.js'

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/api/create", (req,res)=>{

    const {url} = req.body
    console.log(url)

    res.send(nanoid(6))

})


app.listen(3000,()=>{
    console.log("App is listening port 3000")
})


// GET - Redirection
// POST - create karega short url