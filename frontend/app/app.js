'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'quino/quino.html',
        controller: 'QuinoCtrl'
      })
      .when('/help', {
        templateUrl: 'help/help.html',
      })
      .when('/contact', {
        templateUrl: 'contact/contact.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
