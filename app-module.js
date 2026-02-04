const express = require("express");

const app = express();

// // application level setting
// app.set("view engine", "ejs");

app.use(express.text());
app.use(express.json());

// // routing
// app.get("/", (req, res) => {
//   res.send("Home page!");
// });

const messages = [];

app.post("/api/senddata", (req, res) => {
  messages.push(req.body);
  res.send("Message received!");
});

app.get("/api/printdata", (req, res) => {
  console.log(messages);
  res.send(messages.join("\n"));
});

const jsonMessages = [];

app.post("/api/sendjson", (req, res) => {
  jsonMessages.push(req.body);
  res.json({ success: true });
});

app.get("/api/printjson", (req, res) => {
  res.json(jsonMessages);
});

port = 3000;
app.listen(3000, () => {
  console.log(`Server online on port ${port}`);
});
