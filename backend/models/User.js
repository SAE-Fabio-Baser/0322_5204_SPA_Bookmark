import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  providers: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  collections: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("Bookmark", userSchema);

export default User;