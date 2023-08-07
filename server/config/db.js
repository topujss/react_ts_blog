const mongoose = require('mongoose');

const mongoDBConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_STRING, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log(`MongoDB Database is connected`.bgMagenta);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDBConnect;
