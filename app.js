var express = require('express'),
    EventEmitter = require('events'),
    mongoose = require('mongoose'),
    sys = require("util"),
    app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//Mongo connect
app.db = mongoose.connect('mongodb://localhost/top-music');

//Controllers
app.controllers = require('./controllers')(app);

// Routes
app.get("/", function(req, res){

  // Render the layout
  res.render('index', {
    title: "Amy and Steve Wedding"
  });
});


//Init
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);