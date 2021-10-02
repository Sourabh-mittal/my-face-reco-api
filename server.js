const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const signin = require("./controllers/signin");
const register = require("./controllers/register");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  // host: "ec2-63-33-14-215.eu-west-1.compute.amazonaws.com",
  // user: "kvhkvdpleqvgpq",
  // database: "d9tqbk109ejkha",
  // port: "5432",
  // password: "6f7ea1d301542baab9dcb7efd8901096b60adb695cd806ecb6877e420870134f",
  client: "pg",
  connection: {
    connnectionString:
      "postgres://kvhkvdpleqvgpq:6f7ea1d301542baab9dcb7efd8901096b60adb695cd806ecb6877e420870134f@ec2-63-33-14-215.eu-west-1.compute.amazonaws.com:5432/d9tqbk109ejkha",
    ssl: false,
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("request made for the homepage.");
  res.send(" it is a success.");
});

app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on ${port} `);
});
