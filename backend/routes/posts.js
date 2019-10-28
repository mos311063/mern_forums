const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_LocalStrategy = require('../config/passport')
passport_LocalStrategy(passport)

const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  searchPost,
  getAllPost
} = require('../controller/post.js')
const { ensureAuthenticated } = require('../helper/auth')
router.get('/all', getAllPost)
router.get('/all/:title', searchPost)
router.get('/:id', getPost)

router.post('/new', createPost)
router.use(ensureAuthenticated)
router.put('/:id', updatePost)
router.delete('/', deletePost)

// passport.authenticate('local')

module.exports = router
