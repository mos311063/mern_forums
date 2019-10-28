const Comment = require('../models/Comment')

const createComment = async (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    post_id: req.body.post_id,
    user_id: req.user ? req.user._id : undefined
  })
  try {
    let newComment = await comment.save()
    res.send(newComment)
  } catch (err) {
    res.status(500).send(err)
  }
}

const getComment = async (req, res) => {
  try {
    const comment = await Comment.find({ post_id: req.params.id }).populate(
      'user_id',
      'name'
    )
    res.send(comment)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  createComment,
  getComment
}
