const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// database connection
async function bootstrap() {
  mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log(`📦 Database connection successful`);
}
bootstrap();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
