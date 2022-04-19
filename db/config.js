const mongoose = require("mongoose");

const DB_CNN = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
    throw new Error("DB connection error");
  }
};


module.exports = { DB_CNN }