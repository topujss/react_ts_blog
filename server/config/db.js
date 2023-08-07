const { connect } = require('mongoose');

const mongoDBConnect = async () => {
  try {
    const con = await connect(process.env.MONGO_STRING);
    console.log(`MongoDB Database is connected`.bgGreen);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoDBConnect;
