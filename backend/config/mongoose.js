const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

module.exports = mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  err => {
    err ? console.error(err) : console.log('Connection Status: Success')
  }
)
