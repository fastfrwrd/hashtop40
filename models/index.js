module.export = function(app) {

  var models = {
    Song: require('Song')(app)
  };

  return models;
};