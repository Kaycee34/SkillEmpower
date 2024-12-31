import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';


//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

//middlewares

app.use(express.json())
app.use(cors())

//routes
app.use('/api/user', userRouter)

app.get('/', (req,res)=> {
    res.send('api working')
})

app.listen(port, ()=> console.log('listening on port '+port))