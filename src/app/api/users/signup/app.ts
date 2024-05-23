import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import registerRoute from './register'; 
import Link from "next/link";

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://Sahayak:Prerak@cluster0.jsls0zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Use register route
app.use('/api/register', registerRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
