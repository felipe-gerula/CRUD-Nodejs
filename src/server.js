const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const _handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const methodOverride = require("method-override");

//initializations
const app = express();


//Settings 
app.set("port",process.env.PORT  || 3000);
app.set("views",path.join(__dirname , "views"));
app.engine(".hbs", exphbs({
    defaultLayout : "main",
    layoutsDir : path.join(app.get("views"),"layouts"),
    partialsDir : path.join(app.get("views"),"partials"),
    extname : ".hbs",
    handlebars: allowInsecurePrototypeAccess(_handlebars)
}));
app.set("view engine",".hbs");


//Middlewares
app.use(express.urlencoded({extended : false}));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

//Global variables


//Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/note.routes"));

//Static Files
app.use(express.static(path.join(__dirname , "public")));


module.exports = app;