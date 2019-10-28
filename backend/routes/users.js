const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_LocalStrategy = require('../config/passport')
passport_LocalStrategy(passport)

const { createUser, loginUser } = require('../controller/user.js')
router.post('/new', createUser)
router.post('/login', passport.authenticate('local'), loginUser)
router.post('/session', (req, res) => {
  if (req.user) res.send({ name: req.user.name, id: req.user._id })
  else res.send({ name: '', id: '' })
})
router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
