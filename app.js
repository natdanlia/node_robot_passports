const express = require("express")
const mustacheExpress = require("mustache-express")
const path = require("path")
const data = require("./models/data")
const app = express()
const indexRoute = require("./routes/index")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');
const flash = require('connect-flash');


app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.set("port", 3000)

app.use(express.static(path.join(__dirname, "public")))


app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: "thisappisthebestappinthewholeworld",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(indexRoute)
app.use("/users", require("./routes/users"))


// Start a db connect and list after it's connected.
require("./dbConnection")

app.listen(app.get("port"), err => {
  if (err) {
    throw err
    exit(1)
  }
  console.log(
    `Node running in ${app.get("env")} mode @ http://localhost:${app.get("port")}`
  )
})
