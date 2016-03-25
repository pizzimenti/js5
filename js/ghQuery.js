var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.avatar_url);
    console.log(response.login);
    console.log(response.name);
    console.log('followers :',response.followers);
    console.log(response.repos_url);
  }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
