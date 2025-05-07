const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);
