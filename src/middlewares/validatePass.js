import incorrectRequisition from "../errors/incorrectRequisition.js";

async function validatePassword(req, res, next) {
  try {
    const result = req.result;
    // console.log(req.result)
    // if (req.result.password !== confirmpassword) {
    //   next(new incorrectRequisition());
    // }
    const dataVerified = result;
    await dataVerified.save();
    res.status(201).send(dataVerified.toJSON());
  } catch (err) {
    next(err);
  }
}

export default validatePassword;
