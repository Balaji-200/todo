const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDb ${connect.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;
