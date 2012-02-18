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

var config = {
    user: "",
    password: "",
    track: ["#nodetwitter"]};

var socket = require('socket.io').listen(app),
    twitter = new (require("twitter-node").TwitterNode)(config);




socket.addListener('clientMessage', function(data, client){
  client.sockets.send(data);
});

twitter
    .addListener('error', function(error){ // Always check for errors or they popup client side
                     console.log(error.message);
                 })
    .addListener('tweet', function(tweet){ // A new tweet that matches the criteria has been located
          socket.emit('clientMessage', tweet, socket);
                 })
    .addListener('limit', function(limit){ // New limit has been sent from the API
                     sys.puts('LIMIT: ' + sys.inspect(limit));
                 })
    .addListener('delete', function(del){ // A delete event occured
                     sys.puts('DELETE: ' + sys.inspect(del));
                 })
    .addListener('end', function(resp){ // API disconnect
                     sys.puts('wave goodbye...' + resp.statusCode);
                 })
    .stream();




//Mongo connect
app.db = mongoose.connect('mongodb://localhost/top-music');




app.routes = require('./controllers');

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