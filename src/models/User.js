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
    required: [true, "A password é obrigatória"]
  },
});
const user = mongoose.model("user", userSchema);
export default user;