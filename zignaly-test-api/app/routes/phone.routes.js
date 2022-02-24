const express = require("express");
const router = express.Router();
const phoneController = require("../controllers/phone.controller.js");

router.get('/', phoneController.findAll);

module.exports = router;