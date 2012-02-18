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
/**
 * To get all the info to login, sign into your MongoHQ account, go to the db you want,
 * click the "Database Info" tab, then look for the line that looks like:
 * -------------------------------------------------------------
 * mongodb://<user>:<password>@staff.mongohq.com:10056/node-test
 * ---------|     |-|        |------------------|    |-|       |
 *           USER    PASSWORD                    PORT   DB NAME
 *
 * ALSO, for testing, you should manually add a document and collection into MongoHQ
 * from their "Add a Collection" > "Add a Document" links, then below we'll log it.
 */
app.db = mongoose.connect('mongodb://tuckbick:hackdayftw123@staff.mongohq.com:10097/twitter-top-40');

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