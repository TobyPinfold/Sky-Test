'use strict';

angular.module('myApp.fileUploadDirective', ['ngRoute'])
    .directive('fileUpload', function () {
        return {
            templateUrl: 'src/directives/fileUploadDirective/fileUploadDirective.html',
            link: function ($scope, element) {
                $scope.filename = 'Upload Content';
                $scope.error = null;

                element.bind('change', function () {
                    $scope.$apply(function () {
                        var file = document.getElementById('fileInputBox').files[0];
                        if (file.type !== 'text/xml') {
                            $scope.error = file.name + " is not an xml document";
                        } else {
                            $scope.error = null;
                            console.log(file);
                            $scope.filename = file.name;
                            $scope.uploadFile(file);
                        }
                    });
                });

                $scope.uploadFile = function (file) {
                    var fileReader = new FileReader();

                    var fileReaderPromise = new Promise((resolve, reject) => {
                        fileReader.onload = resolve;
                        fileReader.readAsText(file);
                    });

                    fileReaderPromise.then(function () {
                        $scope.$emit('fileUploadDirective:fileUploadComplete');
                    });
                };
            }
        };
    });