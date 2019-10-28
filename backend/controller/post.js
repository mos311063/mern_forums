const Post = require('../models/Post')

const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    user_id: req.user ? req.user._id : undefined
  })
  try {
    let newPost = await post.save()
    res.send(newPost)
  } catch (err) {
    res.status(500).send(err)
  }
}

const searchPost = async (req, res) => {
  try {
    var regexp = new RegExp('^' + req.params['title'], 'i')
    const posts = await Post.find({
      title: regexp
    })
      .limit(20)
      .sort({ created: -1 })
      .populate('user_id', 'name')
    res.send(posts)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const getPost = async (req, res) => {
  try {
    const posts = await Post.findById(req.params['id']).limit(50)
    res.send(posts)
  } catch (err) {
    res.status(500).send(err)
  }
}

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ created: -1 })
      .populate('user_id', 'name')
      .limit(100)
    res.send(posts)
  } catch (err) {
    res.status(500).send(err)
  }
}

const updatePost = async (req, res) => {
  try {
    const posts = await Post.findByIdAndUpdate(req.params['id'], req.body, {
      new: true,
      runValidators: true
    })
    res.send(posts)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.body.post_id)
    res.send([post, { text: 'succesfully delete ' }])
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports = {
  createPost,
  searchPost,
  getPost,
  getAllPost,
  updatePost,
  deletePost
}
