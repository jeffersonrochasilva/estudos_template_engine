const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

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

app.get("/altern", (req, res) => {
  res.render("altern");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`servidor rodando na pota 3000`);
});
