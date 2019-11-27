$(document).ready(function() {

    // array of cars
    var hotcars = ["Volvo S60-R", "Audi RS-6", "Toyota Supra", "Ford Mustang GT", "Aston Martin Vulcan", "BMW M5", "McLaren P9", "Koenigsegg CCX"];

    //function for looping through the array hotcars and creating buttons


    //function that displays the gif buttons
    function displayGifButtons() {
        $("#giphyButtonView").empty();
        for (var i = 0; i < hotcars.length; i++) {
            console.log(hotcars[i])
            var gifButton = $("<button>");
            gifButton.addClass("cars");
            gifButton.attr("data-name", hotcars[i]);
            gifButton.text(hotcars[i]);
            $("#giphyButtonView").append(gifButton);
        }
    }

    $(document).on("click", ".cars", function() {
        var type = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
                console.log(response)
                var results = response.data
            })
    })








    displayGifButtons()
        //function that adds new button
    function addGifButtons() {





    }



    //function that removes last button
    function removeGifButton() {





    }


    //function that displays gifs
    function displayGifButton() {





    }
})