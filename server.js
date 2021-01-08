const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");
const { createName } = require("./Name");
require("dotenv").config();

// app
const app = express();

const DB = process.env.MONGODB_URI || process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// port
const port = process.env.PORT || 8000;
// const reactPath = path.resolve(__dirname, "..", "..", "my-app", "build");
// //console.log(reactPath);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send("HELLO HELLO HELLO");
});
app.get("/bye", (req, res) => {
  res.send("BYE BYE BYE BYE");
});
app.post("/name", createName);

app.listen(port, () => console.log(`Server is running good on port ${port}`));
