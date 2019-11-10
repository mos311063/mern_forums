const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.send('not authenticated')
  }
}

const session = require('express-session')
const session_setting = session({
  secret: 'mosmos',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})
module.exports = {
  ensureAuthenticated,
  session_setting
}
