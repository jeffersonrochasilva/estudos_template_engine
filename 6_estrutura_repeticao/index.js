const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
const items = ["item a", "item b", "item c"];

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { items });
});

app.get("/", (req, res) => {
  const user = {
    name: "Jefferson",
    subname: "rocha",
    age: 29,
  };

  const auth = true;
  const aprovado = false;

  res.render("home", { user: user, auth, aprovado });
});
app.listen(3000, () => {
  console.log(`servidor rodadano na porta 3000`);
});
