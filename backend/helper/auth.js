const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send("not authenticated");
  }
};
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const session_setting = session({
  secret: "mosmos",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
});
module.exports = {
  ensureAuthenticated,
  session_setting
};
