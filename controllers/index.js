module.exports = function(app) {

  var app.socket = require('socket.io').listen(app);
  
  var modules = {
    socket: require('sockets.js')(app)
  };

  return modules;
}
