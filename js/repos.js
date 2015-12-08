$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/emeraldaly/repos",
      success: function (repos) {
        for(var i =0; i < repos.length; i++) {
          var newRepoUrl = buildRepoUrl(repos[i]);
          $(".list-group").append(newRepoUrl);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        alert("Something went wrong");

      }
    });

    function buildRepoUrl(repoData) {
      var commitsApiUrl = "https://api.github.com/repos/";
      commitsApiUrl += repoData.owner.login + "/";
      commitsApiUrl += repoData.name + "/commits";

      var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
      return newLink;
    }
});
