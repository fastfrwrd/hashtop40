var express = require('express'),
    EventEmitter = require('events').EventEmitter,
    mongoose = require('mongoose'),
    app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
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
var mongoAuth = process.env.MONGOHQ_USER + ':' + process.env.MONGOHQ_PASS;
app.db = mongoose.connect('mongodb://user:testing@staff.mongohq.com:10097/twitter-top-40');

//A wild eventemitter has appeared
app.EventEmitter = new EventEmitter();

//Controllers
app.controllers = require('./controllers')(app);

// Routes
app.get("/", function(req, res){
  // Render the layout
  var copyDate = new Date();
  res.render('index', {
    title: "twitterfy",
    copyright: "&copy; Copyright " + copyDate.getFullYear() + ".",
  });
});

app.get("/refresh", function(req, res) {
  app.EventEmitter.emit('songs:refresh');
  res.send("refreshed!");
});

//Init
app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
