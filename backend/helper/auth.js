const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.send('not authenticated')
  }
}

const session = require('express-session')
const web_token = session({
  secret: 'coderAcademy',
  resave: false,
  saveUninitialized: true
})

module.exports = {
  ensureAuthenticated,
  web_token
}
