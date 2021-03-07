import mongoose from "@/database";

const postSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  tag: {
    type: Array,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
});

export default mongoose.model("posts", postSchema);
