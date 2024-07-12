const express = require("express");
const connectDb = require("./config/connection.js");
const cors = require("cors");
const formdet = require("./routes/detform")
const errorHandler = require("./middleware/errorhandler.js");

const path = require("path");
const mongoose = require("mongoose");

connectDb();
const app = express();

const port =  4040;


app.use(cors());
app.use(express.urlencoded({
    extended: false,
    limit: 10000, 
    parameterLimit: 10,
 }));
app.use(express.json());
app.use(errorHandler);

app.use("/form", formdet);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});