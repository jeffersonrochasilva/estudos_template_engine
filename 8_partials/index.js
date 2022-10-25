const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
const items = ["item a", "item b", "item c"];

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { items });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "apreder javascript",
      category: "javascript",
      body: "teste",
      comments: 4,
    },
    {
      title: "apreder PHP",
      category: "PHP",
      body: "teste",
      comments: 5,
    },
    {
      title: "apreder pyton",
      category: "pyton",
      body: "teste",
      comments: 6,
    },
    {
      title: "apreder java",
      category: "java",
      body: "teste",
      comments: 7,
    },
  ];

  res.render("blog", { posts });
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
