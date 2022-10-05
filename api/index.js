//1
//create my application
//add "type : module" in package.json to use Es6 modules

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';


//1
 const app = express()

 //const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

 
 dotenv.config()
//3
 const connect = ()=>{
    try {
     mongoose.connect(process.env.MONGO_URI);
    console.log ('connected to mongodb')
  } catch (error) {
    throw(error);
  }
 }
 
 app.use (cors())
 app.use (cookieParser())
app.use (express.json())

 app.use("/api/auth", authRoute)
 app.use("/api/hotels", hotelsRoute)
 app.use("/api/rooms", roomsRoute)
 app.use("/api/users", usersRoute)

 app.use ((err,req,res,next)=>{
  const errorStatus= err.status || 500 
  const errorMessage = err.message || "something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
 })
 /* app.use(express.static(path.join(__dirname, "/client/build")));

 app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
 })*/

//2
 app.listen(process.env.PORT || 8080, ()=> {
    connect()
    console.log('connected to backend.')
 })