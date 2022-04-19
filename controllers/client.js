const { request, response } = require("express");

const QrCode = require("../models/qr-code");

const getCode = async (req = request, res = response) => {
  const { qr: url } = req.params;
  
  const data = await QrCode.findOne({ url });

  if (!data) {
    return res.json({ redirect: "kuroda.com" });
  } else {
    return res.json({redirect: data.redirect});
  }

}

module.exports = {
  getCode
}