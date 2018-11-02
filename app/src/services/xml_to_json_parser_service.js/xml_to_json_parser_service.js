'use strict';

angular.module('myApp.xmlToJsonParserService', [])
    .service('XmlToJsonParserService', ['$interval', function ($interval) {
        this.parseXMLtoJSON = (fileRAW) => {
            return readFileContents(fileRAW)
                .then((fileContentsXML) => {
                    var promise = parseXMLtoJSON(fileContentsXML);
                    return promise;
                });
        }


        function readFileContents(fileRAW) {
            var fileReader = new FileReader();
            return new Promise((resolve, reject) => {
                fileReader.onload = function () {
                    resolve(fileReader.result)
                }
                fileReader.readAsText(fileRAW);
            });
        }

        function parseXMLtoJSON(fileContentsXML) {
            var xmlParser = new X2JS();

            var promise = new Promise((resolve, reject) => {
                var parsedResultJSON = "null";
                parsedResultJSON = xmlParser.xml_str2json(fileContentsXML);

                var intervalTimeInMs = 500;
                var intervalMaxIterations = 10;

                var parsedResultChecker = $interval(() => {
                    if (parsedResultJSON !== "null") {
                        resolve(parsedResultJSON);
                        $interval.cancel(parsedResultChecker);
                    }
                }, intervalTimeInMs, intervalMaxIterations);
            });

            return promise;
        }

        return this;
    }]);