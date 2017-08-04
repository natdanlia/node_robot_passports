const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync(password, 8);

let userSchema = mongoose.Schema({
  address: {
    city: String,
    country: String
  },
  avatar: String,
  company: String,
  email: { type: String, required: true },
  job: String,
  name: { type: String, required: true },
  phone: String,
  skills: [String],
  university: String,
  username: { type: String, unique: true, lowercase: true, required: true },
  passwordHash: { type: String, required: true }
});

const User = mongoose.model("User", userSchema, "profiles");

userSchema.methods.setPassword = function(password) {
  const hash = bcrypt.hashSync(value, 8);
  this.passwordHash = hash;
})


module.exports =
