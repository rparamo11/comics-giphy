$(document).ready(function() {

    var comics = ["x-men","wolverine","spiderman","the avengers","the hulk","iron man","batman", "green lantern"];

// displays comics arrays buttons
    function userButtons() {
        $("#beginGifs").empty();

        for (var i = 0; i < comics.length; i++) {
            var searchBtn = $("<button>");
            searchBtn.attr("data-search", comics[i]);
            searchBtn.addClass("gif-button");
            searchBtn.text(comics[i]);

            $("#beginGifs").append(searchBtn);
        }
    }

 // user adds button to array by form of input in search field
    function addComics() {
        $("#addSearch").on("click", function() {
            var userInput = $("#search-input").val().trim();

            comics.push(userInput);

            userButtons();

        });
    }

// when user button clicked gifs will display
    function display() {
        var search = $(this).attr("data-search");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search  + "&api_key=fScMijy8O0JEXrlQYgi9zqjDQDhVTOlV&limit=12"; 

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            // console.log(response);
            $("#gifs-show-here").empty();

            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var searchDiv = $("<div>");
                searchDiv.addClass("searchDiv");
                var p = $("<p>").text("Rating: " + results[i].rating);

                var image = $("<img>");
                
                image.attr("src", results[i].images.fixed_height_still.url);
                image.attr("data-still", results[i].images.fixed_height_still.url);
                image.attr("data-animate", results[i].images.fixed_height.url);
                image.attr("data-state", "still");
                image.addClass("gif");

                searchDiv.addClass("gif");
                searchDiv.append(image);
                searchDiv.append(p);

                $("#gifs-show-here").prepend(searchDiv);
            }
        });
    }

    userButtons();
    addComics();
    display();
});
