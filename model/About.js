import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  herocontent: {
    type: String,
    required: true,
  },
  bio: {
    type: Array,
    required: true,
  },
  web: {
    type: String,
    required: true,
  },
});

export default mongoose.model("About", AboutSchema);
