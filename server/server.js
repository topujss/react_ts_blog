const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoDBConnect = require('./config/db');
const authRoute = require('./route/authRoute');
const userRoute = require('./route/userRoute');

// initialize express
const app = express();

// environment setup
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// app static folder
app.use(express.static('server/public'));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
// app.use('/api/posts', postRoute);
// app.use('/api/categories', categoryRoute);

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Running: http://localhost:${PORT}`.bgCyan);
});
