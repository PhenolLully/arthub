const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  picture: { type: mongoose.Schema.Types.ObjectId, ref: 'Picture', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);