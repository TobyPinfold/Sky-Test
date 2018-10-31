'use strict';

angular.module('myApp.filmService', [])
  .service('FilmService', [ '$rootScope', '$interval', function($rootScope, $interval) {

    this.films = {};
    var bruh = "it can rach me";

    this.storeFilms = (file) => {
        this.readFileContents(file)
            .then((fileContents) => {
                parseXMLtoJSON(fileContents).then((parsedFileAsJson) => {
                    if(parsedFileAsJson !== null) {
                        this.films = parsedFileAsJson;
                        $rootScope.$broadcast('filmService updatedFilms', this.films);
                    }
                    console.log(this.films);
                });
            });
    };

    $rootScope.$watch(this.films, (n, o)=>{
        console.log(n, o);
    });


    this.readFileContents = (file) => {
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
    return this;
}]);