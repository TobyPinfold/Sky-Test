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
      var filteredFilms = Array();

      if($scope.allFilms != null) {
        
        var allFilms = _.cloneDeep($scope.allFilms);
        var maxBounds= 6;
        
        for(var UpperAndLowerBounds = 0; UpperAndLowerBounds < maxBounds && getNumberOfItemsInStaticSizedArray(filteredFilms) < 5; UpperAndLowerBounds++) {
          var keys = Object.keys(allFilms);
          for(var index = 0; index < keys.length; index++){
            if(getNumberOfItemsInStaticSizedArray(filteredFilms) < 5) {
              var key = keys[index];
              var film = allFilms[key];
              var isInBounds = isFilmInBounds(film, UpperAndLowerBounds);
                if(isInBounds) {
                  var copyFilm = _.cloneDeep(film);
                  filteredFilms.push(copyFilm);
                  delete allFilms[key];
                  $scope.suggestedFilms = filteredFilms;
                }
            } else {
              return;
            }
          }  
        }
        $scope.suggestedFilms = filteredFilms;
    }

    function getNumberOfItemsInStaticSizedArray(array){
      var counter = 0;
      _.each(array, (entry) =>{
        if(entry != null && entry !== 'undefined') {
          counter++;
        }
      });
      console.log(counter);
      return counter;
    }

    function isFilmInBounds(film, bounds) {

      var agitatedCalmSliderValue = $scope.sliders["agitatedCalmSlider"].slideValue;
      var happySadSliderValue = $scope.sliders["happySadSlider"].slideValue;
      var tiredWideAwakeSliderValue = $scope.sliders["tiredWideAwakeSlider"].slideValue;
      var scaredFearlessSliderValue = $scope.sliders["scaredFearlessSlider"].slideValue;
      
      var agitatedCalmSliderWithinBounds =
      film.agitatedCalmValue <= (agitatedCalmSliderValue + bounds) && 
      film.agitatedCalmValue >= (agitatedCalmSliderValue - bounds);

      var happySadSliderWithinBounds =
      film.happySadValue <= (happySadSliderValue + bounds) && 
      film.happySadValue >= (happySadSliderValue - bounds);

      var tiredWideAwakeSlider =
      film.tiredWideAwakeValue <= (tiredWideAwakeSliderValue + bounds) && 
      film.tiredWideAwakeValue >= (tiredWideAwakeSliderValue - bounds);

      var scaredFearlessSliderWithinBounds =
      film.tiredWideAwakeValue <= (scaredFearlessSliderValue + bounds) && 
      film.tiredWideAwakeValue >= (scaredFearlessSliderValue - bounds);

      return agitatedCalmSliderWithinBounds && happySadSliderWithinBounds && tiredWideAwakeSlider && scaredFearlessSliderWithinBounds;
    }
  }
}]);