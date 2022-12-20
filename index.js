import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
config({path: './config/config.env'});
app.use(cors());

connectDB()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working...');
    });


// load routes
app.use('/api/v1', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
    }
);