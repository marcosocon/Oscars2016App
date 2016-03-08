//Requiring Modules

var    express         = require('express');
var    mongoose        = require('mongoose');
var    bodyParser      = require('body-parser');
var    methodOverride  = require('method-override');
var    _               = require('lodash');

//Invoke Express

var app = express();

//Add Middlewares

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



//Connect to the mongo DB

mongoose.connect('mongodb://localhost/oscarsapp');
mongoose.connection.once('open', function(){

//Loads the models

app.models = require('./models/index');

//Loads the routes

var routes = require('./routes');

_.each(routes, function(controller, route){
  app.use(route, controller(app,route));
});

  console.log('listening in port :3000');
  app.listen(3000);
})
