'use strict';

angular.module('myApp.dashboardView', ['ngRoute', 'myApp.fileUploadDirective'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'src/views/dashboard/dashboard_view.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', function ($scope) {

    $scope.agitatedCalmSlider = 50;
    $scope.happySadSlider = 50;
    $scope.tiredWideAwakeSlider = 50;
    $scope.scaredFearlessSlider = 50;
    $scope.showUploadDropDown = false;

    $scope.setMoodCards = function () {
      console.log($scope.agitatedCalmSlider);
    };

    $scope.$on('fileUploadDirective:fileUploadComplete', function () {
      $scope.showUploadDropDown = false;
    });
  }]);