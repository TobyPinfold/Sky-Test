'use strict';

angular.module('myApp.filmService', [])
    .service('FilmService', ['$rootScope', 'FilmModel', 'XmlToJsonParserService', 'FilmListModel', function ($rootScope, FilmModel, XmlToJsonParserService, FilmListModel) {

        this.films = {};

        this.storeFilms = (fileRAW) => {
            var XmlToJsonParserPromise = XmlToJsonParserService.parseXMLtoJSON(fileRAW);
            XmlToJsonParserPromise.then((fileJSON) => {
                if (fileJSON !== null) {
                    this.films = convertJSONtoFilmModels(fileJSON);
                }
            });
        };



        this.calculateSuggestedFilms = (sliders) => {
            var filteredFilms = new FilmListModel();
            var maxBounds = 4;
            var maxSuggestionSize = 5;

            if (this.films != null) {

                var clonedFilms = _.cloneDeep(this.films);

                for (var bounds = 0; bounds < maxBounds && filteredFilms.getNumberOfStoredFilms() < maxSuggestionSize; bounds++) {
                    var clonedFilmsKeys = Object.keys(clonedFilms);
                    for (var index = 0; index < clonedFilmsKeys.length && filteredFilms.getNumberOfStoredFilms() < maxSuggestionSize; index++) {
                        var key = clonedFilmsKeys[index];
                        var film = clonedFilms[key];
                        var isInBounds = film.isWithinSliderBounds(sliders, bounds);
                        if (isInBounds) {
                            var copyFilm = _.cloneDeep(film);
                            filteredFilms.listOfFilms.push(copyFilm);
                            delete clonedFilms[key];
                        }
                    }
                }
                return filteredFilms;
            }
        }



        function convertJSONtoFilmModels(fileContentsJSON) {
            fileContentsJSON = fileContentsJSON["programme-data"]["programme"];
            var fileContentsKeys = Object.keys(fileContentsJSON);

            var filmModels = {};

            for (var index = 0; index < fileContentsKeys.length; index++) {
                var id = fileContentsKeys[index];

                var filmJSON = fileContentsJSON[id];

                var filmModel = new FilmModel(
                    id,
                    filmJSON["name"],
                    filmJSON["image-path"],
                    filmJSON["agitated-calm"],
                    filmJSON["tired-wideawake"],
                    filmJSON["scared-fearless"],
                    filmJSON["happy-sad"]
                );
                filmModels[id] = filmModel;

            }
            return filmModels;
        }

        return this;
    }
    ]);



