import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Skills", SkillsSchema);
