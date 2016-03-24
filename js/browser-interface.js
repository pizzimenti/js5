var users = require('./../js/users.js');
var apiKey = require('./../.env');

$(document).ready(function(){
  console.log('browser-interface working, document ready');
  users.getRepos();
});
