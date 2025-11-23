import express from 'express';
import mongoose from 'mongoose';
import carRoutes from './routes/carRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

// MongoDB 
await mongoose.connect('mongodb://127.0.0.1:27017/cardb');
console.log('MongoDB ulandi');


app.use('/api/cars', carRoutes);

app.get('/', (req, res) => {
  res.send(`
    <h1>Car CRUD API (ESM) ishlayapti!</h1>
    <p><a href="/api/cars">/api/cars</a> – barcha mashinalar</p>
    <small>npm start bilan ishga tushdi | type: "module"</small>
  `);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi http://localhost:${PORT}`);
});