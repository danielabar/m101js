'use strict';

angular.module('m101jsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/week1', {
        templateUrl: 'views/week1.html',
        controller: 'Week1Ctrl'
      })
      .when('/week2', {
        templateUrl: 'views/week2.html',
        controller: 'Week2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
