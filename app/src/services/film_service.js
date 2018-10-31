'use strict';

angular.module('myApp.filmService', [])
  .service('FilmService', [function () {

    var films = [];

    var storeFilms = function(file) {

        readFileContents(file)
            .then(function(fileContents) {
                parseXML(fileContents);   
            });
    }

    function readFileContents(file) {
        var fileReader = new FileReader();

        return new Promise((resolve, reject) => {
            fileReader.onload = function() {
                resolve(fileReader.result)
            }
            fileReader.readAsText(file);
        });
    }

    function parseXML(file) {
        console.log(file);
    }

    function getFilms() {
        return films;

    }

    return({
        getFilms : films,
        storeFilms : storeFilms,
    });
}]);