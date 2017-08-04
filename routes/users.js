const express = require("express");
const router = express.Router();
const User = require("../models/data");

router.get("/add", (req, res) => {
  res.render("add");
});

router.get("/edit", (req, res) => {
  res.render("edit");
})

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

router.post("/edit", (req, res) => {
  User.findOne({_id: req.params.id})
    .then((data) => {
      res.render("edit", {users: data})
    }).catch((err) => {
      res.send("oops")
    })
})

router.get("/:id", (req, res) => {
  console.log(req.params);
  User.findOne({ _id: req.params.id }).then(data => {
    res.render("profile", data);
  });
});

module.exports = router;
