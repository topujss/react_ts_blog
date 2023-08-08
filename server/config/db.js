const mongoose = require('mongoose');

const mongoDBConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Database is connected`.bgMagenta);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoDBConnect;
