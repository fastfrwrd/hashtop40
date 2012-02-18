module.exports = function(app) {

  app.socket = require('socket.io').listen(app);

  var modules = {
    socket: require('./sockets')(app),
    twitter: require('./twitter')(app)
  };

  return modules;
};