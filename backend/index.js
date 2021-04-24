import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => {
    console.log('error connection to MongoDB', error.message);
  });

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
