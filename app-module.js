const express = require("express");

app = express();

// application level setting
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.send("Home page!");
});

const messages = [];

app.post("/api/data", (req, res) => {
  messages.push(req.body);

  res.json({ success: true });
});

app.get("/api/printdata", (req, res) => {});

port = 3000;
app.listen(3000, () => {
  console.log(`Server online on port ${port}`);
});
