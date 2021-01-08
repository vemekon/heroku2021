const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const nameSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: "Boby is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Name", nameSchema);
