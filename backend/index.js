const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()
require('./config/mongoose.js')

const cors = require('cors')

const passport = require('passport')
const { session_setting } = require('./helper/auth')
app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:8080'],
    credentials: true
  })
)
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(session_setting)
app.use(passport.initialize())
app.use(passport.session()) //passport.authenticate('session')
// app.use(require('express-ejs-layouts'))
// app.set('view engine', 'ejs')
// app.use(express.static('views'))
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Credentials', 'true')
//   next()
// })

app.use(require('./routes/index'))
app.use('/user', require('./routes/users'))
app.use('/comment', require('./routes/comments'))
app.use('/post', require('./routes/posts'))

app.listen(process.env.Port || 3000, console.log('Listening on Port 3000'))
