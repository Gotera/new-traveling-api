import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
  id: { type: String },
  nome_destino: {
    type: String,
    required: [true, "O destino é obrigatório."],
  },
  data_ida: {
    type: Date,
    required: [true, "A data de ida é obrigatória."],
  },
  data_volta: {
    type: Date,
  },
  nota_fiscal: { type: String },
  quilometragem_ida: {
    type: String,
    // , required: [true, "A quilimetragem de ida é obrigatória."]
  },
  quilometragem_volta: {
    type: String,
    // , required: [true, "A quilimetragem de ida é obrigatória."]
  },
  valor_diesel: {
    type: String,
    // , required: [true, "A quilimetragem de ida é obrigatória."]
  },
  lucro: { type: String },
});

const travels = mongoose.model("travels", travelSchema);
export default travels;
