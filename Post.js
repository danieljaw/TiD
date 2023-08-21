import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, required: false },
  title: { type: String, required: false },
  content: { type: String, required: false },
  picture: { type: String },
});

export default mongoose.model("Post", Post);
