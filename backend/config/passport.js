const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
// const bcrypt = require('bcryptjs')

const passport_LocalStrategy = async passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email })
          if (!user) {
            return done(null, false, { message: 'Email Not Registered' })
          }
          const isMatch = await user.validatePassword(password)
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false, { message: 'Password Incorrect' })
          }
        } catch (err) {
          console.log(err)
        }
      }
    )
  )
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}

module.exports = passport_LocalStrategy
