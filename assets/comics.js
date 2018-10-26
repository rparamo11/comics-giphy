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

    addComics();
})
