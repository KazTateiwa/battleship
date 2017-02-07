//starts torpedo count to zero
var torpedo = 0;

$(document).ready(function() {
    for (var row = 0; row < 10; row++) {
      $("table").append('<tr id="' + row + '"></tr>')
      //create a new table row with id "row<currentRow>"
      for (var column = 0; column < 10; column++) {
        $('#' + row).append("<td></td>");
        //makes a new table cell with id "index<i>" under "row<currentRow"
      }
    }
    //when user clicks position, it changes color to show that it has been torpedoed.
    $("td").on("click", function() {
      //adds class of cellClicked to position
      $(this).addClass("cellClicked");
      //adds one to torpedo count
      torpedo++;
      //.text replaces h2 text with string + torpedo count.
      $("#launched").text("Torpedos Launched: " + torpedo);
    });
});
