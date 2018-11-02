'use strict';

angular.module('myApp.dashboardView', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'src/views/dashboard/dashboard_view.html',
      controller: 'DashboardController'
    });
  }])

  .controller('DashboardController',
    ['$scope', 'FilmService', 'SliderOptionsModel', 'FilmListModel',
      function ($scope, FilmService, SliderOptionsModel, FilmListModel) {

        var agitatedCalmSlider = new SliderOptionsModel("agitatedCalmSlider", "Agitated", "Calm", 5);
        var happySadSlider = new SliderOptionsModel("happySadSlider", "Happy", "Sad", 5);
        var tiredWideAwakeSlider = new SliderOptionsModel("tiredWideAwakeSlider", "Tired", "Wide Awake", 5);
        var scaredFearlessSlider = new SliderOptionsModel("scaredFearlessSlider", "Scared", "Fearless", 5);

        $scope.sliders = {
          "agitatedCalmSlider": agitatedCalmSlider,
          "happySadSlider": happySadSlider,
          "tiredWideAwakeSlider": tiredWideAwakeSlider,
          "scaredFearlessSlider": scaredFearlessSlider
        };

        $scope.displayedSuggestedFilms = new FilmListModel();

        $scope.getSuggestions = () => {
            $scope.displayedSuggestedFilms = FilmService.calculateSuggestedFilms($scope.sliders);
        };
      }]);