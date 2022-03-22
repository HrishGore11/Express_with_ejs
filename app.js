const express = require("express");
// const { hydrate } = require("../Crud/models/User");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.set("view engine", "ejs");

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.get("/temp", (req, res) => {
  res.render("temp", { title: "hey", message: "hey there!" });
});
app.listen(port, () => {
  console.log("server success" + port);
});
