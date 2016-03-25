var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.avatar_url);
    console.log(response.login);
    console.log(response.name);
    console.log('followers :',response.followers);
    console.log(response.repos_url);
    $('#userImg').html("<img src="+response.avatar_url+"</img>");
    $('#userName').html("<h3>"+response.login+"</h3>");
    $('#realName').html("<h4>"+response.name+"</h4>");
  }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
