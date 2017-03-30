$(document).ready(function() {

	var inputValue = [];
	var createdButtons = [];

    $("#add-gif-button").on("click" , function() {
        event.preventDefault();

        var searchValue = $("#text-input").val();
        inputValue.push(searchValue);

        var button = $("<button id="searchValue">");
        button.html(searchValue);

        createdButtons.push(button);


        $("#list-of-buttons").append(button);

        console.log(inputValue);
        console.log(createdButtons);
    });

    $("button").on("click", function() {
    	event.preventDefault();
    	for (var i = 0; i < createdButtons.length; i++) {
           var buttonClicked = createdButtons[i];
       };

       console.log(buttonClicked);
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + inputValue[0] + "&api_key=dc6zaTOxFJmzC&limit=10";

    	$.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response)
        });

    });

});


// $(document).ready(function() {

//    var animalsArray = [];

//    $('#add-gif-btn').click(function() {
//        event.preventDefault();
 
//        var searchValue = $('#text-input').val();
//        animalsArray.push(searchValue);
//        console.log(animalsArray);

//        var newButton = $('<button class="btn-btn-success" id="animalButton">');
//        newButton.html(searchValue);
//        $('#list-of-buttons').append(newButton);

//        $('#text-input').val("");

//        var value = $('#animalButton').text();
//        console.log(value);


//        $('#animalButton').click(function() {
//            event.preventDefault();

//            for (var i = 0; i < animalsArray.length; i++) {
//                var buttonText = animalsArray[i];
//            };

//            console.log(buttonText);

//            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=dc6zaTOxFJmzC&limit=10";

//            $.ajax({
//                url: queryURL,
//                method: "GET"
//            }).done(function(response) {
//                console.log(response)

//            });

//        });


//    });

// });
