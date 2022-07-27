import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: false,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
  excerpt: {
    type: String,
    required: false,
  },
  externalUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
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

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;