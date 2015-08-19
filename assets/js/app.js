var profileArea = $('#profile-target');
var profileTemplateString = $('#profile-template').html();
var profileTemplate = Handlebars.compile(profileTemplateString);

$.ajax('http://api.github.com/users/scott6455', {
  success: function(data) {
    console.log(data);
    var output = profileTemplate(data);
    console.log(output);

    profileArea.html(output);
  }
});
