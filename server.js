
// Node Dependencies
const express = require('express');

// Open Server
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});