const express = require("express");
const router = express.Router();
const User = require("../models/data");

router.get("/add", (req, res) => {
  res.render("add");
});



router.post("/new", (req, res) => {
  console.log(req.body);
  new User(req.body).save().then((newUser) => {
    console.log(arguments);
    res.redirect(`/users/${newUser._id}`)
    // res.render(req.body);
  }).catch((err) => {
    console.log(arguments);
    res.send("OOPS")
  });
});



router.get("/:id", (req, res) => {
  // console.log(req.params);
  User.findOne({ _id: req.params.id }).then(data => {
    res.render("profile", data);
  });
});

router.get("/:id/edit", (req, res) => {
  User.findOne({ _id: req.params.id })
  .then((data) => {
    res.render("edit", {users: data})
  });
});

router.post("/:id/edit", (req, res) => {
  User.findByIdAndUpdate( { _id: req.params.id }, {
    company: req.body.company,
    email: req.body.email,
    job: req.body.job,
    name: req.body.name,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password
  }) .then(() => {
    res.redirect(".")
  }).catch((err) => {
    res.send("oops")
  })
})
module.exports = router;
