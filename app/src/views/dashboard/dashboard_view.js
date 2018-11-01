'use strict';

angular.module('myApp.dashboardView', ['ngRoute', 'myApp.fileUploadDirective', 'myApp.filmService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'src/views/dashboard/dashboard_view.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'FilmService','$interval', function ($scope, filmService, $interval) {
    
    var agitatedCalmSlider = new SliderOptions();
    agitatedCalmSlider.setMinValueLabel("Agitated");
    agitatedCalmSlider.setMaxValueLabel("Calm");
    agitatedCalmSlider.setId("agitatedCalmSlider");
    
    var happySadSlider = new SliderOptions();
    happySadSlider.setMinValueLabel("Happy");
    happySadSlider.setMaxValueLabel("Sad");
    happySadSlider.setId("happySadSlider");


    var tiredWideAwakeSlider = new SliderOptions();
    tiredWideAwakeSlider.setMinValueLabel("Tired");
    tiredWideAwakeSlider.setMaxValueLabel("Wide Awake");
    tiredWideAwakeSlider.setId("tiredWideAwakeSlider");


    var scaredFearlessSlider = new SliderOptions();
    scaredFearlessSlider.setMinValueLabel("Scared");
    scaredFearlessSlider.setMaxValueLabel("Fearless");
    scaredFearlessSlider.setId("scaredFearlessSlider");


    $scope.sliders = {
      "agitatedCalmSlider" : agitatedCalmSlider, 
      "happySadSlider": happySadSlider, 
      "tiredWideAwakeSlider" : tiredWideAwakeSlider, 
      "scaredFearlessSlider" : scaredFearlessSlider
    };
    
    $scope.suggestedFilms = new Array(5);

    $scope.allFilms = {};

    $scope.$on('filmService updatedFilms', (_, films) => {
      $scope.allFilms = films;
      $scope.calculateSuggestedFilms();
    });



    $scope.calculateSuggestedFilms = () => {
      console.log($scope.sliders);
      console.log($scope.allFilms);
      if($scope.allFilms != null) {
        
        var filteredFilms = {};
        var UpperAndLowerBounds = 2;
        
        Object.keys($scope.allFilms).forEach((key) => {
          var film = $scope.allFilms[key];
          var isInBounds = isFilmInBounds(film, UpperAndLowerBounds);
  
            if(isInBounds) {
              filteredFilms[key] = film;
            }
        });
     
        var replacementSuggestedFilms = new Array(5);

        for(var i = 0; i < 5; i++) {
          replacementSuggestedFilms[i] = filteredFilms[i];
          console.log();
        }

        $scope.suggestedFilms = replacementSuggestedFilms;

    }

    function isFilmInBounds(film, bounds) {

      var agitatedCalmSliderValue = $scope.sliders["agitatedCalmSlider"].slideValue;
      var happySadSliderValue = $scope.sliders["happySadSlider"].slideValue;
      var tiredWideAwakeSliderValue = $scope.sliders["tiredWideAwakeSlider"].slideValue;
      var scaredFearlessSliderValue = $scope.sliders["scaredFearlessSlider"].slideValue;
      
      console.log(agitatedCalmSliderValue, happySadSliderValue, tiredWideAwakeSliderValue, scaredFearlessSliderValue )


      var agitatedCalmSliderWithinBounds =
      film.agitatedCalmValue < (agitatedCalmSliderValue + bounds) && 
      film.agitatedCalmValue > (agitatedCalmSliderValue - bounds);
      console.log(film.agitatedCalmValue, agitatedCalmSliderValue, bounds );

      var happySadSliderWithinBounds =
      film.happySadValue < (happySadSliderValue + bounds) && 
      film.happySadValue > (happySadSliderValue - bounds);

      var tiredWideAwakeSlider =
      film.tiredWideAwakeValue < (tiredWideAwakeSliderValue + bounds) && 
      film.tiredWideAwakeValue > (tiredWideAwakeSliderValue - bounds);

      var scaredFearlessSliderWithinBounds =
      film.tiredWideAwakeValue < (scaredFearlessSliderValue + bounds) && 
      film.tiredWideAwakeValue > (scaredFearlessSliderValue - bounds);

      console.log(agitatedCalmSliderWithinBounds && happySadSliderWithinBounds && tiredWideAwakeSlider && scaredFearlessSliderWithinBounds);
      return agitatedCalmSliderWithinBounds && happySadSliderWithinBounds && tiredWideAwakeSlider && scaredFearlessSliderWithinBounds;
    }
  }
}]);