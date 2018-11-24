// ----- DISPLAYS ALL RESERVATIONS ----- //
$.get("/api/all", function (data) {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("reservation");
        row.append("<p>RESERVATION NAME: " + data[i].resName + "</p>");
        row.append("<p>GUESTS: " + data[i].numGuests + "</p>");
        row.append("<p>RESERVATION TIME:" + data[i].resTime + "</p>");
        row.append("<p>GUEST MOBILE: " + data[i].resPhone + "</p>")
        row.append("<p>RESERVATION MADE: " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        $("#reservation-area").prepend(row);
      }
    }
  });
  
  // ----- WHEN USER MAKES RESERVATION ----- //
  $("#reserve-submit").on("click", function (event) {
    event.preventDefault();
  
    // ----- TURNS RESERVATION INTO AN OBJECT ----- //
    var newReservation = {
      resName: $("#resName").val().trim(),
      numGuests: $("#numGuests").val().trim(),
      resTime: $("#resTime").val().trim(),
      resPhone: $("#resphone").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newReservation);
  
    // ----- AJAX POST REQUEST WITH JQUERY ----- //
    $.post("/api/new", newReservation)
      .then(function () {
        var row = $("<div>");
        row.addClass("reservation");
        row.append("<p>RESERVATION NAME: " + data[i].resName + "</p>");
        row.append("<p>GUESTS: " + data[i].numGuests + "</p>");
        row.append("<p>RESERVATION TIME:" + data[i].resTime + "</p>");
        row.append("<p>GUEST MOBILE: " + data[i].resPhone + "</p>")
        row.append("<p>RESERVATION MADE: " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        $("#reservation-area").prepend(row);
  
      });
  
    // ----- EMPTY INPUT BOXES WITH EACH SUBMISSION ----- //
    $("#resName").val("");
    $("#numGuests").val("");
    $("#resTime").val("");
    $("#resPhone").val("");
  });
  