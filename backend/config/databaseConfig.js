const mongoose = require('mongoose')
const MONGODB_URL= process.env.MONGODB_URL || "mongodb://27017/my_databse"
const databaseconnect = ()=>{
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=> console.log(`connectedto ${conn.connection.host}`))
    .catch((e)=>console.log(e.message))
    }



module.exports=databaseconnect;