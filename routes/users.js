const express = require("express");
const router = express.Router();
const User = require("../models/data");

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/new", (req, res) => {
  console.log(req.body);
  new User(req.body).save().then(function(newUser) {
    console.log(arguments);
    res.redirect(`/users/${newUser._id}`)
    // res.render(req.body);
  }).catch(function(err){
    console.log(arguments);
    res.send("OOPS")
  });
});

router.get("/:id", function(req, res) {
  console.log(req.params);
  User.findOne({ _id: req.params.id }).then(data => {
    res.render("profile", data);
  });
});

module.exports = router;
