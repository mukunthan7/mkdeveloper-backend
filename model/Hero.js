import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  dev: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Hero", HeroSchema);
