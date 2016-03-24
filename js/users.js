var apiKey = require('./../.env').apiKey;

exports.getRepos = function() {
  $.get('https://api.github.com/users/pizzimenti?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
