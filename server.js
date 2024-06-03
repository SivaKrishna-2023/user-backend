// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://SivaKrishna:siva2023@cluster6.3hjwj1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster6')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});