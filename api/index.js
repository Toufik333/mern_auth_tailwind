import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

console.log('MongoDB URI:', process.env.MONGO);

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
    console.log('Error:', err);
});

const app = express();

app.use(express.json());

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
   });

});
