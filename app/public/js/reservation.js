/**  RESTAURANT SELECT **/
//____________________________________________________________//

//MEXICAN
$('#mexican').on('click', function () {
    var mexicanSelect = "<h4 style='font-weight:bold;'>Fiesta Mexicana</h4>"
    var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonMex = "<div class='form-check'><input class='form-check-input' type='radio' name='chips' id='mexApp' value='chips' checked><label class='form-check-label' for='exampleRadios1'>Tortilla Chips w/ Salsa</label></div>"
    var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='chips' id='noMexApp' value='no chips'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(mexicanSelect).appendTo('#mexican-appetizer');
    $(query).appendTo('#mexican-appetizer');
    $(radioButtonMex).appendTo('#mexican-appetizer');
    $(noThankYou).appendTo('#mexican-appetizer');

    // var mexicanApp = $("input[type='radio'][name='chips']:checked").val(); 
    // console.log(mexicanApp);
    $("input[type='radio']").click(function () {
        var radioValue = $("input[name='chips']:checked").val();
        if (radioValue) {
            alert("You Selected - " + radioValue);
            resRestaurant = "Fiessta Mexicana";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
    });



});

//ITALIAN
$('#italian').on('click', function () {
    var italianSelect = "<h4 style='font-weight:bold;'>Ristorante Italiano</h4>"
    var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonItl = "<div class='form-check'><input class='form-check-input' type='radio' name='bread' id='exampleRadios1' value='bread' checked><label class='form-check-label' for='exampleRadios1'>Bruschetta</label></div>"
    var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='bread' id='exampleRadios1' value='no bread'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(italianSelect).appendTo('#italian-appetizer');
    $(query).appendTo('#italian-appetizer');
    $(radioButtonItl).appendTo('#italian-appetizer');
    $(noThankYou).appendTo('#italian-appetizer');

    $("input[type='radio']").click(function () {
        var radioValue = $("input[name='bread']:checked").val();
        if (radioValue) {
            alert("You Selected - " + radioValue);
            resRestaurant = "Risterante Italiano";
            resAppetizer = radioValue;
        }
        console.log("You Selected " + resRestaurant);
        console.log(resAppetizer);
    });

});

//AMERICAN
$('#american').on('click', function () {
    var americanSelect = "<h4 style='font-weight:bold;'>Burgers 'N' Bases</h4>"
    var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonAmr = "<div class='form-check'><input class='form-check-input' type='radio' name='salad' id='exampleRadios1' value='salad' checked><label class='form-check-label' for='exampleRadios1'>Caesar Salad Spears</label></div>"
    var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='salad' id='exampleRadios1' value='no salad'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(americanSelect).appendTo('#american-appetizer');
    $(query).appendTo('#american-appetizer');
    $(radioButtonAmr).appendTo('#american-appetizer');
    $(noThankYou).appendTo('#american-appetizer');

    $("input[type='radio']").click(function () {
        var radioValue = $("input[name='salad']:checked").val();
        if (radioValue) {
            alert("You Selected - " + radioValue);
            resRestaurant = "Burgers 'N' Bases";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
    });

});

//CHINESE
$('#chinese').on('click', function () {
    var chineseSelect = "<h4 style='font-weight:bold;'>China Happy Food</h4>"
    var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonChi = "<div class='form-check'><input class='form-check-input' type='radio' name='dumplings' id='exampleRadios1' value='dumplings' checked><label class='form-check-label' for='exampleRadios1'>Pan-Fried Vegetable Dumplings</label></div>"
    var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='dumplings' id='exampleRadios1' value='no dumplings'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(chineseSelect).appendTo('#chinese-appetizer');
    $(query).appendTo('#chinese-appetizer');
    $(radioButtonChi).appendTo('#chinese-appetizer');
    $(noThankYou).appendTo('#chinese-appetizer');

    $("input[type='radio']").click(function () {
        var radioValue = $("input[name='dumplings']:checked").val();
        if (radioValue) {
            alert("You Selected - " + radioValue);
            resRestaurant = "China Happy Food";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
    });

});

//BREWERY
$('#brewery').on('click', function () {
    var brewerySelect = "<h4 style='font-weight:bold;'>Brew-U</h4>"
    var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonBrew = "<div class='form-check'><input class='form-check-input' type='radio' name='corn' id='exampleRadios1' value='Brown Ale Caramel Corn with Pretzels & Pecans' checked><label class='form-check-label' for='exampleRadios1'>Brown Ale Caramel Corn with Pretzels & Pecans</label></div>"
    var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='corn' id='exampleRadios1' value='No Brown Ale Caramel Corn with Pretzels & Pecans'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(brewerySelect).appendTo('#brewery-appetizer');
    $(query).appendTo('#brewery-appetizer');
    $(radioButtonBrew).appendTo('#brewery-appetizer');
    $(noThankYou).appendTo('#brewery-appetizer');
    var radioValue = $("input[name='corn']:checked").val();
    $("input[type='radio']").click(function () {
        if (radioValue) {
            alert("You Selected - " + radioValue);
            resRestaurant = "Brew-U";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
    });

});

//**  TIME SELECT **//
//____________________________________________________________//

//5:30 PM
$('#time-530').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>5:30 PM</h4>"
    selected = true;
    $(timeSelect).appendTo('#530');
    if (selected) {
        resTime = "530";
    };
    console.log(resTime);
});

//6:00 PM
$('#time-600').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>6:00 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#600');
    if (selected) {
        resTime = "600";
    };
    console.log(resTime);
});

//6:30 PM
$('#time-630').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>6:30 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#630');
    if (selected) {
        resTime = "630";
    };
    console.log(resTime);
});

//7:00 PM
$('#time-700').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>7:00 PM</h4>"
    selected = true;
    $(timeSelect).appendTo('#700');
    if (selected) {
        resTime = "700";
    };
    console.log(resTime);
});

//7:30 PM
$('#time-730').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>7:30 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#730');
    if (selected) {
        resTime = "730";
    };
    console.log(resTime);
});

//8:00 PM
$('#time-800').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>8:00 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#800');
    if (selected) {
        resTime = "800";
    };
    console.log(resTime);
});


//**  PARTY SIZE SELECT **//
//____________________________________________________________//
var selected = false;
var resRestaurant;
var resMobile;
var resAppetizer;
var resTime;
var resGuests;

//TWO
$('#party-two').on('click', function () {
    selected = true;
    var partySizeSelect = "<h4 style='font-weight:bold;'>Two</h4>"
    console.log(twoTop);
    $(partySizeSelect).appendTo('#two-top');
    if (selected) {
        resGuests = "twoTop";
    };
    console.log(resGuests);
});

//FOUR
$('#party-four').on('click', function () {
    selected = true;
    console.log("party of 4");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Four</h4>"
    $(partySizeSelect).appendTo('#four-top');
    if (selected) {
        resGuests = "fourTop";
    };
    console.log(resGuests);
});

//SIX
$('#party-six').on('click', function () {
    selected = true;
    console.log("party of 6");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Six</h4>"
    $(partySizeSelect).appendTo('#six-top');
    if (selected) {
        resGuests = "sixTop";
    };
    console.log(resGuests);
});

//EIGHT
$('#party-eight').on('click', function () {
    selected = true;
    console.log("party of 8");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Eight</h4>"
    $(partySizeSelect).appendTo('#eight-top');
    if (selected) {
        resGuests = "eightTop";
    };
    console.log(resGuests);
});


$("#submit").click(function () {
    var submit = $("input[type='tel']").val(); //NEED TO GET A CODE TO VALIDATE THE PHONE #
    var confirmation = confirm("Is this number correct? " + submit);
    if (confirmation === true) {
        resMobile = submit;
    } else {
        alert("Please enter a valid number!");

    }
    console.log(resMobile);
});

//** CHECK AVAILABILITY CLICK **//
//____________________________________________________________//

$('#check-avail').on('click', function () {
    // window.location.replace('../public/confirm.html'); //---------------This is not a good choice!/


});
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
$("#check-avail").on("click", function (event) {
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
    // $("#resRestaurant").val("");
    // $("#resPhone").val("");
    // $("#resAppetizer").val("");
    // $("#resTime").val("");
    // $("#resGuests").val("");
});