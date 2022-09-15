const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    date: {
        type: String,
    }
  },
);

module.exports = mongoose.model("Comment", commentSchema);