$(document).ready(function () {
  $("#searchIcon").on("click", function () {
    var searchWord = $("#searchInput").val().trim();

    $(".highlighted").removeClass("highlighted");

    if (searchWord !== "") {
      var regex = new RegExp(searchWord, "gi");

      $("#content")
        .find(":contains('" + searchWord + "')")
        .each(function () {
          // Replace the matched text with a span to highlight it
          var replacedText = $(this)
            .text()
            .replace(regex, function (match) {
              return "<span class='highlighted'>" + match + "</span>";
            });

          $(this).html(replacedText);
        });
    }
  });
});
