const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

// const signin = require("./controllers/signin");
// const register = require("./controllers/register");
// const profile = require("./controllers/profile");
// const image = require("./controllers/image");

// const db = knex({
//   client: "pg",
//   connection: {
//     host: "127.0.0.1",
//     user: "every",
//     password: "EVERY",
//     database: "my-face-reco",
//   },
// });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("request made for the homepage.");
  res.json("success.");
});

// app.post("/signin", signin.handleSignin(db, bcrypt));

// app.post("/register", (req, res) => {
//   register.handleRegister(req, res, db, bcrypt);
// });

// app.get("/profile/:id", (req, res) => {
//   profile.handleProfile(req, res, db);
// });

// app.put("/image", (req, res) => {
//   image.handleImage(req, res, db);
// });

// app.post("/imageurl", (req, res) => {
//   image.handleApiCall(req, res);
// });

app.listen(process.env.PORT || 8080, () => {
  console.log(`App is running on port 8080`);
});
