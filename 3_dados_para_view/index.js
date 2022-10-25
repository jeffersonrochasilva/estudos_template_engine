const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Jefferson",
    subname: "rocha",
    age: 29,
  };

  res.render("home", { user: user });
});
app.listen(3000, () => {
  console.log(`servidor rodadano na porta 3000`);
});
