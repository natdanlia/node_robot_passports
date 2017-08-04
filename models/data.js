const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
  address: {
    city: String,
    country: String
  },
  avatar: String,
  company: String,
  email: {type: String, required: true},
  job: String,
  name: {type: String, required: true},
  phone: String,
  skills: [String],
  university: String,
  username: {type: String, unique: true, lowercase: true, required: true},
  passwordHash: {type: String, required: true}
});

module.exports = mongoose.model("User", userSchema, "profiles");
