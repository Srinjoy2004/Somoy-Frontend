const express = require("express");
const loggedin = require("../controllers/loggedin");
const logout = require("../controllers/logout");
const register = require("../controllers/register");
const router = express.Router();

router.get("/", loggedin, (req, res) => {
  if (req.user) {
    res.render("index", { status: "loggedin", user: req.user });
  } else {
    res.render("index", { status: "no", user: "nothing" });
  }
});

router.get("/register", register);
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public" });
});
router.get("/index", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});
router.get("/logout", logout);
module.exports = router;
