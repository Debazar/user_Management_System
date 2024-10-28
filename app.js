require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layout/main"); // Corrected line
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
