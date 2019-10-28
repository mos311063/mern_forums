const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    // required: true
  },
  created: { type: Date, default: Date.now }
})

// PostSchema.set('toJSON', {
//   transform: function(doc, post, options) {
//     delete post.user_id
//     return post
//   }
// })

module.exports = mongoose.model('Post', PostSchema)
