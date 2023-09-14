$(document).ready(function () {
  $("#searchIcon").on("click", function () {
    // Get the search term from the input field
    var searchTerm = $("#searchInput").val().trim();
    alert(searchTerm);

    // Clear previous highlights
    $("#content").removeHighlight();

    // Check if the search term is not empty
    if (searchTerm !== "") {
      // Create a regular expression to match the search term globally and case-insensitively
      var regex = new RegExp(searchTerm, "gi");

      // Use .html() to get the content of the element
      var content = $("#content").html();

      // Use .replace() to wrap all matching words with a span to highlight them
      var highlightedContent = content.replace(regex, function (match) {
        return '<span class="highlight">' + match + "</span>";
      });

      // Update the content with highlighted matches
      $("#content").html(highlightedContent);
    }
  });

  // Remove highlighting when the input field is changed
  $("#searchInput").on("input", function () {
    $("#content").removeHighlight();
  });
});

// Extend jQuery to add a removeHighlight() function
$.fn.removeHighlight = function () {
  $(this)
    .find(".highlight")
    .each(function () {
      $(this).replaceWith($(this).text());
    });
};
