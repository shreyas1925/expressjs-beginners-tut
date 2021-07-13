const path = require("path");
const express = require("express");
var app = express();

const spath = path.join(__dirname, "../public"); //first of all in home page my
// .html file will be loading
// then after routing differnt hbs files will be available
const templatePath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", templatePath);
// template engine

app.get("/about", (req, res) => {
  res.render("index", {
    name: "Shreyas", //just demonstarting how to send dynamic data
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    email: "shreyasshettigar34@gmail.com", //just demonstarting how to send dynamic data
  });
});
// It follows top to bottom rule

app.use(express.static(spath));
// we can keep both dynamic and static files

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.listen(3300, () => {
  console.log("Listening");
});

// Using template engines such as pug,ejs,handlebars
// just to get the dynamic content
// Using handlebars , we have view engine hbs for using
// handlebars where handlebars comes under mustache template
// of expressjs

// *********************************************************//

// In express if we want to use hbs then folder name by default should views
// lets customize the foldet views
// we have to use app.set() to set the customized folder name
