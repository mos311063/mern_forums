const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created: { type: Date, default: Date.now }
})

// CommentSchema.set('toJSON', {
//   transform: function(doc, Comment, options) {
//     delete Comment.user_id
//     return Comment
//   }
// })

module.exports = mongoose.model('Comment', CommentSchema)
