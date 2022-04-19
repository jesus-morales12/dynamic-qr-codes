const { Schema, model } = require("mongoose");

const QrCode = Schema({
  cat: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  redirect: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = model("qr-code", QrCode);