const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_LocalStrategy = require('../config/passport')
passport_LocalStrategy(passport)

const { createComment, getComment } = require('../controller/comment.js')

router.get('/:id', getComment)
router.post('/new', createComment)

module.exports = router
