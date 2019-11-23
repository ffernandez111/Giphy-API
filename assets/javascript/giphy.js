$(document).ready(function() {

    // array of cars
    var hotcars = ["Volvo S60-R", "Audi RS-6", "Toyota Supra", "Ford Mustang GT", "Aston Martin Vulcan", "BMW M5", "McLaren P9", "Koenigsegg CCX"];


    //function that displays the gif buttons
    function displayGifButtons() {
        $("#giphyButtonsView").empty();
        for (var i = 0; i < hotcars.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("cars");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", hotcars[i]);
            gifButton.text(hotcars[i]);
            $("#giphyButtonsView").append(giphyButton);
        }
    }
})

//function that adds new button




//function that removes last button



//function that displays gifs