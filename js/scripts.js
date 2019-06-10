$(function() {
  var flavors = ["vanilla", "chocolate", "strawberry", "caramel"];

  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>");
  });
});
