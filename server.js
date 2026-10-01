const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello! My application is running on Kubernetes.");
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});