const express = require("express");
const {DetailsForm} = require("../controller/details");

const router = express.Router();

router.post("/details", DetailsForm);
module.exports = router;