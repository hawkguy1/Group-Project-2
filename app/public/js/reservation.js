// ----- DISPLAYS ALL RESERVATIONS ----- //
$.get("/api/all", function (data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("reservation");
            row.append("<p>RESTAURANT: " + data[i].resRestaurant + "</p>");
            row.append("<p>MOBILE NUMBER: " + data[i].resPhone + "</p>");
            row.append("<p>APPETIZER:" + data[i].resAppetizer + "</p>");
            row.append("<p>TIME: " + data[i].resTime + "</p>")
            row.append("<p>GUESTS: " + data[i].resGuests + "</p>")
            $("#reservation-area").prepend(row);
        }
    }
});

// ----- WHEN USER MAKES RESERVATION ----- //
$("#reserve-submit").on("click", function (event) {
    event.preventDefault();

    // ----- TURNS RESERVATION INTO AN OBJECT ----- //
    var newReservation = {
        resRestaurant: $("#resName").val().trim(),
        resMobile: $("#resMobile").val().trim(),
        resAppetizer: $("#resAppetizer").val().trim(),
        resTime: $("#resTime").val().trim(),
        resGuests: $("#resGuests").val().trim(),
    };
    console.log(newReservation);

    // ----- AJAX POST REQUEST WITH JQUERY ----- //
    $.post("/api/new", newReservation)
        .then(function () {
            var row = $("<div>");
            row.addClass("reservation");
            row.append("<p>RESTAURANT: " + data[i].resRestaurant + "</p>");
            row.append("<p>MOBILE NUMBER: " + data[i].resPhone + "</p>");
            row.append("<p>APPETIZER:" + data[i].resAppetizer + "</p>");
            row.append("<p>TIME: " + data[i].resTime + "</p>")
            row.append("<p>GUESTS: " + data[i].resGuests + "</p>")
            $("#reservation-area").prepend(row);

        });

    // ----- EMPTY INPUT BOXES WITH EACH SUBMISSION ----- //
    $("#resRestaurant").val("");
    $("#resPhone").val("");
    $("#resAppetizer").val("");
    $("#resTime").val("");
    $("#resGuests").val("");
});
