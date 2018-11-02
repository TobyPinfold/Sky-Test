'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboardView',
  'myApp.filmService',
  'myApp.fileUploadDirective',
  'myApp.filmListModel',
  'myApp.filmModel',
  'myApp.sliderOptionsModel',
  'myApp.xmlToJsonParserService',
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/dashboard' });
  }]);
