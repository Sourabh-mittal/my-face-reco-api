const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const signin = require("./controllers/signin");
const register = require("./controllers/register");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(" it is a success");
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
