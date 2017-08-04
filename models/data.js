const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


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
  passwordHash: { type: String }
});

userSchema.virtual("password")
  .get(function () {
    console.log("getting virtual field!!!!");
    return null
  })
  .set(function (value) {
    console.log("setting virtual field------", value);
    const hash = bcrypt.hashSync(value, 10);
    console.log(hash);

    console.log(this);
    console.log(arguments);
    this.passwordHash = hash;
  })


module.exports = mongoose.model("User", userSchema, "profiles");
