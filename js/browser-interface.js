var ghQuery = require('./../js/ghQuery.js');
var apiKey = require('./../.env');

$(document).ready(function(){
  console.log('browser-interface working, document ready');
  $('#searchBtn').click(function(event) {
    event.preventDefault();
    var username = $('#usernameInput').val();
    console.log('entered username:',username);
    ghQuery.getRepos(username);
  })
});
