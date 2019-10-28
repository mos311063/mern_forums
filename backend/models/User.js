const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return value.length > 3
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'invalid email'],
    unique: true
  },
  password: {
    type: String,
    minlength: 4,
    required: true
  }
})

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next()
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password)
}
module.exports = mongoose.model('User', UserSchema)
