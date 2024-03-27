const {Schema, model} = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat =  require('../utils/dateFormat')

const pictureSchema = new Schema({
  imageUrl: { 
    type: String, 
    required: true 
  },
  title: String,
  description: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date)=> dateFormat(date)
    },
  likes: [
    { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }
],
comments: [commentSchema]

}, { 
  toJSON: {
    virtuals: true,
    getters: true
  }
 });

 pictureSchema.virtual('likeCount').get(function(){
  return this.likes.length
 })

module.exports = model('Picture', pictureSchema);
