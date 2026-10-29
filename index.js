const express = require("express");
const app = express();
app.get("/", (req, res) => {
  const currentGMT = new Date().toISOString();
  res.type("html").send("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Muhammad Bajwa - WEB322</title></head><body><h1>Muhammad Bajwa - WEB322</h1><p>" + currentGMT + "</p></body></html>");
});
if (require.main === module) {
  app.listen(3000, () => console.log("Running at http://localhost:3000"));
}
module.exports = app;
