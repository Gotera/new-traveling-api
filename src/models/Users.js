import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório"],
    // unique: [true, "Esse nome já é utilizado em nosso sistema."],
  },
  email: {
    type: String,
    required: [true, "O email é obrigatório"],
    // unique: [true, "Esse email já é utilizado em nosso sistema."],
    // validate: { validator: validators.isEmail, msg: "Precisa ser um email" },
  },
  password: {
    type: String,
    required: [true, "O senha é obrigatório"],
    minLength: [6, "O minimos de caracteres para a sennha é 6"],
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(this.password, salt);
    this.password = hashedpassword;
    next();
  } catch (err) {
    console.log(err);
  }
});

// userSchema.post("save", function (doc, next) {
//   console.log("novo usuario criado e salvo", doc);
//    next()
// });

const users = mongoose.model("users", userSchema);
export default users;
