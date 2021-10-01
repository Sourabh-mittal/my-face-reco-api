// const Clarifai = require("Clarifai");

// const app = new Clarifai.App({
//   apiKey: "717e273eb2c44015b966a3f6457a7948",
// });

// const handleApiCall = (req, res) => {
//   app.models
//     .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.status(400).json("some error"));
// };
// const handleImage = (req, res, db) => {
//   const { id } = req.body;
//   db("users")
//     .where("id", "=", id)
//     .increment("entries", 1)
//     .returning("entries")
//     .then((entries) => {
//       res.json(entries[0]);
//     })
//     .catch((err) => {
//       res.status(400).json("unable to get entries");
//     });
// };

// module.exports = {
//   handleImage: handleImage,
//   handleApiCall: handleApiCall,
// };
