import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './db.js';
import {default as authRoutes} from './routes/authRoutes.js';
import {default as gameRoutes} from './routes/gameRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,  
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());

connectToDatabase();

app.use('/user',authRoutes);
app.use('/game',gameRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});