const express = require("express");
const app = express();

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db/db.db");

const fs = require("fs");
fs.readFile("db/schema.sql", "utf-8", (error, schema) => {
  db.exec(schema);
  if(error) console.log(error);
});

app.get("/", (req, res) => {
  res.send("hi!");
});

app.get("/api", (req, res) => {
  res.json({status: "ok"});
});

const port = "3030";
app.listen(port, () => {
  console.log(`ouvindo em 127.0.0.1:${port}`);
});
