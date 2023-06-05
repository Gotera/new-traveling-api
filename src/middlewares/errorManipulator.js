import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import incorrectRequisition from "../errors/incorrectRequisition.js";
import validationError from "../errors/validationError.js";
import notFound from "../errors/notFound.js";

function errorManipulator(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new incorrectRequisition().sendAnswer(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new validationError(err).sendAnswer(res);
  } else if (err instanceof notFound) {
    err.sendAnswer(res);
  } else {
    new baseError().sendAnswer(res);
  }
}

export default errorManipulator;
