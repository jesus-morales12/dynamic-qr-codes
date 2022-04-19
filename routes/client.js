const { Router }  = require("express");
const { getCode } = require("../controllers/client");

const router = Router();

router.get("/qr/:qr", getCode);

module.exports = router;