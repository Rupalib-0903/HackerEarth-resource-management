const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.INVALID_FORM:
      res.json({
        title: "Invalid Form",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;