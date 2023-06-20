import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório"]
  },
  email: {
    type: String,
    required: [true, "O email é obrigatório"]
  },
  password: {
    password: String,
    required: [true, "A senha é obrigatória"]
  },
});
const users = mongoose.model("uses", userSchema);
export default users;