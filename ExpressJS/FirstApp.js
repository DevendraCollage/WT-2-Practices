//* Explain The First App of the ExpressJS
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World From ExpressJS!");
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000!");
});
