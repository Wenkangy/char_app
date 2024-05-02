const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "GET,PUT,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/auth/userName/:userName/pswd/:pswd", (req, res) => {
  if (verify_login(req.params.userName, req.params.pswd)) {
    var token = jwt.sign({ username: `${req.params.userName}` }, "secret", {
      expiresIn: 120,
    });
    res.send(token);
  }
  res.send(req.params);
});

app.all("*", (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

function verify_login(userName, pswd) {
  if (userName == "kufooloo" && pswd == "secret") {
    return true;
  }
  return false;
}
