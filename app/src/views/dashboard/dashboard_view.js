'use strict';

angular.module('myApp.dashboardView', ['ngRoute', 'myApp.fileUploadDirective', 'myApp.filmService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'src/views/dashboard/dashboard_view.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'FilmService','$interval', function ($scope, filmService, $interval) {
    
    var displayedFilms = [];
    $scope.allFilms = {};

    $scope.agitatedCalmSlider = 5;
    $scope.happySadSlider = 5;
    $scope.tiredWideAwakeSlider = 5;
    $scope.scaredFearlessSlider = 5;
    $scope.showUploadDropDown = false;

    $scope.setMoodCards = function () {
      console.log($scope.agitatedCalmSlider);
    };

    $scope.$on('filmService updatedFilms', function(scope, val) {
      $scope.allFilms = val;

    });

    $scope.$on('fileUploadDirective:fileUploadComplete', function () {
      $scope.showUploadDropDown = false;
    });
  }]);