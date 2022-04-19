const { request, response } = require("express");

const QrCode = require("../models/qr-code");

const getCode = async (req = request, res = response) => {
  const { qr: url } = req.params;
  
  const data = await QrCode.findOne({ url });

  if (!data) {
    return res.redirect("https://kuroda.com");
  } else {
    return res.redirect(data.redirect);
  }

}

module.exports = {
  getCode
}