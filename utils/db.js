const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectionDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to database");
  } catch (error) {
    console.log("couldn't connect to database", error);
  }
};

module.exports = connectionDb;
