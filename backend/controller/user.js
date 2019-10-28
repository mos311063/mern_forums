const User = require('../models/User')
const createUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try {
    let newUser = await user.save()
    res.send('succesfully add user : ' + newUser._id)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const loginUser = async (req, res, next) => {
  try {
    res.send({ name: req.user.name, id: req.user._id })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports = { createUser, loginUser }
