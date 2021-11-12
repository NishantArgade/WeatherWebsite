const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000; // first process/find disired port if not found then go to 8000 port.

//tell express path of static files .
// NOTE:express will serve index.html file directly if it is present in public.
let staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//set view engine template (here handlebars[hbs])
app.set("view engine","hbs");

//we changed default view directory so tell express that new path for views
const viewPath = path.join(__dirname,"../templates/views")
app.set("views",viewPath);

//for use partials, first register partials (tell hbs that we use partials )
hbs.registerPartials(path.join(__dirname,"../templates/partials"));

app.get('/', (req, res) => {
	res.render("index");
});
app.get('/weather', (req, res) => {
	res.render("weather");
});
app.get('/about', (req, res) => {
	res.render("about");
});
app.get('*', (req, res) => {
	res.render("404Page");
});

app.listen(port, () => { console.log("Listening at port ", port) });


