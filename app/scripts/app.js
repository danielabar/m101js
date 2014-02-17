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
      .when('/week3', {
        templateUrl: 'views/week3.html',
        controller: 'Week3Ctrl'
      })
      .when('/week4', {
        templateUrl: 'views/week4.html',
        controller: 'Week4Ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
