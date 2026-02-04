const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Postman!");
});

const port = 3000;
app.listen(port, () => {
  console.log("Now listening to port 3000!");
});
