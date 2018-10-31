'use strict';

angular.module('myApp.dashboardView', ['ngRoute', 'myApp.fileUploadDirective'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'src/views/dashboard/dashboard_view.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'FilmService', function ($scope, FilmService) {

    $scope.agitatedCalmSlider = 5;
    $scope.happySadSlider = 5;
    $scope.tiredWideAwakeSlider = 5;
    $scope.scaredFearlessSlider = 5;
    $scope.showUploadDropDown = false;

    $scope.setMoodCards = function () {
      console.log($scope.agitatedCalmSlider);
    };


    $scope.$on('fileUploadDirective:fileUploadComplete', function () {
      $scope.showUploadDropDown = false;
    });
  }]);