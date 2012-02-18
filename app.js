var express = require('express'),
    EventEmitter = require('events'),
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

//dummy tracks
var topTracks = [
  { songurl:'http://open.spotify.com/',
    coverurl:'http://placekitten.com/100/100',
	trackname:'Somebody That I Used To Know',
	artistname:'Gotye',
  },
];
var copyDate = new Date();
var copyright = "&copy; Copyright " + copyDate.getFullYear() + ".";
app.get("/", function(req, res){
  // Render the layout
  res.render('index', {
    title: "Twitterfy",
    tracks: topTracks,
    copyright: copyright,
  });
});

app.get("/populate", function(req, res){
  // Render the layout
  res.render('populate', {
    tracks: req.tracks,
  });
});

app.get("/track", function(req, res){
  res.render('populate', {
    tracks: req.track,
  });
});

//Init
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);