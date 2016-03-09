'use strict';

/**
 * @ngdoc overview
 * @name oscarsAppApp
 * @description
 * # oscarsAppApp
 *
 * Main module of the application.
 */
angular
  .module('oscarsAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
