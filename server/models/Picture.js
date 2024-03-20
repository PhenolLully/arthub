const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, required: true },
  title: String,
  description: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  likeCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Picture', pictureSchema);
