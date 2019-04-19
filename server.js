var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require("mongoose")), (User = require("./models/userListModels"));
bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://http://localhost/userDB");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/userListRoutes");
routes(app);
app.listen(port);

console.log("CocktailFinder api has started on port: " + port);
