'use strict';

angular.module('myApp.filmService', [])
  .service('FilmService', [ '$rootScope', '$interval', function($rootScope, $interval) {

    this.films = {};

    this.storeFilms = (file) => {

        readFileContents(file)
            .then((fileContents) => {

                parseXMLtoJSON(fileContents)
                    .then((parsedFileAsJson) => {

                        if(parsedFileAsJson !== null) {
                            this.films = convertJSONtoFilmModels(parsedFileAsJson);
                            $rootScope.$broadcast('filmService updatedFilms', this.films);
                         }
                });
            });
    };

    function readFileContents(file) {
        var fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onload = function() {
                resolve(fileReader.result)
            }
            fileReader.readAsText(file);
        });
    }

    function parseXMLtoJSON(file) {
        var xmlParser = new X2JS();

        return new Promise((resolve, reject) => {
            var parsedResult = "unset var"
            parsedResult = xmlParser.xml_str2json(file);

            var intervalTimeInMs = 500;
            var intervalMaxIterations = 10;

            var parsedResultChecker = $interval(()=> {
                if(parsedResult !== "unset var") {
                  resolve(parsedResult);
                  console.log(parsedResult);
                  $interval.cancel(parsedResultChecker);
                }
            }, intervalTimeInMs, intervalMaxIterations);

        });
    }

    function convertJSONtoFilmModels(parsedFileAsJson) {
        var jsonListOfFilms = parsedFileAsJson["programme-data"]["programme"];
        var jsonListOfFilmsKeys = Object.keys(jsonListOfFilms);

        var filmModels = {};

        for(var index = 0; index < jsonListOfFilmsKeys.length; index++) {
            var id = jsonListOfFilmsKeys[index];
            var jsonFilm = jsonListOfFilms[id];
            var filmModel = new FilmModel();

            filmModel.setId(jsonListOfFilmsKeys[index]);
            filmModel.setName(jsonFilm["name"]);
            filmModel.setImagePath(jsonFilm["image-path"]);
            filmModel.setAgitatedCalmValue(jsonFilm["agitated-calm"]);
            filmModel.setTiredWideAwakeValue(jsonFilm["tired-wideawake"]);
            filmModel.setScaredFearlessValue(jsonFilm["scared-fearless"]);
            filmModel.setHappySadValue(jsonFilm["happy-sad"]);

            filmModels[id] = filmModel;
        }
        return filmModels;
    }

    return this;
}]);