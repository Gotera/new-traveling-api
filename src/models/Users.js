import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório"],
  },
  email: {
    type: String,
    required: [true, "O email é obrigatório"],
    // validate: { validator: validators.isEmail, msg: "Precisa ser um email" },
  },
  password: {
    type: String,
    required: [true, "O senha é obrigatório"],
  },
  confinformpassword: {
    type: String,
    required: [true, "As senhas precisam ser a mesmas"],
    validate: { validator: confinformpassword.equal(password), msg: "As senhas não coincidem" },
  },
});
const users = mongoose.model("users", userSchema);
export default users;
