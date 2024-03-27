const {Schema, Types} = require('mongoose');
const dateFormat =  require('../utils/dateFormat')

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId()
  },
  user: String,
  text: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date)=> dateFormat(dateFormat)
  }
});

module.exports = commentSchema
