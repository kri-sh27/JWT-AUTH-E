const express =require('express');
const authRouter = require('./router/authRoute');
const databaseconnect = require('./config/databaseConfig');
const cookieParser=require('cookie-parser')
const app = express();
databaseconnect();
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth',authRouter);


app.use('/',()=>{
    res.status(200).json({
        data:"JWTAuth server"
    })
});

module.exports =app;