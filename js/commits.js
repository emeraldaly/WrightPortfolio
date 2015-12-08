$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    var thisHref = $(this).attr("href");
    e.preventDefault();
    alert("you clicked a link"),
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      // thisHref,
      success: function(commits){
        $("tbody").empty();
        for(var i=0; i <commits.length; i++) {
            $("tbody").append(buildTableRow(commits[i]));

        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        alert("Something went wrong");
      }

  });
    function buildTableRow(commitData) {
      var fullNameTd =$("<td>").append(commitData.fullNameTd);
      var commitMsgTd =$("<td>").append(commitData.commit);
      var dateTd =$("<td>").append(commitData.dateTd);
      var authorTd =$("<td>").append(commitData.author.login);

        $("<tr").append(commitMsgTd)
        .append(dateTd)
        .append(authorTd)
    }
});

});
