var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userImg').html("<img src="+response.avatar_url+"</img>");
    $('#userName').html("<h3>"+response.login+"</h3>");
    $('#realName').html("<h4>"+response.name+"</h4>");
  }).fail(function(error){
      console.log(error.responseJSON.message);
    });

  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(repo){
    for(var i=0; i<repo.length; i++){
      $('#repoName').append("<h5>"+repo[i].name+"</h5>");
      if(repo[i].description != null) {
        $('#repoName').append("<p>"+repo[i].description+'</p><br>');
      }
    }
  }).fail(function(error){
      console.log(error.responseJSON.message);
    });
};
