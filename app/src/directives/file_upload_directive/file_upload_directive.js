'use strict';

angular.module('myApp.fileUploadDirective', [])
    .directive('fileUpload', ['FilmService', function (filmService) {
        return {
            templateUrl: 'src/directives/file_upload_directive/fileUploadDirective.html',
            link: function ($scope, element) {

                $scope.filename = 'Upload Content';
                $scope.error = null;

                element.bind('change', function () {
                    $scope.$apply(function () {
                        var file = document.getElementById('fileInputBox').files[0];

                        if(file !== null){
                            if (file.type !== 'text/xml') {
                                $scope.error = file.name + " is not an xml document";
                            } else {
                                $scope.error = null;
                                $scope.filename = file.name;
                                filmService.storeFilms(file);
                            }
                        }
                    });
                });
            }
        };
    }]);