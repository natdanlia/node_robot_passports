const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
  address: {
    city: String,
    country: String
  },
  avatar: String,
  company: String,
  email: String,
  job: String,
  name: {type: String, required: true},
  phone: String,
  skills: [String],
  university: String,
  username: String,
  password: String
});

module.exports = mongoose.model("User", userSchema, "profiles");
