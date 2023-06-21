async function validatePassword(req, res, next) {
  try {
    const result = req.result;
		//do the validation
		const dataVerified = result;
		await dataVerified.save();
    res.status(201).send(dataVerified.toJSON());
  } catch {}
}

export default validatePassword;
