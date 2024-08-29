const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));



const authRoutes = require('./routes/auth');

// Use routes
app.use(authRoutes);

module.exports = app;

