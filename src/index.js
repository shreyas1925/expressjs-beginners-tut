const path = require("path");
const express = require("express");
var app = express();
const hbs = require("hbs");

const spath = path.join(__dirname, "../public");
//first of all in home page my .html file will be loading
// then after routing differnt hbs files will be available
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
// template engine

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "Shreyas",
    //just demonstarting how to send dynamic data
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    email: "shreyasshettigar34@gmail.com",
    //just demonstarting how to send dynamic data
  });
});
// It follows top to bottom rule

// app.use(express.static(spath));
// we can keep both dynamic and static files

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.listen(5000, () => {
  console.log(`Listening at port 5000`);
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

// *********************************************************//

// Now lets use partials
// Partials is same as common file in other development languages, using partials we dont have to write the same component of code repeatedly
// for example navigation,footer,and some components

// Complete express will be uploaded
