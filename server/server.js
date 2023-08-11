const express = require('express');
require('dotenv').config();
require('colors');
const cors = require('cors');
const mongoDBConnect = require('./config/db');
const authRoute = require('./route/authRoute');
const userRoute = require('./route/userRoute');
const postRoute = require('./route/postRoute');
const categoryRoute = require('./route/categoryRoute');

// initialize express
const app = express();

// environment setup
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// app static folder
app.use(express.static('server/public'));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/post', postRoute);
app.use('/api/v1/category', categoryRoute);

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Running: http://localhost:${PORT}`.bgCyan);
});
