const express =require('express');
const authRouter = require('./router/authRoute');
const app = express();

app.use('/api/auth',authRouter);
app.use(express.json());

app.use('/',()=>{
    res.status(200).json({
        data:"JWTAuth server"
    })
});

module.exports =app;